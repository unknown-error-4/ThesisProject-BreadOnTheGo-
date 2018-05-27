// import React from 'react';
// // import ShowProductList from './ShowProductList.jsx'
// class ProductList extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state= {
//       arr:[]
//     }
//   }
  
//   componentDidMount() {
//     var that = this;
//     var arr = this.state.arr;
//     $.ajax({
//       url: '/showProduct',
//       method: "GET"
//     })
//     .done(function(data) {
//       that.setState({
//         arr: data
//       })
//     })
//     .fail(function (jqXHR, textStatus) {
//       alert("no match found!");
//     });
//   }

//   render(){
//     if(this.state.arr.length===0){
//       return(<h1>No Product !</h1>)
//     }
//     return(
//       <div>
//         <div className='text-center'><h1> Products </h1></div>
//         {this.state.arr.map(function(elem,index){
//         return(
//             <div> 
//             	{elem.name}
//             </div>
//         )
//        })}
//       </div>
//     )
//   }
// }
// export default ProductList;