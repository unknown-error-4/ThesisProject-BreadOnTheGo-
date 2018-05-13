import React from 'react'
import $ from 'jquery'
import { BrowserRouter, Route, Link, IndexRoute, hashHistory, browserHistory, Switch } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'

import SignUp from './SignUp.jsx'





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
        </Switch>
      </BrowserRouter>
    )
  }
}

export default AppRoute;
