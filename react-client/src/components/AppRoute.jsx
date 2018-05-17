import React from 'react'
import $ from 'jquery'
import { BrowserRouter, Route, Link, IndexRoute, hashHistory, browserHistory, Switch } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'
import Products from './Products.jsx'
import SignIn from './SignIn.js'
import SignUp from './SignUp';
import Navcom from './navbar.jsx';
import MapComponent from './MapComponent.jsx';
import Profile from './Profile.jsx'
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
          <Route exact path='/map' component={MapComponent}/>
          <Route exact path='/Profile' component={Profile}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default AppRoute;
