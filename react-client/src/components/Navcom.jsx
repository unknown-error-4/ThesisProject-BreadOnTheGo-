import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {Nav, Navbar, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import SignIn from './SignIn.js';
import SignUpB from './SignUpB.js';
import SignUpC from './SignUpC.js';
import Profile from './Profile.jsx';
import SearchProduct from './SearchProduct.jsx'
import Home from './Home.jsx'



class Navcom extends React.Component {
  constructor (props) {
    super(props);


  }
  render(){
  	return(
      <div>
     <Router>
       <div>
    <Navbar id='navb' >
      <Navbar.Header>
       <Navbar.Brand >
 
    <a>BreadOnTheGo</a>
    </Navbar.Brand>
    <Navbar.Toggle />
     </Navbar.Header>
     <Navbar.Collapse>
  <Nav>
  </Nav>
  <Nav pullRight>
    <NavItem eventKey={2}>
          <Link  to= "/SignIn"><div id="link">Sign In</div></Link>
      </NavItem>
      <NavDropdown eventKey={3} title="Join Us" id="basic-nav-dropdown" >
          <Link to= "/SignIn">Sign In</Link>
      </NavItem>
      <NavDropdown eventKey={3} title="Join Us" id="basic-nav-dropdown">
     <MenuItem eventKey={3.1}><Link to= "/signupB">Sign Up as Bakery</Link></MenuItem>
    <MenuItem eventKey={3.2}><Link to= "/signupC">Sign Up as Customer</Link></MenuItem>
     <MenuItem divider />
    </NavDropdown>
  </Nav>
</Navbar.Collapse>
</Navbar>
    <Route path="/Profile"  component={Profile}/>
    <Route path="/SignIn"  component={SignIn}/>
    <Route exact path='/signupB' component={SignUpB} />
    <Route exact path='/signupC' component={SignUpC} />
    <Route path='/SearchProduct' component={SearchProduct}/>
    <Route path='/home' component={Home}/>
</div>

</Router>

</div>

  		)
  }
}
export default Navcom;
