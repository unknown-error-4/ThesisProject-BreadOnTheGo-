import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import AppRoute from './components/AppRoute.jsx';

import Products from './components/Products.jsx';
import SignIn from './components/SignIn.js'

import signUp from './components/SignUp';
import navbar from './components/navbar.jsx'
import MapComponent from './components/MapComponent.jsx'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }



  render () {
    return (<div>
      <AppRoute/>
    </div>
    )

  }
}

ReactDOM.render(<App />, document.getElementById('app'));
