import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import {Nav, Navbar, NavItem, MenuItem, NavDropdown} from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import SearchProduct from './SearchProduct.jsx'
import Logout from './Logout.jsx'
import Home from './Home.jsx'
import Profile from './Profile.jsx'
import ABitofLove from './ABitofLove.jsx';

class NavcomSignedC extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      redirect: false
    }
  }
  render () {
    const { redirect } = this.state
    if (redirect) {
      return <Redirect to='/' />
    }
  	return (
      <div>
      <Router>
          <div>
          <Navbar id='navb' >
              <Navbar.Header>
              <Navbar.Brand>
                  <a>BreadOnTheGo</a>
                </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
              <Navbar.Collapse>

              <Nav pullLeft>
                  <NavItem eventKey={1}>
                  <Link to='/home'>Nearest Bakery</Link>
                  </NavItem>
                  <NavItem eventKey={2}>
                  <Link to='/showProduct'>Let's Order</Link>
                  </NavItem>
                  <NavItem eventKey={3}>
                  <Link to='/Profile'>Profile</Link>
                  </NavItem>

                </Nav>
              <Nav pullRight>
              <NavItem eventKey={1}>
              <Link to='/bitLove'  >
                  A Bit of Love
                  <div className="glyphicon glyphicon-heart-empty"></div>
                </Link>
            </NavItem>
                  <NavItem eventKey={1}>
                  <Link to='/logout'>
                   Logout
                    </Link>
                </NavItem>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
          <Route path='/home'component={Home} />
          <Route path='/Profile'component={Profile} />
          <Route exact path='/showProduct' component={SearchProduct} />
          <Route exact path='/logout' component={Logout} />
          <Route exact path='/bitLove' component={ABitofLove} />
        </div>

        </Router>

    </div>

  		)
  }
}
export default NavcomSignedC
