import React from 'react'
import $ from 'jquery'
import { BrowserRouter, Route, Link, IndexRoute, hashHistory, browserHistory, Switch } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Products from './Products.jsx'
import SignIn from './SignIn.jsx'
import SignUp from './SignUp.jsx';
import Navcom from './navbar.jsx';
import Profile from './Profile.jsx'
import MapContainer from './MapContainer.jsx'
 
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
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/prouducts' component={Products} />
          <Route exact path='/signin' component={SignIn} />
          <Route exact path='/' component={Navcom}/>
          <Route exact path='/Profile' component={Profile}/>
          <Route exact path='/map' component={MapContainer}/>
         </Switch>
      </BrowserRouter>
    )
  }
}

export default AppRoute;
