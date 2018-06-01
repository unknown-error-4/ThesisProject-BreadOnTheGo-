import React from 'react'
import { Button, Panel, ListGroupItem, PanelGroup, FormControl, FormGroup } from 'react-bootstrap'
import Rating from './Rating.jsx'
import CardCom from './CardCom.jsx';
import {Redirect} from 'react-router-dom'

class SearchProduct extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      redirect: false,
      value: '',
      products: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.getItem = this.getItem.bind(this)
    this.handleClick=this.handleClick.bind(this);
  }

  handleChange (e) {
    this.setState({value: e.target.value})
  }

handleClick (){
  this.setState({redirect: true })
}

  handleSelect (activeKey) {
    this.setState({activeKey})
  }

  // handleSubmit (event) {
  //   $.ajax({
  //     type: 'GET',
  //     url: '/showProduct',
  //     data: {
  //       redirect: this.state.redirect
  //     },
  //     success: (data) => {
  //       console.log(data)
  //       if (data) {
  //         console.log('byebye')
  //         window.location.href = '/alo'
  //       }
  //     },
  //     error: (err) => {
  //       console.log('errlogout ', err)
  //     }
  //   })
  //   event.preventDefault()
  // }

  componentDidMount () {
    var that = this
    $.ajax({
      url: '/showProduct',
      method: 'GET'
    })
      .done(function (data) {
        console.log(data)
        that.setState({
          products: data
        })
      })
      .fail(function (jqXHR, textStatus) {
        alert('no products found')
      })
  }

  getItem () {
    var that = this
    console.log(this.state.value)
    $.ajax({
      type: 'GET',
      url: '/showProduct',
      success: function (data) {
        console.log(data)
        var x = []
        for (var i = 0; i < data.length; i++) {
          if (data[i].name === that.state.value) {
            x.push(data[i])
          }
        }
        that.setState({products: x})
        console.log('products= ', that.state.sItem)
      }
    })
  }

  // ///make the order ///
  // handleClick(event){
  //
  //   $.ajax ({
  //     type: 'POST',
  //     url: '/showProduct',
  //     data: {
  //       name: y.name,
  //       price: y.price
  //     },
  //     success: (data) => {
  //       console.log('order added',data)
  //       alert('Added to Your Cart');
  //     },
  //     error:(err) => {
  //       console.log('Failed in adding product to the Cart',err);
  //     }
  //   });
  //   event.preventDefault();
  // }

  render () {
    console.log(this,'hereeeee')
    var r = this;
    const { redirect } = this.state
    if (redirect) {
      return <Redirect to='/alo' />
    }
    return (
      <div id = "background">
        <FormGroup bsSize='large'>
          <FormControl
            value={this.state.value}
            placeholder='Search'
            onChange={this.handleChange}
          />
        </FormGroup>
        <Button onClick={this.getItem}>SEARCH</Button>

        <div activeKey={this.state.activeKey}
          onSelect={this.handleSelect} />
          {this.state.products.map(function (y) {
          return (

            <div className='col-sm-3' id='search' >
              <img id="profile" src={y.image} width="200" height="200" />
              <h1 id="profile">Product Name : {y.name}</h1>
              <h1 id="profile">Price : {y.price} </h1>
              <h1 id="profile">Description : {y.description} </h1>
               <button className="btn btn-lg btn-danger" onClick={r.handleClick}>Add to Cart</button>
              <div> <Rating /></div>
            </div>

          )
        }
        )}
        </div>

    )
  }
}
export default SearchProduct;
//onSubmit={this.handleSubmit}
 // onClick={this.handleClick}
 //onClick={this.handleSubmit}
