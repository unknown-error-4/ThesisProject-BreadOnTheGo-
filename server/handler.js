var db =require('../database-mongo/index.js');
var bcrypt = require('bcrypt');
var helper=require('../helper/helperfunc.js')
var saltRounds = 10;



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
         longtitude: data.longtitude,
         latitude: data.latitude,
         email:data.email,
         typeOfPayment: data.typeOfPayment,

         typeOfUser: data.typeOfUser,
         image:data.image

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
   ////////////////////////////////////////////////////////////////////////////////////////////////////
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
           longtitude: data.longtitude,
           latitude: data.latitude,
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
   ////////////////////////////////////////////////////////////////////////////////////////////////////
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
           longtitude: data.longtitude,
           latitude: data.latitude,
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
          console.log("zz")
          }
          else{
          console.log('wrong username or password')
          res.send(isMatch)
          }
        })
    } else {console.log('username not exist22')
            res.send(false)}
  });
};
///////////////////////////////////////////////////////////////////////////////////////////////////
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
          console.log("gg")
          }
          else{
          console.log('wrong username or password')
          res.send(isMatch)
          }
        })
    } else {console.log('username not existe10')
            res.send(false)}
  });
};
///////////////////////////////////////////////////////////////////////////////////////////////////



exports.logout=function(req,res) {
  req.session.destroy(function() {
   res.sendStatus(200);
 });
}


///////////////////////////////////////////////////////////////////////////////////////////////////
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
////////////////////////
exports.showUser = function (req, res) {
  var query = req.query;
  db.User.find({}, function (err, response) {
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
///////////////////////////////////////////////////////////////////////////////////////////////////
var DistanceInKm =function(lat1,lon1,lat2,lon2) {
          var radius = 6371;
          var Latitude = deg2rad(lat2-lat1);
          var Longtitude = deg2rad(lon2-lon1);
          var a =
            Math.sin(Latitude/2) * Math.sin(Latitude/2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
            Math.sin(Longtitude/2) * Math.sin(Longtitude/2);

          var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
          var distance = radius * c; // Distance in km
          return distance;
        }

      function deg2rad(deg) {
        return deg * (Math.PI/180)
      }
////////////////////////////////////////////////////////////////////////////////////////////////////
exports.distancebetweenBAndC=function(req, res){
  user=req.body;
    db.Bakery.find({},'bakeryName longtitude latitude distance phoneNumber email',function(err,bakeries){
      for (var i = 0; i < bakeries.length; i++) {
        var dis = DistanceInKm(user.latitude , user.longtitude, bakeries[i].latitude, bakeries[i].longtitude)
        bakeries[i].distance = dis
      }
        function compare(a,b) {
          if (a.distance < b.distance)
            return -1;
          if (a.distance > b.distance)
            return 1;
          return 0;
        }

    bakeries.sort(compare);


    var arr=[];

    for (var i = 0; i < 3; i++) {
      arr.push(bakeries[i])
    }

    res.send(arr);

  })

}

////////////////////////////////////////////////////////////////////////////////////////////////////






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
      res.send(data)
    }
  })
}
///////// this function to upload image
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
exports.getImage = function(req,res){
  db.User.find({},function(err,data){
    if(err){
      throw err
    }else{
      res.send(data)
    }
  })
}
///////////////////////
exports.updateImage = function (req, res) {
  var updateImage={
    image: req.body.image
  }
 db.User.findOneAndUpdate({id:req.body.id},updateImage,function(err,data){
    if(err){
      res.json('err');
    }
   else{
       data.save(function(err,data){
        if(err){
          return handleError(err)
        }
        else{
        res.json(data);
       }
        })
    }

  })
}

///////////// to update Rating//////////////////////
exports.updateRating = function (req, res) {
  var updaterating={
    rating: req.body.rating
  }
  console.log("updaterating",updaterating)
 db.Prouduct.findOneAndUpdate({id:req.body.id},updaterating,function(err,data){
    if(err){
      res.json('err');
    }
   else{
       data.save(function(err,data){
        if(err){
          return handleError(err)
        }
        else{
        res.json(data);
       }
        })
    }


  })
}
//////////////////////////////
