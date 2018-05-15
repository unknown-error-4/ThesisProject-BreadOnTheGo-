import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {Redirect} from "react-router-dom";


class SignIn extends React.Component {
  constructor(props){

    super(props);

    this.state = {
      email: '',
    password: ''
    }
    this.handleChangeEmail= this.handleChangeEmail.bind(this)
    this.handleChangepassword= this.handleChangepassword.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  };

  handleChangeEmail(event) {
      this.setState({email:event.target.value})
      console.log(this.state.Email)

    }

    handleChangepassword(event) {
      this.setState({password: event.target.value})
      console.log(this.state.password)
    }

    handleSubmit(event) {
      var that=this;
    $.ajax({
      type : 'POST',
      url: '/signin',
      data: {
        email: that.state.email,
        password: that.state.password,

      },
      success: (data) => {

              console.log(data)
              if(data){
                console.log('correct signin');

              } else{
                this.setState({mssg: 'Invalid Email or password'})
              }
            },
            error: (err) => {
              console.log('err', err);
            }
          });
          event.preventDefault();
  }

  render () {

    return(
      <div>
      <label>Email:
      <br/>
      <input type="email" name="email" required onChange={this.handleChangeEmail}/>
      </label>
      <br/>
      <label> password:
      <br/>
      <input type="password" name="password" required onChange={this.handleChangepassword}/>
      </label>
      <br/>
      <br/>
      <button onClick = {this.handleSubmit}>Sign In</button>

    </div>)
  }
}

export default SignIn;
