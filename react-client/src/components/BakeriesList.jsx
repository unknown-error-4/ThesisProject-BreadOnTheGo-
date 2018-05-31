import React from 'react'
// import Bakery from './Bakery.jsx'

class BakeriesList extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div style={{border: 'solid', 'borderRadius': '15px', 'borderColor': '#E9AB17'}}>
        { this.props.bakeries.map(item => {
          return (
            <div>
              <h4>{item.email}</h4>
              <p>Distance: {item.phoneNumber} </p>
              <p>Mobile: {item.bakeryName}</p>
              <h5 style={{border: 'solid'}} />
            </div>

          )
        })}
      </div>
    )
  }
}

export default BakeriesList
