var express = require('express');
var session =require('express-session');
var bodyParser = require('body-parser');
var handler =require('./handler');
var path = require('path');
var items = require('../database-mongo');

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
app.post('/signup', handler.SignUp);
app.post('/signin',handler.SignIn);
app.post("/prouducts",handler.SavingProducts)
app.get("/profile",handler.retrieveOne) 
app.get("/showProduct",handler.showProduct)
app.get("/showOne",handler.retrieveOneProduct)
app.get("/profiles",handler.retrieve)
app.get('/*', (req, res) => {
 res.sendFile(path.resolve(path.join(__dirname, '/../react-client/dist/index.html')));
});
//////////////
app.listen(3000, function() {
  console.log('listening on port 3000!');
});
