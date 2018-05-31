import React from 'react'
import Image from './Image.jsx'

class Profile extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      user: []
    }
  }

  componentDidMount () {
    var that = this
    var user = this.props.userName
    console.log(user)
    $.ajax({
      url: '/Profile',
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
   	var imgUrl = user.imgUrl
  	var email = user.email
    var image = user.image
    var phoneNumber = user.phoneNumber

  	return (

      <div className="container" id = "profile">
        <div className="row">
        <div className="panel panel-default">
        <div className="panel-heading"><h4 >User Profile</h4></div>
        <div className="panel-body">
        <div className="col-md-4 col-xs-12 col-sm-6 col-lg-4">
        <div className="col-md-3">
          <Image image={image} />
          <div className='col-md-9'>
          <div className="col-md-8 col-xs-12 col-sm-6 col-lg-8">
          <div className="container">
          <h2>User Name :  {userName} </h2>
          </div>
          <hr/>
          <ul className="container details" >
          <p className="glyphicon glyphicon-envelope">  Email :{email}</p>
          <br/>
          <p className= "glyphicon glyphicon-earphone"> PhoneNumber : {phoneNumber}</p>
          <br/>
          <p className="glyphicon glyphicon-map-marker" >  Location : </p>
          <br/>
          </ul>
          <hr/>
        </div>
        <button className="btn btn-lg btn-danger"> Update </button>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    </div>
  	)
  }
}
export default Profile
