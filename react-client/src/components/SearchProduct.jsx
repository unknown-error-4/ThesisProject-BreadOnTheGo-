import React from 'react';
import { Button,  Panel, ListGroupItem, PanelGroup, FormControl, FormGroup } from 'react-bootstrap';
import Rating from './Rating.jsx'


class SearchProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      value:'',
      products:[]
    }
    this.handleChange=this.handleChange.bind(this);
    this.getItem=this.getItem.bind(this);
  }

  handleChange(e){
    this.setState({value:e.target.value})
  }

  handleSelect(activeKey){
    this.setState({activeKey});
  }

  componentDidMount() {
    var that = this;
    $.ajax({
      url: '/showProduct',
      method: 'GET',
    })
    .done (function (data) {
      that.setState({
        products: data
      });
    })
    .fail(function( jqXHR, textStatus ) {
      alert( "no products found");
    });
  }

  getItem(){
    var that=this;
    console.log(this.state.value)
    $.ajax({
      type:'GET',
      url:'/showProduct',
      success:function(data){
        console.log(data)
        var x=[];
        for(var i=0;i<data.length;i++){
          if(data[i].name===that.state.value){
            x.push(data[i])
          }

        }
         that.setState({products:x})
          console.log('products= ', that.state.sItem)
      }
    })
  }
<<<<<<< HEAD
=======

  // handleKeyPress(e){
  //   this.setState({value:e.target.value})
  // }

>>>>>>> connectingApp1
  render(){
    var r=this;
    return(
      <div>

        <FormGroup bsSize="large">
          <FormControl
            value={this.state.value}
            placeholder="Search"
            onChange={this.handleChange}
          />
        </FormGroup>
      <Button  onClick={this.getItem}>SEARCH</Button>

      <div activeKey={this.state.activeKey}
        onSelect={this.handleSelect}>
      {this.state.products.map(function(y){
        return(
          <div>
          <div  id="border" >
           <h1> {y.name}</h1>
           <h1> {y.price} </h1>
           <h1> {y.description} </h1>
           <h1> {y.image} </h1>
           <div> <Rating/></div>
           </div>
         <div>
          <hr/>
           <hr/>
           </div>
            </div>
        )
      }
      )}
      </div>


      </div>
    )
  }

}
export default SearchProduct;


// <label>
// <input type="radio" name="fb" value="small" />
// <img src="https://d2gk7xgygi98cy.cloudfront.net/6667-3-large.jpg" />
// </label>

// <img onClick={this.handleKeyPress}
// src="https://d2gk7xgygi98cy.cloudfront.net/6667-3-large.jpg"
// alt="HTML5"
// style={{width: 200, height: 200, position: 'absolute', top: this.props.top, left: this.props.left}}/>
