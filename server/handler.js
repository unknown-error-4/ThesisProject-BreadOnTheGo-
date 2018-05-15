var db =require('../database-mongo/index.js');
var bcrypt = require('bcrypt');
var helper=require('../helper/helperfunc.js')
////////////////////////////////////////////////////////////////////////////////////////////////////
var saltRounds = 10;
////////////////////////////////////////////////////////////////////////////////////////////////////
exports.SignUp = function (req, res) {
  var data=req.body;

bcrypt.hash(data.password,saltRounds,function(err,hash){
  if(err){
    console.log(err)
  }if(data.userName === "" || data.password.length < 8 || data.phoneNumber.length <12){
    res.send("Invalid Input")
  // }else{
  //   db.User.count({userName: data.userName}, function (err, count){
  //   if(count>0){
  //      res.send("exists")
    }
  else{
       db.saveUser({
          userName:data.userName,
          password:hash,
          phoneNumber:data.phoneNumber,
          longitude: data.longitude,
          laltitude: data.laltitude,
          email:data.email,
          cash: data.cashPayment,
          creditCard: data.creditCardPayment,
          baker: data.bakerUser,
          customer: data.customerUser
        },function(err,data){
          if(err){
            console.log(err)
          }
          res.send(data)
        })
      }
    });
   }

////////////////////////////////////////////////////////////////////////////////////////////////////
exports.SavingProducts = function(req, res){
  console.log("product responese")
  var data = req.body;
  db.saveProuduct({
    name: data.name,
    description: data.description,
    image: data.image,
    price: data.price
  }, function(err, data){
    if (err){
      console.log(err)
    }
    res.send(data);
  })
}
////////////////////////////////////////////////////////////////////////////////////////////////////
 //function for signin

exports.SignIn=function(req,res) {
  var email =req.body.email;
  var password=req.body.password;
db.User.findOne(
  {email:email},
  function (err,data) {
  if (err) {
    console.log(err);
  }else {
    bcrypt.compare (password,data.password,function (err,found) {
      if (found) {
        helperfunc.createSession(req,res,data.email)
      } else {
        res.send("wrong Email or password or the username not exists")
      }
    })
  }

})

}
//////////////////////////////////////////////////////////////////////////////////////////////////
