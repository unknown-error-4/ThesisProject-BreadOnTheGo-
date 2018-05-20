var db =require('../database-mongo/index.js');
var bcrypt = require('bcrypt');
var helper=require('../helper/helperfunc.js')
var saltRounds = 10;

exports.SignUp = function (req, res) {
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
          var obj = {
              email : data.email,
              valid : isMatch
          }
          res.send(obj)
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

//////////////////////////////////////////////////////////////////////////////////////////////////
// exports.retrieve= function(req, res){
//   console.log('db',db.User)
//   db.User.find({req.body.userName},function(err, data){
//     if(err){
//       return handleError(err)
//     }
//     res.send(data)
//     console.log(data)
//   })
// }
/////////////////////retrive function to retrive all user///////////////
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
///////////// retrive function for profile page(user) //////////////
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
//////retrive all products  function to show products ////
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
////////////retrive one product function ////////////
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
//////
/////////////////////////////////////////////////////

exports.TheMap = function (req, res) {
function DistanceInKm(Latitude1,Longitude1,Latitude2,Longitude2) {
        var radius = 6371; // Radius of the earth in km
        var Latitude = deg2rad(Latitude2-Latitude1);  // deg2rad below
        var Longitude = deg2rad(Longitude2-Longitude1);
        var a =
          Math.sin(Laltitude/2) * Math.sin(Laltitude/2) +
          Math.cos(deg2rad(Latitude1)) * Math.cos(deg2rad(Latitude2)) *
          Math.sin(Longitude/2) * Math.sin(Longitude/2);

        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        var distance = radius * c; // Distance in km
        return distance;
      }
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}
/////////////////////////////////////////////////////

exports.signout = function (req, res) { 
  req.session.destroy(function () {
    res.sendStatus(200)
  })
}

/////////////////////////////////////////////////////
