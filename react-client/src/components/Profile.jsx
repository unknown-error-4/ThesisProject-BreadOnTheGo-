import React from 'react';
import Image from './Image.jsx'


class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user:[]
    }
  }

  componentDidMount() {
    var that = this;
    var user = this.props.userName
    console.log(user);
    $.ajax({
      url: '/Profile',
      method: 'GET',
    })
    .done (function (data) {
      console.log(data)
      that.setState({
        user: data
      });
    })
    .fail(function( jqXHR, textStatus ) {
      alert( "No user Found");
    });
  }

  render(){
  	var user = this.state.user;
  	var userName = user.userName;
   	var imgUrl=user.imgUrl
  	var email=user.email
    var image=user.image
    var phoneNumber=user.phoneNumber

  	return(
 		<div className="row">
        <div className="col-md-3" >
         <Image image={image}/>
        <div className='col-md-9'>
          <h1>User Name :  {userName} Profile</h1>
          <p>Email :{email}</p>
          <p>Phone Number : {phoneNumber}</p>
          </div>
        </div>
  		</div>

  	)
  }

}
export default Profile;
