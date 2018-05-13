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
		      location: {
		        latitude:'',
		        longtitude:''
		      },
		      typeOfPayment:{
		        cash: '',
		        creditCard: ''
		      },
          typeOfUser:{
            baker:'',
            customer:''
          },
          typeOfUser:{
            baker: '',
            customer: ''
          }
				}

				this.handleClick = this.handleClick.bind(this);
				this.handleChangeUserName = this.handleChangeUserName.bind(this);
				this.handleChangeEmail = this.handleChangeEmail.bind(this);
				this.handleChangePassword = this.handleChangePassword.bind(this);
				this.handleChangeConfirmPassword = this.handleChangeConfirmPassword.bind(this);
				this.handleChangePhoneNumber = this.handleChangePhoneNumber.bind(this);
				this.handleChangeLocation = this.handleChangeLocation.bind(this);
				this.handleChangeTypeOfPayment = this.handleChangeTypeOfPayment.bind(this);
        this.handleChangeTypeOfUser = this.handleChangeTypeOfUser.bind(this);
			}

			handleClick(){
				$.ajax({
					type:'POST',
					url: '/signup',
					data:{
						firstName: this.state.firstName,
						lastName: this.state.lastName,
						email: this.state.email,
						password: this.state.password,
						phone: this.state.phone,
						location:{
		                latitude: this.state.location.latitude,
		                longtitude: this.state.location.longtitude
						},
						typeOfPayment:{
			      cash: this.state.typeOfPayment.cash,
			      creditCard: this.state.typeOfPayment.creditCard
          },
            typeOfUser:{
              baker: this.state.typeOfUser.baker,
              customer: this.state.typeOfUser.customer
            }
					},

					success: (data) => {
						console.log("Success in signup POST!", data);
						//window.location.href = "http://localhost:3000/login";

					},
					error(req, status, err){
						console.log("Error in signup POST!",err);
					}
				})
			}


			handleChangeUserName(event) {
		    this.setState({value: event.target.value});
		  }
			handleChangeEmail(event) {
		    this.setState({value: event.target.value});
		  }
			handleChangePassword(event) {
		    this.setState({value: event.target.value});
		  }
			handleChangeConfirmPassword(event) {
		    this.setState({value: event.target.value});
		  }
			handleChangePhoneNumber(event) {
		    this.setState({value: event.target.value});
		  }
			handleChangeLocation(event) {
		    this.setState({value: event.target.value});
		  }
			handleChangeTypeOfPayment(event) {
		    this.setState({value: event.target.value});
		  }
      handleChangeTypeOfUser(event) {
		    this.setState({value: event.target.value});
		  }


			render(){

				return (
					<div>
					<h1>Sign Up</h1>
					<br/>
					<label>User Name:
          <br/>
					<input type="text" name="User Name" required onChange={this.handleChangeUserName}/>
					</label>
					<br/>
					<label>Email:
          <br/>
					<input type="email" name="Email" required onChange={this.handleChangeEmail}/>
					</label>
					<br/>
					<label>Password:
          <br/>
					<input type="password" name="Password" required onChange={this.handleChangePassword}/>
					</label>
					<br/>
					<label>Confirm Password:
          <br/>
					<input type="password" name="Confirm Password" required onChange={this.handleChangeConfirmPassword}/>
					</label>
					<br/>
					<label>Phone Number:
          <br/>
					<input type="text" name="Phone Number" required onChange={this.handleChangePhoneNumber}/>
					</label>
					<br/>
					<label>Location:
          <br/>
					<input type="text" name="latitude" required onChange={this.handleChangeLocation}/>
          <br/>
					<input type="text" name="longtitude" required onChange={this.handleChangeLocation}/>
					</label>
					<br/>
					<label> Type Of Payment:
          <br/>
					<form className="form-group">
		          <select name = "typeOfPayment" className="form-control selectpicker btn btn-default" required onChange={this.handleChangeTypeOfPayment} value={this.state.typeOfPayment}>
		            <option value="Select">Sellect Type Of Payment</option>
		            <option value="Cash">Cash</option>
		            <option value="creditCard">Credit Card</option>
		          </select>
		          </form></label>
					<br/>
          <label> Type Of Payment:
          <br/>
					<form className="form-group">
		          <select name = "typeOfPayment" className="form-control selectpicker btn btn-default" required onChange={this.handleChangeTypeOfUser} value={this.state.typeOfUser}>
		            <option value="Select">Who Are You !!</option>
		            <option value="Baker">Baker</option>
		            <option value="Customer">Customer</option>
		          </select>
		          </form></label>
					<button onClick={this.handleClick}>Sign Up</button>
					</div>
					);
			}


			}



			export default SignUp;
