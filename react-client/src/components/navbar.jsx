import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {Nav, Navbar, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import SignIn from './SignIn.jsx';
import SignUp from './SignUp.jsx';
import Profile from './Profile.jsx';
 // import styles from  './navbar.css'

class Navcom extends React.Component {
  constructor (props) {
    super(props)

  }
  render(){
  	return(
      <Router>
         <div >
      <Navbar id='navb' >
         <Navbar.Header>
        <Navbar.Brand>
      <a href="#brand">BreadOnTheGo</a>
      </Navbar.Brand>
      <Navbar.Toggle />
       </Navbar.Header>
       <Navbar.Collapse>
    <Nav>
      <NavItem eventKey={1} >
        Home
      </NavItem>
      <NavItem eventKey={2}>

      </NavItem>
      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3}>Separated link</MenuItem>
      </NavDropdown>
    </Nav>
    <Nav pullRight>
    <NavItem eventKey={1}>
         <Link to= "/Profile">Profile</Link>
      </NavItem>
      <NavItem eventKey={1}>
         <Link to= "/SignIn">SignIn</Link>
      </NavItem>
      <NavItem eventKey={2} >
       <Link to= "/SignUp">SignUp</Link>
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>
      <Route path="/Profile"  component={Profile}/>
      <Route path="/SignIn"  component={SignIn}/>
      <Route path="/SignUp" component={SignUp} />
</div>
</Router>
  		)
  }
}
export default Navcom;
