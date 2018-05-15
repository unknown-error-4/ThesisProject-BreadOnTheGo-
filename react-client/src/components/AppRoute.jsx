import React from 'react'
import $ from 'jquery'
import { BrowserRouter, Route, Link, IndexRoute, hashHistory, browserHistory, Switch } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'
import SignUp from './SignUp.js'
import Products from './Products.jsx'
import SignIn from './SignIn.js'


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
        </Switch>
      </BrowserRouter>
    )
  }
}

export default AppRoute;
