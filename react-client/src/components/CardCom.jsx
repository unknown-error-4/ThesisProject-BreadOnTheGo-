import React from 'react';
import $ from 'jquery';

class CardCom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        cardNumber:'',
        cardholderName: '',
        value:'',
        expiryDate: '',
        securityNumber:'',
        product:[],
        price:''
            
    }
    this.handleChangeCardNumber= this.handleChangeCardNumber.bind(this)
    this.handleChangeCardholderName= this.handleChangeCardholderName.bind(this)
    this.handleChangeValue= this.handleChangeValue.bind(this)
    this.handleChangeExpiryDate= this.handleChangeExpiryDate.bind(this)
    this.handleChangeSecurityNumber= this.handleChangeSecurityNumber.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }
    handleChangeCardNumber(event) {
      this.setState({cardNumber:event.target.value})
      console.log(this.state.cardNumber)

    }
     handleChangeCardholderName(event) {
      this.setState({cardholderName:event.target.value})
      console.log(this.state.cardholderName)

    }
     handleChangeValue(event) {
      this.setState({value:event.target.value})
      console.log(this.state.value)

    }
     handleChangeExpiryDate(event) {
      this.setState({expiryDate:event.target.value})
      console.log(this.state.expiryDate)

    }
     handleChangeSecurityNumber(event) {
      this.setState({securityNumber:event.target.value})
      console.log(this.state.securityNumber)

    }
    componentDidMount(){
          var that=this
          var product = this.props.price
          $.ajax({
            url:'./showOne',
            type:'GET',
            success:function(data){
              console.log("dataaaaaa",data)
              console.log(typeof data) 
              for(var key in data){
                  
                that.setState({price: data.price})
                console.log("i need to appear",data.price)
              }
          }

        })
  }
  handleSubmit(){
    var {price}=this.state
    console.log("hissssssssssssssss",this.state)
    $.ajax({
      type:"POST",
      url:"/alo",
      data:JSON.stringify({
        cardNumber:this.state.cardNumber,
        cardholderName: this.state.cardholderName,
        value:this.state.value,
        expiryDate:this.state.expiryDate ,
        securityNumber:this.state.securityNumber,
        price:this.state.price
      }),
      contentType: 'application/json',
      success:function(data){
        console.log("slo lsodds",data)
        alert("thank you for confident of us this is your value"+data)
        // alert("uhdhd")
      },
      error:function (err){
        alert("the amount is so high")
      }


    })
  }




  render(){

    return (
      <div>
      <label>cardNumber:
      <br/>
      <input type="text"  onChange={this.handleChangeCardNumber}/>
      </label>
      <br/>
      <label> cardholderName:
      <br/>
      <input type="text" onChange={this.handleChangeCardholderName}/>
      </label>
      <br/>
      <label> value:
      <br/>
      <input type="text" onChange={this.handleChangeValue}/>
      </label>
      <label> expiryDate:
      <br/>
      <input type="text" onChange={this.handleChangeExpiryDate}/>
      </label>
      <br/>
      <label> securityNumber:
      <br/>
      <input type="text" onChange={this.handleChangeSecurityNumber}/>
      </label>
        <button onClick = {this.handleSubmit}>Buy</button>
   

  
      </div>


      )
  }
} 
export default  CardCom;