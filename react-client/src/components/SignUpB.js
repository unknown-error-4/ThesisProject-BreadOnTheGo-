import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import {Redirect} from 'react-router-dom'
import TheMap from './TheMap.jsx'

class SignUpB extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      redirect: false,
      bakeryName: '',
      email: '',
      password: '',
      confirmPass: '',
		      phoneNumber: '',
		      latitude: '',
		      longtitude: '',
      typeOfRecievingPayment: ''
    }
    this.handleChangebakeryName = this.handleChangebakeryName.bind(this)
    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)
    this.handleChangeConfirmPassword = this.handleChangeConfirmPassword.bind(this)
    this.handleChangePhoneNumber = this.handleChangePhoneNumber.bind(this)
    this.handleChangeLongtitude = this.handleChangeLongtitude.bind(this)
    this.handleChangeLatitude = this.handleChangeLatitude.bind(this)
    this.handleChangePay = this.handleChangePay.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (event) {
    var that = this
    $.ajax({
      type: 'POST',
      url: '/signupbakery',
      data: {
        bakeryName: that.state.bakeryName,
        email: that.state.email,
        password: that.state.password,
        confirmPass: that.state.confirmPass,
        phoneNumber: that.state.phoneNumber,
		        latitude: that.state.latitude,
		        longtitude: that.state.longtitude,
        typeOfRecievingPayment: that.state.typeOfRecievingPayment
      },
      success: (data) => {
        if (data === 'exists') {
          this.setState({mssg: 'This bakeryName is already used'})
        } else if (data !== 'Invalid Input') {
          this.setState({redirect: true})
        } else {
          this.setState({mssg: data})
          window.location.href = 'http://localhost:3000/signinb'
        }
        console.log('success', data)
      },
      error: (err) => {
        console.log('err', err)
      }
    })
    event.preventDefault()
  }

  handleChangebakeryName (event) {
		    this.setState({bakeryName: event.target.value})
    console.log(this.state.bakeryName)
  }
  handleChangeEmail (event) {
    this.setState({email: event.target.value})
    console.log(this.state.email)
  }
  handleChangePassword (event) {
    this.setState({password: event.target.value})
    console.log(this.state.password)
  }
  handleChangeConfirmPassword (event) {
    this.setState({confirmPass: event.target.value})
    console.log(this.state.confirmPass)
  }
  handleChangePhoneNumber (event) {
    this.setState({phoneNumber: event.target.value})
    console.log(this.state.phoneNumber)
  }
  handleChangeLongtitude (event) {
    this.setState({longtitude: event.target.value})
    console.log(this.state.longtitude)
  }
  handleChangeLatitude (event) {
    this.setState({ latitude: event.target.value})
    console.log(this.state.latitude)
  }
  handleChangePay (event) {
    this.setState({typeOfRecievingPayment: event.target.value})
    console.log(this.state.typeOfRecievingPayment)
  }

  render () {
    const { redirect } = this.state
    if (redirect) {
      return <Redirect to='/signinb' />
    }
  	return (
      <div className='container'>
      <div className='row main'>
          <div className='panel-heading'>
          <div className='panel-title text-center'>
          <h1 className='title'>Sign Up as Bakery</h1>
              <hr />
            </div>
        </div>
          <div className='main-login main-center'>
          <form className='form-horizontal' method='post' action='#'>
              <div className='form-group'>
              <label for='name' className='cols-sm-2 control-label'>Your Name</label>
              <div className='cols-sm-10'>
                  <div className='input-group'>
                  <span className='input-group-addon'><i className='fa fa-user fa' aria-hidden='true' /></span>
                  <input type='text' className='form-control' name='User Name' id='name' value={this.state.userName} placeholder='Enter your Username' onChange={this.handleChangeuserName} />
                </div>
                </div>
            </div>

              <div className='form-group'>
              <label for='email' className='cols-sm-2 control-label'>Your Email</label>
              <div className='cols-sm-10'>
                  <div className='input-group'>
                  <span className='input-group-addon'><i className='fa fa-envelope fa' aria-hidden='true' /></span>
                  <input type='text' className='form-control' name='Email' id='email' value={this.state.email} placeholder='Enter your Email' onChange={this.handleChangeEmail} />
                </div>
                </div>
            </div>
              <div className='form-group'>
              <label for='password' className='cols-sm-2 control-label'>Password</label>
              <div className='cols-sm-10'>
                  <div className='input-group'>
                  <span className='input-group-addon'><i className='fa fa-lock fa-lg' aria-hidden='true' /></span>
                  <input type='password' className='form-control' value={this.state.password} name='password' id='password' placeholder='Enter your Password' onChange={this.handleChangePassword} />
                </div>
                </div>
            </div>

              <div className='form-group'>
              <label for='confirm' className='cols-sm-2 control-label'>Confirm Password</label>
              <div className='cols-sm-10'>
                  <div className='input-group'>
                  <span className='input-group-addon'><i className='fa fa-lock fa-lg' aria-hidden='true' /></span>
                  <input type='password' className='form-control' value={this.state.confirmPass} name='confirm' id='confirm' placeholder='Confirm your Password' onChange={this.handleChangeConfirmPassword} />
                </div>
                </div>
            </div>
              <div className='form-group'>
              <label for='username' className='cols-sm-2 control-label'>Phone Number</label>
              <div className='cols-sm-10'>
                  <div className='input-group'>
                  <span className='input-group-addon'><i className='fa fa-users fa' aria-hidden='true' /></span>
                  <input type='text' className='form-control' required name='Phone Number' placeholder='Enter your phoneNumber' value={this.state.phoneNumber} onChange={this.handleChangePhoneNumber} />
                </div>
                </div>
            </div>
          
              <div className='form-group '>

              <button type='button' className='btn btn-primary btn-lg btn-block login-button' onClick={this.handleClick}>Sign Up</button>
            </div>

            </form>
        </div>

        </div>
    </div>

  					)
  			}
  			}

  			export default SignUpB
