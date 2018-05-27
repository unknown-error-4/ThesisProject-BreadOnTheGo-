import React from 'react'
import $ from 'jquery'
import { BrowserRouter, Route, Link, IndexRoute, hashHistory, browserHistory, Switch } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'
import Products from './Products.jsx'
import SignIn from './SignIn.js'
import SignUpB from './SignUpB.js';
import SignUpC from './SignUpC.js';
import Navcom from './Navcom.jsx';
import Profile from './Profile.jsx';
import ProductList from './ProductList.jsx';
import SearchProduct from './SearchProduct.jsx';
import image from './image.jsx';
import TheMap from './TheMap.jsx'
import Home from './Home.jsx'
import NavcomSigned from './NavcomSigned.jsx';
import BakeriesList from './BakeriesList.jsx';
import Bakery from './Bakery.jsx';
import SignInB from './SignInB.jsx'






class AppRoute extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render () {
    return (
      <BrowserRouter history={hashHistory}>
        <Switch>
          <Route exact path='/signupB' component={SignUpB} />
          <Route exact path='/signupC' component={SignUpC} />
          <Route exact path='/products' component={Products} />
          <Route exact path='/signin' component={SignIn} />
          <Route exact path='/signinb' component={SignInB} />
          <Route exact path='/' component={Navcom}/>
          <Route exact path='/profile' component={Profile}/>
          <Route exact path='/searchProduct'component={SearchProduct}/>
          <Route exact path ='/image' component={image}/>
          <Route exact path='/productList' component={ProductList} />
          <Route exact path='/home' component={Home}/>

          <Route exact path='/navsigned' component={NavcomSigned}/>

         </Switch>

      </BrowserRouter>
    )
  }
}

export default AppRoute;
