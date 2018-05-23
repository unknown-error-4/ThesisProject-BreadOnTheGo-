import React from 'react';
import $ from 'jquery';

class image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image:'',
      afaq:[]
    }
    this.uploadPhoto=this.uploadPhoto.bind(this)
  }
  componentDidMount(){
    var x = this;
    $.ajax({
      url: "/upload",
      method:"GET"
    }).done(function(res){
      console.log("hello data",res)
      var arr = []
      for(var i =0; i<res.length; i++){
        if(res[i].image !== undefined){
          arr.push(res[i].image)
        }
      }
      
      x.setState({
        image:arr[3]
      })
    }).fail(function(err){
      console.log(err)
    })
  }
uploadPhoto (photo) { // post the photo and get the photo in the same time
    var x = this
    var file = photo.target.files[0]
    
    var fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onload = function (e) {
// console.log("hello ", e.target.result)
// x.setState({image: e.target.result})
      // console.log("hello photo",photo.target.files[0])

$.ajax({

  method: 'POST',
      url: '/upload',
      data:{image:e.target.result}
    })
    .done (function (data) {
       window.location.reload()
    })
    .fail(function(err) {
      console.log("hello error", err)
    });




   }
  }
  render(){
    console.log("alo alo",this.state.afaq)
    return (
      <div>
      <img src = {this.state.image ||'http://sba.scfhs.org.sa/publiceservice_enu/CustomPages/Profileuploader/static/images/default.jpg'}  style = {{width:"400px"}}/>
      <form>
      <input type = "file" onChange = {this.uploadPhoto} />
      </form>
      </div>


      )
  }
} 
export default  image;