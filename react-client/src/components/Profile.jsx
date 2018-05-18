import React from 'react';


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
  	return(
  		
 		<div>	
          <h1> {userName} </h1>
        </div>
  		
  	)
  }

}
export default Profile;