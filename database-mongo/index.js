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

var userSchema = mongoose.Schema({
  userName:String,
  email:{
    type: String,
    trim: true
    },
    password:{
      type: String
    },
    phoneNumber: Number,
    latitude: String,
    longtitude: String,
    typeOfPayment: String,
    typeOfUser: String


});
var User = mongoose.model('User', userSchema);

var saveUser =function(data,callback){
  var NUser= new User(data);
  NUser.save(function(err,data){
    if(err){
      callback(err,null)
    }
    callback(null,data)
  })
}


///////////////////////////////////////////////////////////


var prouductSchema = mongoose.Schema({
  name:String,
  description:String,
  image:String,
  price:Number
});

var Prouduct = mongoose.model('Prouduct',prouductSchema);

///////////////////////////////////////////////////////////

var saveProuduct = function(data,callback){
  var NewProuduct = new Prouduct(data);
  NewProuduct.save(function(err,dataRes){
    if(err){
      console.log("err in saving product")
      callback(err,null)
    }
    callback(null,dataRes)
  });
};

///////////////////////////////////

var selectAll = function(callback) {
  Prouduct.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};


//////////////////////////////////////////////

module.exports.Prouduct = Prouduct;
module.exports.User = User;
module.exports.saveUser = saveUser;
module.exports.saveProuduct = saveProuduct;
module.exports.selectAll = selectAll;
