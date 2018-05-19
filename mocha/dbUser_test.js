var assert = require('assert');
var mongoose = require('mongoose');
var expect = require('chai').expect;
var Test = require('../database-mongo/index.js');


//testing user schema


describe('User Model', function () {
  it('should be a Mongoose model', function () {
    expect(new Test.User()).to.be.instanceOf(mongoose.Model);
  });

  it('should have a schema', function () {
    expect(Test.User.schema).to.exist;
  });

   it('should have a `userName` property', function () {
    expect(Test.User.schema.paths.userName).to.exist;
  });

   it('should have a `userName` property that is a string', function () {
     expect(Test.User.schema.paths.userName.options.type.name).to.equal('String');
  });
///////////////////////////////////////////////////////////////////////////////
    it('should have a `email` property', function () {
    expect(Test.User.schema.paths.email).to.exist;
  });

    it('should have a `email` property that is a string', function () {
     expect(Test.User.schema.paths.email.options.type.name).to.equal('String');
  });
    it('should have a `email` property that its trim is true', function () {
     expect(Test.User.schema.paths.email.options.trim).to.be.true;
  });
//////////////////////////////////////////////////////////////////////////////
    it('should have a `password` property', function () {
    expect(Test.User.schema.paths.password).to.exist;
  });
    it('should have a `password` property that is a string', function () {
     expect(Test.User.schema.paths.password.options.type.name).to.equal('String');
  });
//////////////////////////////////////////////////////////////////////////////
   it('should have a `phoneNumber` property', function () {
    expect(Test.User.schema.paths.phoneNumber).to.exist;
  });
   it('should have a `phoneNumber` property that is a number', function () {
    expect(Test.User.schema.paths.phoneNumber.options.type.name).to.equal('Number');
  });
//////////////////////////////////////////////////////////////////////////////
   it('should have a `latitude` property', function () {
    expect(Test.User.schema.paths.latitude).to.exist;
  });
   it('should have a `latitude` property that is a string', function () {
     expect(Test.User.schema.paths.latitude.options.type.name).to.equal('String');
  });
//////////////////////////////////////////////////////////////////////////////
	it('should have a `longtitude` property', function () {
    expect(Test.User.schema.paths.longtitude).to.exist;
  });
   it('should have a `longtitude` property that is a string', function () {
     expect(Test.User.schema.paths.longtitude.options.type.name).to.equal('String');
  });
//////////////////////////////////////////////////////////////////////////////
	it('should have a `typeOfPayment` property', function () {
    expect(Test.User.schema.paths.typeOfPayment).to.exist;
  });
   it('should have a `typeOfPayment` property that is a string', function () {
     expect(Test.User.schema.paths.typeOfPayment.options.type.name).to.equal('String');
  });

///////////////////////////////////////////////////////////////////////////////
	it('should have a `typeOfUser` property', function () {
    expect(Test.User.schema.paths.typeOfUser).to.exist;
  });
   it('should have a `typeOfUser` property that is a string', function () {
     expect(Test.User.schema.paths.typeOfUser.options.type.name).to.equal('String');
  });

///////////////////////////////////////////////////////////////////////////////
 describe('Test Database-User-saved', function() {
     it('New User saved to test database', function(done) {
      var newuser = Test.User();
 
      newuser.save(function(err) {
        if (err) done(err);
        else done();
      })
    });

 });
});

//testing prouduct schema

describe('prouduct model', function(){

 it('should be a Mongoose model', function () {
    expect(new Test.Prouduct()).to.be.instanceOf(mongoose.Model);
  });

  it('should have a schema', function () {
    expect(Test.Prouduct.schema).to.exist;
  });

 it('should have a `name` property', function () {
    expect(Test.Prouduct.schema.paths.name).to.exist;
  });

   it('should have a `name` property that is a string', function () {
     expect(Test.Prouduct.schema.paths.name.options.type.name).to.equal('String');
 });
 /////////////////////////////////////////////////////////////////////

it('should have a `description` property', function () {
    expect(Test.Prouduct.schema.paths.description).to.exist;
  });

   it('should have a `description` property that is a string', function () {
     expect(Test.Prouduct.schema.paths.description.options.type.name).to.equal('String');
 });

//////////////////////////////////////////////////////////////////////

it('should have a `image` property', function () {
    expect(Test.Prouduct.schema.paths.image).to.exist;
  });

   it('should have a `image` property that is a string', function () {
     expect(Test.Prouduct.schema.paths.image.options.type.name).to.equal('String');
 });

/////////////////////////////////////////////////////////////////////

it('should have a `price` property', function () {
    expect(Test.Prouduct.schema.paths.price).to.exist;
  });

   it('should have a `price` property that is a string', function () {
     expect(Test.Prouduct.schema.paths.price.options.type.name).to.equal('Number');
 });

////////////////////////////////////////////////////////////

 describe('Test Database-Prouduct-saved', function() {
     it('New Prouduct saved to test database', function(done) {
      var newProuduct = Test.Prouduct();
 
      newProuduct.save(function(err) {
        if (err) done(err);
        else done();
      })
    });

 });

 describe('selectAll from Prouduct schema', function() {
  it('respond with all records', function() {
  	var prouduct = Test.Prouduct.find();
    prouduct.exec({}, function(err) {
        if(err) {throw err;}
        done();
  });
});
});


});


