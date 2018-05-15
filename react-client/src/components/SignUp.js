    import React from 'react';
	  import ReactDOM from 'react-dom';
  	import $ from 'jquery';
    import {Redirect} from "react-router-dom";

		class SignUp extends React.Component {

			constructor(props){

				super(props);

				this.state = {
					userName: '',
					email: '',
					password: '',
					confirmPass:'',
		      phoneNumber: '',
		      latitude:'',
		      longtitude:'',
		      cashPayment: '',
		      creditCardPayment: '',
          bakerUser:'',
          customerUser:''
          }
        this.handleChangeuserName = this.handleChangeuserName.bind(this);
				this.handleChangeEmail = this.handleChangeEmail.bind(this);
				this.handleChangePassword = this.handleChangePassword.bind(this);
				this.handleChangeConfirmPassword = this.handleChangeConfirmPassword.bind(this);
				this.handleChangePhoneNumber = this.handleChangePhoneNumber.bind(this);
				this.handleChangeLongtitude = this.handleChangeLongtitude.bind(this);
        this.handleChangeLatitude = this.handleChangeLatitude.bind(this);
				this.handleChangePaymentCash = this.handleChangePaymentCash.bind(this);
        this.handleChangePaymentCreiditCard = this.handleChangePaymentCreiditCard.bind(this);
        this.handleChangeUserBaker = this.handleChangeUserBaker.bind(this);
        this.handleChangeUserCustomer = this.handleChangeUserCustomer.bind(this);
        this.handleClick = this.handleClick.bind(this)
			}

			handleClick(event){
        var that = this

				$.ajax({
					type:'POST',
					url: '/signup',
					data:{
						userName:that.state.userName,
						email: that.state.email,
						password: that.state.password,
            confirmPass: that.state.confirmPass,
						phoneNumber: that.state.phoneNumber,
		        latitude: that.state.latitude,
		        longtitude: that.state.longtitude,
            cashPayment: that.state.cashPayment,
            creditCard: that.state.creditCard,
            bakerUser: that.state.bakerUser,
            customerUser: that.state.customerUser
						},
          success: (data) => {
          if(data === 'exists'){
            this.setState({mssg : "This username is already used"})
          }else if(data !== 'Invalid Input'){
            this.setState({redirect: true})
          } else{
            this.setState({mssg : data})
            //window.location.href = "http://localhost:3000/login";
          }
          console.log('success', data)
        },
        error: (err) => {
          console.log('err', err);
        }
      });
      event.preventDefault();
				}



			handleChangeuserName(event) {
		    this.setState({userName: event.target.value});
        console.log (this.state.userName);
		  }
			handleChangeEmail(event) {
		    this.setState({email: event.target.value});
        console.log(this.state.email);
		  }
			handleChangePassword(event) {
		    this.setState({password: event.target.value});
        console.log(this.state.password);
		  }
			handleChangeConfirmPassword(event) {
		    this.setState({confirmPass: event.target.value});
        console.log(this.state.confirmPass);
		  }
			handleChangePhoneNumber(event) {
		    this.setState({phoneNumber: event.target.value});
        console.log(this.state.phoneNumber);
		  }
			handleChangeLongtitude(event) {
		    this.setState({longtitude: event.target.value});
        console.log(this.state.longtitude);
		  }
      handleChangeLatitude(event) {
		    this.setState({latitude: event.target.value});
        console.log(this.state.latitude);
		  }
			handleChangePaymentCash(event) {
		    this.setState({cashPayment: event.target.value});
        console.log(this.state.cashPayment);
		  }
      handleChangePaymentCreiditCard(event) {
		    this.setState({creditCard: event.target.value});
        console.log(this.state.creditCard);
		  }
      handleChangeUserBaker(event) {
		    this.setState({bakerUser: event.target.value});
        console.log(this.state.bakerUser);
		  }
      handleChangeUserCustomer(event) {
		    this.setState({customerUser: event.target.value});
        console.log(this.state.customerUser);
		  }


			render(){

				return (
					<div>
					<h1>Sign Up</h1>
					<br/>
          <form /*onClick = {this.handleClick}*/>
					<label>User Name:
          <br/>
					<input type="text" name="User Name" required value = {this.state.userName} onChange={this.handleChangeuserName}/>
					</label>
					<br/>
					<label>Email:
          <br/>
					<input type="email" name="Email" required value = {this.state.email} onChange={this.handleChangeEmail}/>
					</label>
					<br/>
					<label>Password:
          <br/>
					<input type="password" name="Password" required value = {this.state.password} onChange={this.handleChangePassword}/>
					</label>
					<br/>
					<label>Confirm Password:
          <br/>
					<input type="password" name="Confirm Password" required value = {this.state.confirmPass} onChange={this.handleChangeConfirmPassword}/>
					</label>
					<br/>
					<label>Phone Number:
          <br/>
					<input type="text" name="Phone Number" required value = {this.state.phoneNumber} onChange={this.handleChangePhoneNumber}/>
					</label>
					<br/>
					<label>Location:
          <br/>
					<input type="text" name="latitude" required value = {this.state.latitude} onChange={this.handleChangeLatitude}/>
          <br/>
					<input type="text" name="longtitude" required value = {this.state.longtitude} onChange={this.handleChangeLongtitude}/>
					</label>
					<br/>
					<label> Type Of Payment:
          <br/>
					<form className="form-group1">
		          <select name = "typeOfPayment" className="form-control selectpicker btn btn-default" required>
		            <option  >Sellect Type Of Payment</option>
		            <option value= {this.state.cashPayment} onChange={this.handleChangePaymentCash}>Cash</option>
		            <option value= {this.state.creditCardPayment} onChange={this.handleChangePaymentCash}>Credit Card</option>
		          </select>
		          </form></label>
					<br/>
          <label> Type Of Payment:
          <br/>
					<form className="form-group2">
		          <select name = "typeOfPayment" className="form-control selectpicker btn btn-default" required>
		            <option value= "Who Are You">Who Are You !!</option>
		            <option value= {this.state.bakerUser} onChange={this.handleChangeUserBaker}>Baker</option>
		            <option value= {this.state.customerUser} onChange={this.handleChangeTypeOfUserCustomer}>Customer</option>
		          </select>
		          </form></label>
					<button onClick = {this.handleClick}>Sign Up</button>
          </form>
					</div>
					);
			}


			}

			export default SignUp;
