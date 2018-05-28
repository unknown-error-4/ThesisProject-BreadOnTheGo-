    import React from 'react';
	  import ReactDOM from 'react-dom';
  	import $ from 'jquery';
    import {Redirect} from "react-router-dom";


		class SignUpB extends React.Component {

			constructor(props){

				super(props);

				this.state = {
          redirect: false,
					userName: '',
					email: '',
					password: '',
					confirmPass:'',
		      phoneNumber: '',
		      latitude:'',
		      longtitude:'',
          typeOfRecievingPayment: ''
          }
        this.handleChangeuserName = this.handleChangeuserName.bind(this);
				this.handleChangeEmail = this.handleChangeEmail.bind(this);
				this.handleChangePassword = this.handleChangePassword.bind(this);
				this.handleChangeConfirmPassword = this.handleChangeConfirmPassword.bind(this);
				this.handleChangePhoneNumber = this.handleChangePhoneNumber.bind(this);
				this.handleChangeLongtitude = this.handleChangeLongtitude.bind(this);
        this.handleChangeLatitude = this.handleChangeLatitude.bind(this);
        this.handleChangePay = this.handleChangePay.bind(this);
        this.handleClick = this.handleClick.bind(this)
			}

			handleClick(event){
        var that = this

				$.ajax({
					type:'POST',
					url: '/signupbakery',
					data:{
						userName:that.state.userName,
						email: that.state.email,
						password: that.state.password,
            confirmPass: that.state.confirmPass,
						phoneNumber: that.state.phoneNumber,
		        latitude: that.state.latitude,
		        longtitude: that.state.longtitude,
            typeOfRecievingPayment: that.state.typeOfRecievingPayment
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
      handleChangePay(event) {
		    this.setState({typeOfRecievingPayment: event.target.value});
        console.log(this.state.typeOfRecievingPayment);
		  }



	render(){
    const { redirect } = this.state;
       if (redirect) {
         return <Redirect to='/signin'/>;
       }
	return (
		<div className ="container">
			<div className="row main">
				<div className="panel-heading">
	               <div className="panel-title text-center">
	               		<h1 className="title"></h1>
	               		<hr />
	               	</div>
	            </div>
			<div className="main-login main-center">
				<form className="form-horizontal" method="post" action="#">
					<div className="form-group">
						<label for="name" className="cols-sm-2 control-label">Your Name</label>
						<div className="cols-sm-10">
							<div className="input-group">
								<span className="input-group-addon"><i className="fa fa-user fa" aria-hidden="true"></i></span>
								<input type="text" className="form-control"  name="User Name" id="name" value = {this.state.userName} placeholder="Enter your Username" onChange={this.handleChangeuserName}/>
							</div>
						</div>
					</div>

						<div className="form-group">
							<label for="email" className="cols-sm-2 control-label">Your Email</label>
							<div className="cols-sm-10">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-envelope fa" aria-hidden="true"></i></span>
									<input type="text" className="form-control" name="Email" id="email" value = {this.state.email} placeholder="Enter your Email" onChange={this.handleChangeEmail}/>
								</div>
							</div>
						</div>
						<div className="form-group">
							<label for="password" className="cols-sm-2 control-label">Password</label>
							<div className="cols-sm-10">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
									<input type="password" className="form-control" value = {this.state.password} name="password" id="password"  placeholder="Enter your Password" onChange={this.handleChangePassword}/>
								</div>
							</div>
						</div>

						<div className="form-group">
							<label for="confirm" className="cols-sm-2 control-label">Confirm Password</label>
							<div className="cols-sm-10">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
									<input type="password" className="form-control" value = {this.state.confirmPass} name="confirm" id="confirm"  placeholder="Confirm your Password" onChange={this.handleChangeConfirmPassword}/>
								</div>
							</div>
						</div>
						<div className="form-group">
							<label for="username" className="cols-sm-2 control-label">Phone Number</label>
							<div className="cols-sm-10">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-users fa" aria-hidden="true"></i></span>
									<input type="text" className="form-control" required name="Phone Number" placeholder="Enter your phoneNumber" value = {this.state.phoneNumber} onChange={this.handleChangePhoneNumber} />
								</div>
							</div>
						</div>
						<div className="form-group">
							<label for="username" className="cols-sm-2 control-label">Location</label>
							<div className="cols-sm-10">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-users fa" aria-hidden="true"></i></span>
									<input type="text" className="form-control" name="latitude" id="latitude"value = {this.state.latitude}  placeholder="Enter your latitude" onChange={this.handleChangeLatitude}/>
								</div>
							</div>
						</div>
						<div className="form-group">
							<label for="username" className="cols-sm-2 control-label">longtitude</label>
							<div className="cols-sm-10">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-users fa" aria-hidden="true"></i></span>
									<input type="text" className="form-control" name="longtitude" id="longtitude" value = {this.state.longtitude}  placeholder="Enter your longtitude" onChange={this.handleChangeLongtitude}/>
								</div>
							</div>
						</div>
            <div className="form-group">
							<label for="username" className="cols-sm-2 control-label">Type Of Recieving Payment:</label>
							<div className="cols-sm-10">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-users fa" aria-hidden="true"></i></span>
									<select className = "typeOfPayment" className="form-control selectpicker btn btn-default" value= {this.state.typeOfRecievingPayment} onChange={this.handleChangePay} required>
								            <option>Sellect Type Of Recieving Payment</option>
								            <option>Cash</option>
								            <option>Credit Card</option>
                            <option>Both</option>
						          </select>

								</div>
							</div>
						</div>
						<div className="form-group ">
							<button type="button" value="sign uo"  id="submit" onClick = {this.handleClick}>Sign Up</button>
						</div>

					</form>
				</div>
			</div>
		</div>

					);
			}


			}

			export default SignUpB;
// ////////////////////////////////////////
// 					<div>
// 					<h1>Sign Up</h1>
// 					<br/>
//           <form /*onClick = {this.handleClick}*/>
// 					<label>User Name:
//           <br/>
// 					<input type="text" name="User Name" required value = {this.state.userName} onChange={this.handleChangeuserName}/>
// 					</label>
// 					<br/>
// 					<label>Email:
//           <br/>
// 					<input type="email" name="Email" required value = {this.state.email} onChange={this.handleChangeEmail}/>
// 					</label>
// 					<br/>
// 					<label>Password:
//           <br/>
// 					<input type="password" name="Password" required value = {this.state.password} onChange={this.handleChangePassword}/>
// 					</label>
// 					<br/>
// 					<label>Confirm Password:
//           <br/>
// 					<input type="password" name="Confirm Password" required value = {this.state.confirmPass} onChange={this.handleChangeConfirmPassword}/>
// 					</label>
// 					<br/>
// 					<label>Phone Number:
//           <br/>
// 					<input type="text" name="Phone Number" required value = {this.state.phoneNumber} onChange={this.handleChangePhoneNumber}/>
// 					</label>
// 					<br/>
// 					<label>Location:
//           <br/>
// 					<input type="text" name="latitude" required value = {this.state.latitude} onChange={this.handleChangeLatitude}/>
//           <br/>
// 					<input type="text" name="longtitude" required value = {this.state.longtitude} onChange={this.handleChangeLongtitude}/>
// 					</label>
// 					<br/>
// 					<label> Type Of Payment:
//           <br/>
// 					<form className="form-group1">
// 		          <select name = "typeOfPayment" className="form-control selectpicker btn btn-default" value= {this.state.typeOfPayment} onChange={this.handleChangePayment} required>
// 		            <option>Sellect Type Of Payment</option>
// 		            <option>Cash</option>
// 		            <option>Credit Card</option>
// 		          </select>
// 		          </form></label>
// 					<br/>
//           <label> Who Are You !!
//           <br/>
// 					<form className="form-group2">
// 		           <select name = "typeOfUser" className="form-control selectpicker btn btn-default" value={this.state.typeOfUser} onChange={this.handleChangeUser} required>
// 		            <option >Baker </option>
// 		            <option >Customer</option>
// 		          </select>
// 		          </form></label>
// 					<button onClick = {this.handleClick}>Sign Up</button>
//           </form>
// 					</div>
