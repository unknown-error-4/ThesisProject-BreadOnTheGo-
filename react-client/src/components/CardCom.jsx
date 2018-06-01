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
      <div className="container" id ="card">
    <div className="row">
      <div className="col-md-4 offset-md-4 col-10 offset-1 pl-0 pr-0">
        <div className="card">
            <div className="card-header">
              <div className="row">
              <div className="col-md-5 col-12 pt-2">
                <h6 className="m-0"><strong>Payment Details</strong></h6>
              </div>
              <div className="col-md-7 col-12 icons">
                <i className="fa fa-cc-visa fa-2x" aria-hidden="true"></i>
                <i className="fa fa-cc-mastercard fa-2x" aria-hidden="true"></i>
                <i className="fa fa-cc-discover fa-2x" aria-hidden="true"></i>
                <i className="fa fa-cc-amex fa-2x" aria-hidden="true"></i>
              </div>
            </div>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                    <label for="validationTooltipCardNumber"><strong>CARD NUMBER</strong></label>
                    <div className="input-group">
                      <input type="text" className="form-control border-right-0" id="validationTooltipCardNumber" placeholder="Card Number" onChange={this.handleChangeCardNumber}/>
                      <div className="input-group-prepend">
                          <span className="input-group-text rounded-right" id="validationTooltipCardNumber"><i class="fa fa-credit-card"></i></span>
                      </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-8 col-12">
                    <div className="form-group">
                      <label for="exampleInputExpirationDate"><strong>EXPIRATION DATE</strong></label>
                      <input type="text" className="form-control" id="exampleInputExpirationDate" placeholder="MM / YY" onChange={this.handleChangeExpiryDate}/>
                  </div>
                  </div>
                  <div className="col-md-4 col-12">
                    <div className="form-group">
                      <label for="exampleInputCvcCode"><strong>CVC CODE</strong></label>
                      <input type="text" className="form-control" id="exampleInputCvcCode" placeholder="CVC"  onChange={this.handleChangeSecurityNumber}/>
                  </div>
                  </div>
                </div>
                <div className="form-group">
                  <label for="exampleInputCouponCode"><strong>Your account</strong></label>
                  <input type="text" class="form-control" id="exampleInputCouponCode" placeholder="Your account" onChange={this.handleChangeValue}/>
                </div>
                <button className="btn btn-info w-100 pb-2 pt-2" id="sub" onClick = {this.handleSubmit}>Buy</button>
            </form>
            </div>
        </div>
      </div>
    </div>
  </div> 
  </div> 

      )
  }
} 
export default  CardCom;



////////////////////////////////////////////////

      //          <div>
      // <label>cardNumber:
      // <br/>
      // <input type="text"  onChange={this.handleChangeCardNumber}/>
      // </label>
      // <br/>
      // <label> cardholderName:
      // <br/>
      // <input type="text" onChange={this.handleChangeCardholderName}/>
      // </label>
      // <br/>
      // <label> value:
      // <br/>
      // <input type="text" onChange={this.handleChangeValue}/>
      // </label>
      // <label> expiryDate:
      // <br/>
      // <input type="text" onChange={this.handleChangeExpiryDate}/>
      // </label>
      // <br/>
      // <label> securityNumber:
      // <br/>
      // <input type="text" onChange={this.handleChangeSecurityNumber}/>
      // </label>
      //   <button onClick = {this.handleSubmit}>Buy</button>
      //   </div>

  

////////////////////////////////////////////////
 