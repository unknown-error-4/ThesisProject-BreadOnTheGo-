var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

///////////////////////////////////////////////////////////

var UserSchema = mongoose.Schema({
  userName:{
     type: String,
        unique: true,
        required: true
    },
    email:{
     type: String,
          unique: true,
          required: true,
          trim: true
    },
    password:{
      type: String,
      required: true
    },
    phoneNumber: Number,
    location: {
      latitude: String,
      longtitude: String
    },
    typeOfPayment:{
    cash: String,
    creditCard: String
  },
    typeOfUser:{
      baker: String,
      customer: String
    }

});

var User = mongoose.model('User', UserSchema);

///////////////////////////////////////////////////////////

var ProuductSchema=mongoose.Schema({
  name:String,
  type:String,
  image:String,
  price:Number


});
var Prouduct=mongoose.model('Prouduct',ProuductSchema);


///////////////////////////////////////////////////////////

module.exports.Prouduct= Prouduct;
module.exports.User = User;




///////////////////////////////////////////////////////////
// var selectAll = function(callback) {
//   Prouduct.find({}, function(err, items) {
//     if(err) {
//       callback(err, null);
//     } else {
//       callback(null, items);
//     }
//   });
// };
// var saveProuduct =function(data,callback){
//   var NewProuduct= new Prouduct(data);
//   NewProuduct.save(function(err,data){
//     if(err){
//       callback(err,null)
//     }
//     callback(null,data)
//   })
// }
//////////////////////////////////////////////////////////

// var saveUser =function(data,callback){
//   var NUser= new User(data);
//   Nproudect.save(function(err,data){
//     if(err){
//       callback(err,null)
//     }
//     callback(nul,data)
//   })
// }
////////////////////////////////////////////////////////////////
// module.exports.selectAll = selectAll;
// module.export.saveProuduct= saveProuduct;
// module.export.saveUser= saveUser;
