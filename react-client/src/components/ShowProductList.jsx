// import React from 'react';
// class ShowProductList extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       product:[]
//     }   
    
//   }

//   componentDidMount() {
//     var that = this;
//     $.ajax({
//       url: '/showOne',
//       method: 'GET',
//     })
//     .done (function (data) {
//       that.setState({
//         product: data
//       });
//     })
//     .fail(function( jqXHR, textStatus ) {
//       alert("item not found");
//     });
//   }

//   render(){
//     return(
//       <div >
        
//       <div >
               
//    <li id="name">  
//     name: {this.state.product.name}
//    </li>
//     <li  id="price">
//      price: {this.state.product.price}
//     </li>              
//       </div>
             
//       </div>
//     )
//   }
// }
// export default ShowProductList;