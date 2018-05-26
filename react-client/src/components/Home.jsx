import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import TheMap from './TheMap.jsx';
import NavcomSigned from './NavcomSigned.jsx'
 class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      longitude: 0,
      laltitude: 0,

    }
   this.handleChangesLongitude = this.handleChangesLongitude.bind(this)
   this.handleChangesLaltitude = this.handleChangesLaltitude.bind(this)
   this.handleSubmit = this.handleSubmit.bind(this)
   this.setLngLat = this.setLngLat.bind(this);

  }

//This function will be passed to the child component TheMap, where we will call it and pass the user longitude and laltitude so change them in the state of this component, which will make them accessible in the ajax post request.

  setLngLat(lng, lat){
      this.setState({longitude: lng,
                     laltitude: lat})
  }

  //here we will change this.state.longitude when ever the value of the textbox is changed
  handleChangesLongitude(event) {
    this.setState({longitude: event.target.value})
    console.log(this.state.longitude)

  }

  handleChangesLaltitude(event) {
    this.setState({laltitude: event.target.value})
    console.log(this.state.laltitude)

  }


  //sending longitude and laltitude, and recieving an array of the nearest backeries
  handleSubmit(event) {
    $.ajax({
      type : 'POST',
      url: '/',
      data: {

        longitude: this.state.longitude,
        laltitude: this.state.laltitude

      },
      success: (data) => {

        console.log('success', data)
      },
      error: (err) => {
        console.log('err', err);
      }
    });
    event.preventDefault();
  }

  render () {



    return (
          <div>
          <div>
          <NavcomSigned/>
          </div>
          <div className="container" style={{'marginTop':'50px'}}>
          <TheMap setLngLat={this.setLngLat} longitude={this.state.longitude} laltitude={this.state.laltitude}/>
          </div>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <div>
          <button type="submit" className="btn btn-warning btn-block btn-lg" style={{color:'black', marginBottom: '5px'}}>Get me the nearest bakeries!</button>
          </div>
          </div>
          )
  }
}



export default Home;
