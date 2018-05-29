import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {Nav, Navbar, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import ProfileB from './ProfileB.jsx';
import OrderList from './OrderList.jsx';
import Products from './Products.jsx';
import SearchProduct from './SearchProduct.jsx';





class NavcomSignedB extends React.Component {
  constructor (props) {
    super(props);
    this.state ={

    }

  }
  render(){

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

  <Nav pullLeft>
      <NavItem eventKey={1}>
         <Link to= "/profileB">Profile</Link>
      </NavItem>
      <NavItem eventKey={2}>
           <Link to= "/products">Add Products</Link>
      </NavItem>
      <NavItem eventKey={3}>
            <Link to= "/showProduct">Show Me My Products</Link>
      </NavItem>
      <NavItem eventKey={4}>
             <Link to= "/orderList">Check the Order</Link>
      </NavItem>
  </Nav>
  <Nav pullRight>
      <NavItem eventKey={2}>
           <Link to= "/">Log Out</Link>
      </NavItem>
  </Nav>
</Navbar.Collapse>
</Navbar>
     <Route exact path='/showProduct' component={SearchProduct}/>
     <Route path="/products"  component={Products}/>
     <Route path="/orderList"  component={OrderList}/>
     <Route path="/profileB"component={ProfileB}/>
  </div>

</Router>

</div>

  		)
  }
}
export default NavcomSignedB;
