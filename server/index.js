var express = require('express');
var session =require('express-session');
var bodyParser = require('body-parser');
var handler =require('./handler');
var path = require('path');
var items = require('../database-mongo');
const parentModule = require('parent-module');
var app = express();
//to connect with react
app.use(express.static(__dirname + '/../react-client/dist'));

/////////////////////////////////////////////////////////////

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
////////////////////////////////////////////////////////////
// session ::
    // authinticate transzction between Server and client ..
    app.use(session({
        secret: 'any string of text',
     resave: true, //even if nothing changed in the files ,, gana save it again ..
     saveUninitialized: false // for the database
    }));
/////////////////////////////////////////////////////////////
app.post('/signup', function(req, res){
 handler.SignUp
});
app.post('/signin',  function(req, res){
	handler.SignIn;
});
app.post("/prouducts",  function(req, res){
	handler.SavingProducts;
})
app.get("/profile",  function(req, res){
	handler.retrieveOne;
})
app.get("/showProduct",  function(req, res){
	handler.showProduct;
})
app.get("/showOne",  function(req, res){
	handler.retrieveOneProduct;
})
app.get("/profiles",  function(req, res){handler.retrieve;
})
app.get('/',  function(req, res){
	handler.signout;
})
app.get('/*', (req, res) => {
 res.sendFile(path.resolve(path.join(__dirname, '/../react-client/dist/index.html')));
});

/////////////////////////////////////////////////////////////
const PORT = process.env.PORT || 3000

if (!module.parent) {
  app.listen(PORT, () => {
    console.log(`The Port : ${PORT}`)
  })
}
module.exports = app
