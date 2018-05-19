import React from 'react';
import $ from 'jquery';
import { BrowserRouter, Route, Link, IndexRoute, hashHistory, browserHistory, Switch } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import Products from './Products.jsx';
import SignIn from './SignIn.jsx';
import SignUp from './SignUp.jsx';
import Navcom from './navbar.jsx';
<<<<<<< HEAD
import MapComponent from './MapComponent.jsx';
import Profile from './Profile.jsx'
=======
import TheMap from './TheMap.jsx';

>>>>>>> map basic
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
<<<<<<< HEAD
          <Route exact path='/map' component={MapComponent}/>
          <Route exact path='/Profile' component={Profile}/>
=======
          <Route exact path='/themap' component={TheMap}/>
>>>>>>> map basic
        </Switch>
      </BrowserRouter>
    )
  }
}

export default AppRoute;
