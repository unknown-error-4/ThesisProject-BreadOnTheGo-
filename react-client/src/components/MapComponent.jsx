import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {Redirect} from "react-router-dom";


class MapComponent extends React.Component {
  constructor(props){

    super(props);

    this.state = {
      email: '',
    password: ''
    }

  };


  render () {

    return(
      <div>
      hello world
    </div>)
  }
}

export default MapComponent;
