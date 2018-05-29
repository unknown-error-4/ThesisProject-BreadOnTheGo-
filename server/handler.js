var db =require('../database-mongo/index.js');
var bcrypt = require('bcrypt');
var helper=require('../helper/helperfunc.js')


var saltRounds = 10;
////////// SignUp User //////////

exports.SignUpUser = function (req, res) {



var data=req.body;
bcrypt.hash(data.password,saltRounds,function(err,hash){
 if(err){
   console.log(err)
 }if(data.userName === "" || data.password.length < 8){
   res.send("Invalid Input")

   }
 else{
      db.saveUser({
         userName:data.userName,
         password:hash,
         phoneNumber:data.phoneNumber,
         longitude: data.longitude,
         laltitude: data.laltitude,
         email:data.email,
         typeOfPayment: data.typeOfPayment,
         typeOfUser: data.typeOfUser
       },function(err,data){
         if(err){
           console.log(err)
         }
         helper.createSession(req,res,data)
        // res.send(data)
       })
     }
   });
  }

  ////////// SignUp Bakery //////////
  exports.SignUpBakery = function (req, res) {
  var data=req.body;
  bcrypt.hash(data.password,saltRounds,function(err,hash){
   if(err){
     console.log(err)
   }if(data.userName === "" || data.password.length < 8){
     res.send("Invalid Input")
     }
   else{
        db.saveBakery({
           bakeryName:data.userName,
           password:hash,
           phoneNumber:data.phoneNumber,
           longitude: data.longitude,
           laltitude: data.laltitude,
           email:data.email,
           typeOfRecievingPayment: data.typeOfRecievingPayment
          },function(err,data){
           if(err){
             console.log(err)
           }
           helper.createSession(req,res,data)
          // res.send(data)
         })
       }
     });
    }
    //////////////////////

//////////SavingProducts//////////
exports.SavingProducts = function(req, res){
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
//////// function for signin for Customer & create session //////////
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
//////// function for signin for Bakery & create session //////////
exports.SignInB = function (req, res) {

  var email = req.body.email;
  var pass = req.body.password;
  db.Bakery.findOne({email:email},function(err,data){
    if(err){
      console.log(err)
    }
    if(data){
      bcrypt.compare(pass,data.password,function(err,isMatch){
          if(isMatch){
          console.log('access valid')
          helper.createSession(req,res,data)

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
////////// retrive function to retrive all user //////////
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
///////////retrive function for profile page(user) //////////
exports.retrieveOne = function (req, res) {
  var query = {id: req.params.id };
  console.log(query , 'here is sessionC');
 db.User.findOne(query, function (err, response) {
    if (err) {
      return res.status(500).json(err.message);
    }
    if (!response) {
      return res.sendStatus(404);
      console.log(res.sendStatus(404), 'no profile');
    }
    res.json(response);
  });
};
////////// retrive function to retrive all bakeries //////////
exports.retrieveBakereis = function (req, res) {
  var query = req.query;
  db.Bakery.find(query, function (err, response) {
    console.log("bakeryRtreive",query)
    if (err) {
      return res.status(500).json(err.message);
    }
    if (response.length === 0) {
      return res.sendStatus(404);
    }
    res.json(response);
  });
};
///////////retrive function for Bakery profile  //////////
exports.retrieveOneBakery = function (req, res) {
  var query = {id: req.session.id };
  console.log(query , 'here is sessionB');
 db.Bakery.findOne(query, function (err, response) {
    if (err) {
      return res.status(500).json(err.message);
    }
    if (!response) {
      return res.sendStatus(404);
      console.log(res.sendStatus(404), 'no profile');
    }
    res.json(response);
  });
};
/////////// retrive all products  function to show products //////////
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
//////// retrive one product function //////////
exports.retrieveOneProduct = function (req, res) {
  var query = {id: req.session.id };

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
////////// Saving Orders //////////
exports.SavingOrders = function(req, res){
  var data = req.body;
  db.saveOrder({
    name: data.name,
    price: data.price
  }, function(err, data){
    if (err){
      console.log(err)
    }
    res.send(data);
  })
}
///////////retrive function for rendering the user info in the Orders page //////////
exports.retrieveOneC = function (req, res) {
  var query = {id: req.session.id };
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
////////////////////////////////////////////////////////////////////////////////////////////////////

/////////this function to upload image
// exports.upload = function(req,res){
//  var image = req.body.image
//   var save = new db.User({
//     image: image
//   })
//   save.save(function (err, data) {
//     if (err) {
//       throw err
//     } else {
//       // console.log('saved!')
//       res.send(data)
//     }
//   })
// }
////////////
// exports.updateImage=function(req,res){
// db.User.update({username: req.session.user}, { $set: { image: image }}, function (err, data) {
//     if (err) {
//       throw err
//     } else {
//       res.send(data)
//     }
//   })
// }
// ///////////////////
// exports.getImage = function(req,res){
//   db.User.find({},function(err,data){
//     if(err){
//       throw err
//     }else{
//       res.send(data)
//     }
//   })
// }
/////////////
