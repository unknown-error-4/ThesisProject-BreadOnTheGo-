import React, { Component, PropTypes } from 'react'
import {
  Redirect,
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Logout extends Component {
  constructor (props) {
    super(props)

    this.state = {
      redirect: false

    }
    this.handleSubmit = this.handleSubmit.bind(this)
  };

  handleSubmit (event) {
    $.ajax({
      type: 'GET',
      url: '/logout',
      data: {
        redirect: this.state.redirect
      },
      success: (data) => {
        console.log(data)
        if (data) {
          console.log('byebye')
          window.location.href = '/'
        }
      },
      error: (err) => {
        console.log('errlogout ', err)
      }
    })
    event.preventDefault()
  }

  render () {
    const { redirect } = this.state
    if (redirect) {
      return <Redirect to='/' />
    }
    return (
      <div className='container' style={{'marginTop': '70px'}} >
        <form onSubmit={this.handleSubmit}>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <h2 id='logout' >Are you sure you want to log out !! </h2>
          <div className='row' >
            <button type='submit' className='btn btn-danger btn-md'>Log out</button>
          </div>
        </form>

      </div>
    )
  };
}

export default Logout
