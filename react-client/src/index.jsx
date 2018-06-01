import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import AppRoute from './components/AppRoute.jsx'
import Products from './components/Products.jsx'
import SignIn from './components/SignIn.js'
import SignInB from './components/SignInB.jsx'
import SignUpB from './components/SignUpB.js'
import SignUpC from './components/SignUpC.js'
import Profile from './components/Profile.jsx'
import TheMap from './components/TheMap.jsx'
import Home from './components/Home.jsx'
import BakeriesList from './components/BakeriesList.jsx'
import NavcomSignedC from './components/NavcomSignedC.jsx'
import NavcomSignedB from './components/NavcomSignedB.jsx'
import OrderList from './components/OrderList.jsx'
import ProfileB from './components/ProfileB.jsx'
import Rating from './components/Rating.jsx'
import Logout from './components/Logout.jsx'
import CardCom from './components/CardCom.jsx';
import ABitofLove from './components/ABitofLove.jsx';

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  };

  render () {
    return (
      <div>
        <AppRoute />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
