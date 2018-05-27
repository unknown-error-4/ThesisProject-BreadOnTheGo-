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




class NavcomSigned extends React.Component {
  constructor (props) {
    super(props);
    this.state ={
      redirect: false
    }

  }
  render(){
    const { redirect } = this.state;
       if (redirect) {
         return <Redirect to='/'/>;
       }
  	return(
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
  <Nav pullRight>
  <NavItem eventKey={1}>
       <Link to= "/Profile">Profile</Link>
    </NavItem>
    <NavItem eventKey={3}>
         <Link to= "/">Log Out</Link>
      </NavItem>
  </Nav>
</Navbar.Collapse>
</Navbar>
    <Route path="/Profile"component={Profile}/>
    <Route path="/SignIn"component={SignIn}/>
    <Route exact path='/signupB' component={SignUpB} />
    <Route exact path='/signupC' component={SignUpC} />
 </div>

</Router>

</div>

  		)
  }
}
export default NavcomSigned;
