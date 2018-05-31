import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import {Nav, Navbar, NavItem, MenuItem, NavDropdown} from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import SignIn from './SignIn.js'
import SignInB from './SignInB.jsx'
import SignUpB from './SignUpB.js'
import SignUpC from './SignUpC.js'

class Navcom extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
  	return (
      <div>

      <Router>
          <div>
          <Navbar id='navb' >
              <Navbar.Header>
              <Navbar.Brand >

                  <a>Bread On The Go</a>
                </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
              <Navbar.Collapse>
              <Nav />
              <Nav pullRight>
                  <NavDropdown eventKey={1} title='Sign In As ' id='basic-nav-dropdown'>
                  <MenuItem eventKey={1.1}><Link to='/signinb'>Sign In as Bakery</Link></MenuItem>
                  <MenuItem eventKey={1.2}><Link to='/signin'>Sign In as Customer</Link></MenuItem>
                  <MenuItem divider />
                </NavDropdown>
                  <NavDropdown eventKey={2} title='Join Us' id='basic-nav-dropdown'>
                  <MenuItem eventKey={2.1}><Link to='/signupB'>Sign Up as Bakery</Link></MenuItem>
                  <MenuItem eventKey={2.2}><Link to='/signupC'>Sign Up as Customer</Link></MenuItem>
                  <MenuItem divider />
                </NavDropdown>

                </Nav>
            </Navbar.Collapse>
            </Navbar>
          <Route path='/signin' component={SignIn} />
          <Route path='/signinb' component={SignInB} />
          <Route exact path='/signupB' component={SignUpB} />
          <Route exact path='/signupC' component={SignUpC} />
        </div>

        </Router>
    </div>

  		)
  }
}
export default Navcom

// for speraiting sign in :::
// <NavDropdown eventKey={4} title="Sign In As" id="basic-nav-dropdown">
// <MenuItem eventKey={4.1}><Link to= "/signupB">Sign In as Bakery</Link></MenuItem>
// <MenuItem eventKey={4.2}><Link to= "/signupC">Sign In as Customer</Link></MenuItem>
//  <MenuItem divider />
// </NavDropdown>
