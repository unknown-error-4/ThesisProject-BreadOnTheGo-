import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import AppRoute from './components/AppRoute.jsx';
import Products from './components/Products.jsx';
import SignIn from './components/SignIn.js'
import signUp from './components/SignUp.js';
import navbar from './components/navbar.jsx';
import Profile from './components/Profile.jsx';
import SearchProduct from './components/SearchProduct.jsx';
import image from './components/image.jsx'
import TheMap from './components/TheMap.jsx'
import ProductList from './components/ProductList.jsx'
import Home from './components/Home.jsx'


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
