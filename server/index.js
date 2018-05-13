var express = require('express');
var session =require('express-session');
var bodyParser = require('body-parser');
var handler =require('./handler');
var path = require('path');
var items = require('../database-mongo');

var app = express();
//to connect with react
app.use(express.static(__dirname + '/../react-client/dist'));

app.get('*', (req, res) => {
 res.sendFile(path.resolve(path.join(__dirname, '/../react-client/dist/index.html')));
});


//this is  work
var saltRounds = 10;
/////////////////////////////////////////////////////////////

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
/////////////////////////////////////////////////////////////

// session ::
    // authinticate transzction between Server and client ..
    app.use(session({
        secret: 'any string of text',
     resave: true, //even if nothing changed in the files ,, gana save it again ..
     saveUninitialized: false // for the database
    }));
/////////////////////////////////////////////////////////////
app.post('/signup', handler.SignUp);

app.get('/signup', handler.SignUp);
app.post('/signup',handler.saveUser)














/////////////////////////////////////////////////////////////
app.listen(3000, function() {
  console.log('listening on port 3000!');
});
