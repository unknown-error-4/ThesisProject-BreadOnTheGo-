import React from'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {Redirect} from "react-router-dom";

class Products extends React.Component{

  			constructor(props){
  				super(props);

  				this.state = {
  					name:'',
            description:'',
            image:'',
            price:''
  				}
  				this.handleChangename = this.handleChangename.bind(this);
  				this.handleChangedescription= this.handleChangedescription.bind(this);
  				this.handleChangeprice = this.handleChangeprice.bind(this);
  				this.handleChangeimage = this.handleChangeimage.bind(this);
        }

        handleChangename(event) {
  		    this.setState({name: event.target.value});
  		  }
  			handleChangedescription(event) {
  		    this.setState({description: event.target.value});
  		  }
  			handleChangeprice(event) {
  		    this.setState({price: event.target.value});
  		  }
  			handleChangeimage(event) {
  		    this.setState({image: event.target.value});
  		  }

        handleClick(){
          var that = this
  				$.ajax({
  					type:'POST',
  					url: '/products',
  					data:{
  						name: that.state.name,
  						description: that.state.description,
  						image: that.state.image,
  						price: that.state.price
  					},
  					success: (data) => {
              that.setState({message: data})
  						console.log("Success in prouduct POST!", data);
              alert ('Your Product Added')
  					},
  					error(err){
  						console.log("Error in prouduct POST!",err);
  					}
  				})
  			}



        render(){

          return (
            <div>

            <h1>Add Your Products</h1>
            <br/>
            <label> Name of Prouduct :
            <br/>
            <input type="text" name="User Name" required onChange={this.handleChangename}/>
            </label>
            <br/>
            <label> Description:
            <br/>
            <input type="text" name="description" required onChange={this.handleChangedescription}/>
            </label>
            <br/>
            <label>Image:
            <br/>
            <input type="text" name="image for Prouduct" required onChange={this.handleChangeimage}/>
            </label>
            <br/>
            <label>Price:
            <br/>
            <input type="text" name="price" required onChange={this.handleChangeprice}/>
            </label>
            <br/>
            <button onClick={this.handleClick.bind(this)}> Add Prouduct</button>
            </div>
            );
        }

    }

export default Products;
