import React from 'react';
import Image from './Image.jsx'


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
    var image = bakery.image
  	return(
      <div className="row">
          <div className="col-md-3" >
           <Image image={image}/>

          <div className='col-md-9'>
            <h1>Bakery Name : {bakeryName} </h1>
            <p>Email :{email}</p>
            <p>Phone Number : {phoneNumber}</p>
            </div>
          </div>
    		</div>



  	)
  }

}
export default ProfileB;
