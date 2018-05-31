import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import {Redirect} from 'react-router-dom'
import {Button} from 'react-bootstrap'

class OrderList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: '',
      user: []
    }
    this.getItem = this.getItem.bind(this)
  }
  /// //////////////////////////////////////////////////////////////////
  // getting the products are ordered ::
  getItem () {
    var that = this
    console.log(this.state.value)
    $.ajax({
      type: 'GET',
      url: '/orderList',
      success: function (data) {
        console.log(data)
        var x = []
        for (var i = 0; i < data.length; i++) {
          if (data[i].name === that.state.value) {
            x.push(data[i])
          }
        }
        that.setState({orders: x})
        console.log('orders= ', that.state.Item)
      }
    })
  }
  /// //////////////////////////////////////////////////////////////////
  // getting the Customer Info. that ordered ::
  componentDidMount () {
    var that = this
    var user = this.props.userName
    console.log(user)
    $.ajax({
      url: '/orders',
      method: 'GET'
    })
      .done(function (data) {
        console.log(data)
        that.setState({
          user: data
        })
      })
      .fail(function (jqXHR, textStatus) {
        alert('No user Found')
      })
  }

  render () {
    var user = this.state.user
  	var userName = user.userName
    var phoneNumber = user.phoneNumber
    return (
      <div>
        <h1>Here is the Customer's Information</h1>
        <div>
          <h1>Name : {userName}</h1>
          <h1>Phone Number : {phoneNumber}</h1>
        </div>
        <br />
        <div>
          <h1>The Customer Order</h1>
        </div>
      </div>
    )
  }
}
export default OrderList
