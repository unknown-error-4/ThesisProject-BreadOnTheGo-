import React, { Component } from 'react';
import {Map,  Marker,InfoWindow, GoogleApiWrapper} from 'google-maps-react';

class TheMap extends Component {
  constructor(props){
    super(props)
    this.state = {

      lat:0,
      lng:0,
      showingInfoWindow: false,
      activeMarker: {},
      Place: {}
    }
    this.getLoc = this.getLoc.bind(this)
  }


getLoc(){
  var that = this
  var options = {
  enableHighAccuracy: true,
  maximumAge: 0
};
function success(pos) {
  var crd = pos.coords;
that.setState({
  lat:crd.latitude,
  lng:crd.longitude
})

// that.props.setLngLat(crd.longitude, crd.latitude)
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}
navigator.geolocation.getCurrentPosition(success, error, options);
}

onMarkerClick(props, marker, e){
    this.setState({
      Place: props,
      activeMarker: marker,
      showingInfoWindow: true
    })};

  onMapClicked (props){
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };
  render() {
    return (
        <div>

          <div>
          {this.getLoc()}

            <Map style={{width:"90%",height:"30%"}} google={this.props.google} zoom={7}
                initialCenter={{  lat:31.963158 ,lng:35.930359}}>

                <Marker position={{lat:this.props.laltitude,lng:this.props.longitude}}
                  onClick={this.onMarkerClick} name={"Your locatoin"}
                   />


                <InfoWindow marker={this.state.activeMarker}
                  visible={this.state.showingInfoWindow}>

                <div>
                  <h1>{this.state.Place.name}</h1>
                </div>

              </InfoWindow>

            </Map>
            </div>

        </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyDVwtOBPrV-eKuemXtXxpMsPjmfjBOB9oo")
})(TheMap)
