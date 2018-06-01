import React from 'react'
import $ from 'jquery'
import { BrowserRouter, Route, Link, IndexRoute, hashHistory, browserHistory, Switch } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'
import Products from './Products.jsx'
import SignIn from './SignIn.js'
import SignUpB from './SignUpB.js'
import SignUpC from './SignUpC.js'
import Navcom from './Navcom.jsx'
import Profile from './Profile.jsx'
import SearchProduct from './SearchProduct.jsx'
import image from './image.jsx'
import TheMap from './TheMap.jsx'
import Home from './Home.jsx'
import NavcomSignedC from './NavcomSignedC.jsx'
import NavcomSignedB from './NavcomSignedB.jsx'
import OrderList from './OrderList.jsx'
import Rating from './Rating.jsx'
import BakeriesList from './BakeriesList.jsx'
import SignInB from './SignInB.jsx'
import Logout from './Logout.jsx'
import ProfileB from './ProfileB.jsx'
import CardCom from './CardCom.jsx';
import ABitofLove from './ABitofLove.jsx';
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
          <Route exact path='/' component={Navcom} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/profileB' component={ProfileB} />
          <Route exact path='/searchProduct'component={SearchProduct} />
          <Route exact path='/image' component={image} />
          <Route exact path='/navsignedC' component={NavcomSignedC} />
          <Route exact path='/navsignedB' component={NavcomSignedB} />
          <Route exact path='/orderList' component={OrderList} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/Rating' component={Rating} />
          <Route exact path='/logout' component={Logout} />
          <Route exact path='/alo'  component={CardCom}/>
          <Route exact path='/bitLove'  component={ABitofLove}/>

        </Switch>

      </BrowserRouter>
    )
  }
}

export default AppRoute
