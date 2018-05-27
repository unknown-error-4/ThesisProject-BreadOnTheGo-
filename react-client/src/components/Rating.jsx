import React from 'react'
import ReactDOM from 'react-dom'
import StarRatingComponent from 'react-star-rating-component'

class Rating extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      rating: 1,
      product: []
    }
  }

  onStarClick (nextValue, prevValue, name) {
    var that = this
    $.ajax({
      url: './updateRating',
      type: 'PUT',
      data: JSON.stringify({rating: nextValue}),
      contentType: 'application/json',
      success: function (result) {
        alert('Successful updated')
      }
    })
    this.setState({rating: nextValue})
  }
  // when i make refresh for the data i need to save
  componentDidMount () {
    var that = this
    var product = this.props.rating
    $.ajax({
      url: './showProduct',
      type: 'GET',
      success: function (data) {
        console.log('dataaaaaa', data)
        console.log(typeof data)
        for (var key in data) {
          that.setState({rating: data[key].rating})
        }
      }

    })
  }
  render () {
    var { rating } = this.state

    return (
      <div>
        <p>Rating from state: {rating}</p>
        <StarRatingComponent
          name='rate1'
          starCount={10}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
      </div>
    )
  }
}
export default Rating
