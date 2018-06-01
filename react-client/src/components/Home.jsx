import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import TheMap from './TheMap.jsx'
import BakeriesList from './BakeriesList.jsx'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      longtitude: 0,
      latitude: 0,
      bakeries: []

    }
    this.handleChangesLongitude = this.handleChangesLongitude.bind(this)
    this.handleChangesLaltitude = this.handleChangesLaltitude.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.setLngLat = this.setLngLat.bind(this)
  }

  // This function will be passed to the child component TheMap, where we will call it and pass the user longitude and laltitude so change them in the state of this component, which will make them accessible in the ajax post request.

  setLngLat (lng, lat) {
    this.setState({longtitude: lng,
      latitude: lat})
  }

  // here we will change this.state.longitude when ever the value of the textbox is changed
  handleChangesLongitude (event) {
    this.setState({longtitude: event.target.value})
    console.log(this.state.longtitude)
  }

  handleChangesLaltitude (event) {
    this.setState({latitude: event.target.value})
    console.log(this.state.latitude)
  }

  // sending longitude and laltitude, and recieving an array of the nearest backeries
  handleSubmit (event) {
    $.ajax({
      type: 'POST',
      url: '/home',
      data: {

        longitude: this.state.longtitude,
        laltitude: this.state.latitude

      },
      success: (data) => {
        this.setState({bakeries: data})
        console.log('success', data)
      },
      error: (err) => {
        console.log(data)
        console.log('err', err)
      }
    })
    event.preventDefault()
  }

  render () {
    return (
      <div className='container' style={{'marginTop': '50px'}}>
        <div>
          <div>
            <div className='container' style={{'marginTop': '50px'}}>
              <h1>Home</h1>
              <div>
                <form onSubmit={this.handleSubmit}>
                  <button type='submit' >The Nearest bakeries !!</button>
                </form>
              </div>
              <div style={{margin: '15px'}}>
                <h4>Choose a Bakery</h4>
                <BakeriesList bakeries={this.state.bakeries} longitude={this.state.longtitude} laltitude={this.state.latitude} />
              </div>
              <TheMap setLngLat={this.setLngLat} longitude={this.state.longtitude} laltitude={this.state.latitude} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
