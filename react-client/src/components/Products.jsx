import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import {Redirect} from 'react-router-dom'

class Products extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      name: '',
      description: '',
      image: '',
      price: ''
    }
    this.handleChangename = this.handleChangename.bind(this)
    this.handleChangedescription = this.handleChangedescription.bind(this)
    this.handleChangeprice = this.handleChangeprice.bind(this)
    this.handleChangeimage = this.handleChangeimage.bind(this)
  }

  handleChangename (event) {
    this.setState({name: event.target.value})
  }
  handleChangedescription (event) {
    this.setState({description: event.target.value})
  }
  handleChangeprice (event) {
    this.setState({price: event.target.value})
  }
  handleChangeimage (event) {
    this.setState({image: event.target.value})
  }

  handleClick () {
    var that = this
          $.ajax({
            type: 'POST',
            url: '/products',
            data: {
              name: that.state.name,
              description: that.state.description,
              image: that.state.image,
              price: that.state.price
            },
            success: (data) => {
        that.setState({message: data})
              console.log('Success in prouduct POST!', data)
        alert('Your Product Added')
            },
            error (err) {
              console.log('Error in prouduct POST!', err)
            }
          })
        }

  render () {
    return (
     <div>
      <section id="contact">
      <div className="section-content">
        <h1 className="section-header"><span className="content-header wow fadeIn " data-wow-delay="0.2s" data-wow-duration="2s"> Add your product</span></h1>
      </div>

      <div className="contact-section">
      <div className="container">
        <form>
          <div className="col-md-6 form-line">
              <div className="form-group">
                <label for="exampleInputUsername">Name of Prouduct :</label>
                <input type="text" className="form-control" id="" placeholder=" Name of Prouduct" onChange={this.handleChangename}/>
              </div>
              <div className="form-group">
                <label for="exampleInputEmail">Price:</label>
                <input type="email" className="form-control" id="exampleInputEmail" placeholder=" Enter price" onChange={this.handleChangeprice}/>
              </div>
              <div className="form-group">
                <label for="telephone">Image:</label>
                <input type="tel" className="form-control" id="telephone" placeholder=" Enter image" onChange={this.handleChangeimage}/>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label for ="description"> Description</label>
                <textarea  className="form-control" id="description" placeholder="Description" onChange={this.handleChangedescription}></textarea>
              </div>
              <div>

                <button type="button" className="btn btn-default submit" onClick={this.handleClick.bind(this)}> <i className="fa fa-paper-plane" aria-hidden="true"></i>  add product </button>
              </div>

          </div>
        </form>
       </div>
      </div>
    </section>
</div>
    )
  }
}

export default Products




      // <div>
      //   <h1>Add Your Products</h1>
      //   <br />
      //   <label> Name of Prouduct :
      //   <br />
      //   <input type='text' name='User Name' required onChange={this.handleChangename} />
      //   </label>
      //   <br />
      //   <label> Description:
      //   <br />
      //     <input type='text' name='description' required onChange={this.handleChangedescription} />
      //   </label>
      //   <br />
      //   <label>Image:
      //     <br />
      //     <input type='text' name='image for Prouduct' required onChange={this.handleChangeimage} />
      //   </label>
      //   <br />
      //   <label>Price:
      //     <br />
      //     <input type='text' name='price' required onChange={this.handleChangeprice} />
      //   </label>
      //   <br />
      //   <button onClick={this.handleClick.bind(this)}> Add Prouduct</button>
      // </div>
