var db =require('../database-mongo/index.js');

var bcrypt = require('bcrypt');
var helper=require('../helper/helperfunc.js')
////////////////////////////////////////////////////////////////////////////////////////////////////
var saltRounds = 10;

exports.SignUp=function(req,res){
  var userName =req.body.userName
  var email =req.body.email
  var password =req.body.password
  var phoneNumber=req.body.phoneNumber
  var  typeOfPayment =req.body.typeOfPayment
  var typeOfUser =req.body.typeOfUser
  console.log('here is data' , req.body)
  db.User.find({ // searching for the username in the schema
    userName: userName
  }, function (err, data) {
    if (err) {
      res.sendStatus(404)
    }
  

      else if (data ===data.userName) {
        res.send("the username already exists pleas change it")
      }
      else {
        bcrypt.genSalt(saltRounds, function (err, salt) {
          if (err) {
            throw err
          }
          bcrypt.hash(password, salt, function (err, hash) {
            if (err) {
              throw err
            }
            var user = new db.User({
              userName: userName,
              email: email,
              password: hash,
              phoneNumber:phoneNumber,
              typeOfPayment:typeOfPayment,
              typeOfUser:typeOfUser
            })
            user.save(function (err, data) {
              if (err) {
                throw err
              }
              helper.createSession(req, res, data.userName)
            })
          })
        })
      }

  })
}
////////////////////////////////////////////////////////////////////////////////////////////////////
exports.saveUser =function(data,callback){
  var NUser= new User(data);
  NUser.save(function(err,data){
    if(err){
      callback(err,null)
    }
    callback(null,data)
  })
}
