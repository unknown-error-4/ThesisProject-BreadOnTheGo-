import React from 'react';


class ProfileB extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bakery:[]
    }
  }

  componentDidMount() {
    var that = this;
    var user = this.props.bakeryName
    console.log(user);
    $.ajax({
      url: '/ProfileB',
      method: 'GET',
    })
    .done (function (data) {
      console.log(data)
      that.setState({
        bakery: data
      });
    })
    .fail(function( jqXHR, textStatus ) {
      alert( "No user Found");
    });
  }

  render(){
  	var bakery = this.state.bakery;
  	var bakeryName = bakery.bakeryName;
  	var imgUrl=bakery.imgUrl
  	var email=bakery.email
    var phoneNumber=bakery.phoneNumber
  	return(
 		<div className="row">
        <div className="col-md-3" style={{'paddingLeft':'20px'}}>
          <img src="https://www.sarahotels.in/img/default-user.png"  width = '250px'/>
        </div>
        <div className='col-md-9'>
          <p>Bakery Name : {bakeryName}</p>
          <p>Email : {email}</p>
          <p>Phone Number : {phoneNumber}</p>
        </div>
  		</div>

  	)
  }

}
export default ProfileB;
