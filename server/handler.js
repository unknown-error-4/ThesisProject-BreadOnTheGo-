var db =require('../database-mongo/index.js');
var bcrypt = require('bcrypt');
var helper=require('../helper/helperfunc.js')
var saltRounds = 10;

 
exports.Signup = function (req, res) {
console.log("ress" , req.body)
var username = req.body.userName
var data=req.body;
db.User.find({ // searching for the username in the schema
  userName: username
}, function (err, data) {
  if (err) {
    res.sendStatus(404)
  } else {
    if (data.length > 0) { // if the username found in the schema, then send error, if not save his/her name and hash his/her password
      res.sendStatus(404)
    } else {
      bcrypt.genSalt(saltRounds, function (err, salt) {
        if (err) {
          throw err
        }
        bcrypt.hash(password, salt, function (err, hash) {
          if (err) {
            throw err
          }
          var user = new db.User({
            userName:data.userName,
         password:hash,
         phoneNumber:data.phoneNumber,
         longitude: data.longitude,
         laltitude: data.laltitude,
         email:data.email,
         typeOfPayment: data.typeOfPayment,
         typeOfUser: data.typeOfUser
          })
          user.save(function (err, data) {
            if (err) {
              throw err
            }
            helper.createSession(req, res, data.username)
          })
         })
      })
    }
  }
})
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
// /////function for signin & create session
exports.SignIn = function (req, res) {

  var email = req.body.email;
  var pass = req.body.password;
  db.User.findOne({email:email},function(err,data){
    if(err){
      console.log(err)
    }
    if(data){
      bcrypt.compare(pass,data.password,function(err,isMatch){
          if(isMatch){
          console.log('access valid')
          helper.createSession(req,res,data)
          console.log("gg")
          }
          else{
          console.log('wrong username or password')
          res.send(isMatch)
          }
        })
    } else {console.log('username not existed')
            res.send(false)}
  });
};
//////////retrive function to retrive all user
exports.retrieve = function (req, res) {
  var query = req.query;
  db.User.find(query, function (err, response) {
    console.log("afaq",query)
    if (err) {
      return res.status(500).json(err.message);
    }
    if (response.length === 0) {
      return res.sendStatus(404);
    }
    res.json(response);
  });
};
///////////retrive function for profile page(user) 
exports.retrieveOne = function (req, res) {
  var query = {id: req.params.id };
 db.User.findOne(query, function (err, response) {
    if (err) {
      return res.status(500).json(err.message);
    }
    if (!response) {
      return res.sendStatus(404);
    }
    res.json(response);
  });
};
//////retrive all products  function to show products 
exports.showProduct = function (req, res) {
  var query = req.query;
  console.log("Prouduct arraived")
  db.Prouduct.find({}, function (err, response) {
    if (err) {
      return res.status(500).json(err.message);
    }
    if (response.length === 0) {
      return res.sendStatus(404);
    }
    res.send(response);
  });
};
////////retrive one product function
exports.retrieveOneProduct = function (req, res) {
  var query = {id: req.params.id };

 db.Prouduct.findOne(query, function (err, response) {
    if (err) {
      return res.status(500).json(err.message);
    }
    if (!response) {
      return res.sendStatus(404);
    }
    res.json(response);
  });
};
/////////this function to upload image 
exports.upload = function(req,res){
 var image = req.body.image
  var save = new db.User({
    image: image
  })
  save.save(function (err, data) {
    if (err) {
      throw err
    } else {
      // console.log('saved!')
      res.send(data)
    }
  })
}
//////////////
// exports.updateImage=function(req,res){
// db.User.update({username: req.session.user}, { $set: { image: image }}, function (err, data) {
//     if (err) {
//       throw err
//     } else {
//       res.send(data)
//     }
//   })
// }
/////////////////////
exports.getImage = function(req,res){
  db.User.find({},function(err,data){
    if(err){
      throw err
    }else{
      res.send(data)
    }
  })
}
/////////////