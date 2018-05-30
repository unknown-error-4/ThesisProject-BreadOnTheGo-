import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {Redirect} from "react-router-dom";
import {Button} from 'react-bootstrap'
import Home from './Home.jsx';
import Products from './Products.jsx';
import NavcomSignedB from './NavcomSignedB.jsx';


class SignInB extends React.Component {
  constructor(props){

    super(props);

    this.state = {
      redirect: false,
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
      url: '/signinb',
      data: {
        email: that.state.email,
        password: that.state.password,

      },
      success: (data) => {

              console.log(data)
              if(data){
                console.log('correct signin');
                window.location.href = "/navsignedB";

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
    const { redirect } = this.state;
       if (redirect) {
         return <Redirect to='/navsignedB'/>;
       }
    return(
      <div>
    <div className="modal-dialog modal-login">
        <div className="modal-content">
            <div className="modal-header">
                <h4 className="modal-title"> Login As Bakery</h4>
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            </div>
            <div className="modal-body">
                <form action="/login" method="post">
                    <div className="form-group">
                        <i className="fa fa-user"></i>
                        <input type="text" name="Email" className="form-control" placeholder="Email"  required="required" onChange={this.handleChangeEmail} />
                    </div>
                    <div className="form-group">
                        <i className="fa fa-lock"></i>
                        <input type="password" name="Password" className="form-control" placeholder="Password" required="required" onChange={this.handleChangepassword}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" className="btn btn-primary btn-block btn-lg" onClick = {this.handleSubmit} value="Login"/>
                    </div>
                </form>

            </div>

        </div>
    </div>
</div>

)
  }
}


export default SignInB;

////////////////////
    //   <div>
    //   <label>Email:
    //   <br/>
    //   <input type="email" name="email" required onChange={this.handleChangeEmail}/>
    //   </label>
    //   <br/>
    //   <label> password:
    //   <br/>
    //   <input type="password" name="password" required onChange={this.handleChangepassword}/>
    //   </label>
    //   <br/>
    //   <br/>
    //   <Button onClick = {this.handleSubmit}>Sign In</Button>

    // </div>
    ///////////////////////////////////////////
