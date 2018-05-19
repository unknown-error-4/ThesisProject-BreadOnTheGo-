import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Columns from 'react-columns';
import TheMap from './TheMap.jsx';

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


  setLngLat(lng, lat){
      this.setState({longitude: lng,
                     laltitude: lat})
  }


  handleChangesLongitude(event) {
    this.setState({longitude: event.target.value})
    console.log(this.state.longitude)

  }

  handleChangesLaltitude(event) {
    this.setState({laltitude: event.target.value})
    console.log(this.state.laltitude)

  }



  handleSubmit(event) {
    $.ajax({
      type : 'POST',
      url: '/',
      data: {

        longitude: this.state.longitude,
        laltitude: this.state.laltitude

      },
      success: (data) => {
        this.setState({mechs : data})
        console.log('success', data)
      },
      error: (err) => {
        console.log('err', err);
      }
    });
    event.preventDefault();
  }

  render () {



    return (<div className="container" style={{'marginTop':'50px'}}>

            <div>
              <div>
              <h1>Home</h1>
              <div >
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label>Location:</label>
                  <p>Don't panic! we will fill this one for you :)</p>
                  <input className="form-control" id="longitude" placeholder="longitude" name="longitude" value={this.state.longitude} onChange={this.handleChangesLongitude}/>
                  <input className="form-control" id="laltitude" placeholder="laltitude" name="laltitude" value={this.state.laltitude} onChange={this.handleChangesLaltitude}/>
                </div>
                <button type="submit" className="btn btn-warning btn-block btn-lg" style={{color:'black', marginBottom: '10px'}}>Get me the nearest bakeries!</button>
              </form>
              </div>

              <TheMap setLngLat={this.setLngLat} longitude={this.state.longitude} laltitude={this.state.laltitude}/>
              </div>
              </div>
            </div>)
  }
}

export default Home;
