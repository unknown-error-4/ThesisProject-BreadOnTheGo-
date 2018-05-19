import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import AppRoute from './components/AppRoute.jsx';
import Products from './components/Products.jsx';
import SignIn from './components/SignIn.jsx'
import signUp from './components/SignUp.jsx';
import navbar from './components/navbar.jsx'
import Profile from './components/Profile.jsx'
import TheMap from './components/TheMap.jsx'



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
