import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import AppRoute from './components/AppRoute.jsx';
import Products from './components/Products.jsx';
import SignIn from './components/SignIn.jsx'
import signUp from './components/SignUp.jsx';
import navbar from './components/navbar.jsx'
<<<<<<< HEAD
import MapComponent from './components/MapComponent.jsx';
import Profile from './components/Profile.jsx'
=======
import TheMap from './components/TheMap.jsx'
>>>>>>> map basic


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
