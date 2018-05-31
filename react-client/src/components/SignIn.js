import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import {Redirect} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import Home from './Home.jsx'
import NavcomSignedC from './NavcomSignedC.jsx'

class SignIn extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      redirect: false,
      email: '',
      password: ''
    }
    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.handleChangepassword = this.handleChangepassword.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  };

  handleChangeEmail (event) {
    this.setState({email: event.target.value})
    console.log(this.state.Email)
  }

  handleChangepassword (event) {
    this.setState({password: event.target.value})
    console.log(this.state.password)
  }

  handleSubmit (event) {
    var that = this
    $.ajax({
      type: 'POST',
      url: '/signin',
      data: {
        email: that.state.email,
        password: that.state.password

      },
      success: (data) => {
        console.log(data)
        if (data) {
          console.log('correct signin')
          window.location.href = '/navsignedC'
        } else {
          this.setState({mssg: 'Invalid Email or password'})
          alert('user name or password is not correct!!')
        }
      },
      error: (err) => {
        console.log('err', err)
        alert('user name is not existe !!')
      }
    })
    event.preventDefault()
  }

  render () {
    const { redirect } = this.state
    if (redirect) {
      return <Redirect to='/navsignedC' />
    }
    return (
      <div>
        <div className='modal-dialog modal-login'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h4 className='modal-title'>  Login As Customer</h4>
              <button type='button' className='close' data-dismiss='modal' aria-hidden='true'>&times;</button>
            </div>
            <div className='modal-body'>
              <form action='/login' method='post'>
                <div className='form-group'>
                  <i className='fa fa-user' />
                  <input type='text' name='Email' className='form-control' placeholder='Email' required='required' onChange={this.handleChangeEmail} />
                </div>
                <div className='form-group'>
                  <i className='fa fa-lock' />
                  <input type='password' name='Password' className='form-control' placeholder='Password' required='required' onChange={this.handleChangepassword} />
                </div>
                <div className='form-group'>
                  <input type='submit' className='btn btn-primary btn-block btn-lg' onClick={this.handleSubmit} value='Login' />
                </div>
              </form>

            </div>

          </div>
        </div>
      </div>

    )
  }
}

export default SignIn
