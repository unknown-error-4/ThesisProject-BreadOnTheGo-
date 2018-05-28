var express = require('express');
var session =require('express-session');
var bodyParser = require('body-parser');
var handler =require('./handler');
var path = require('path');
var items = require('../database-mongo');
var morgan =require('morgan')
const parentModule = require('parent-module');
 var app = express();
// var multer  =   require('multer');
//to connect with react
app.use(express.static(__dirname + '/../react-client/dist'));

/////////////////////////////////////////////////////////////

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'))
////////////////////////////////////////////////////////////
// session ::
    // authinticate transzction between Server and client ..
    app.use(session({
     secret: 'any string of text',
     resave: true, //even if nothing changed in the files ,, gana save it again ..
     saveUninitialized: false // for the database
    }));
/////////////////////////////////////////////////////////////

app.post('/signupuser', handler.SignUpUser);
app.post('/signupbakery', handler.SignUpBakery);
app.post('/signin',handler.SignIn);
app.post("/products",handler.SavingProducts)
app.get("/profile",handler.retrieveOne)
app.get("/showProduct",handler.showProduct)
app.get("/showOne",handler.retrieveOneProduct)
app.get("/profiles",handler.retrieve)
app.put("/updateRating",handler.updateRating)
app.put("/updateImage",handler.updateImage)
// app.put("/upload",handler.upload)
// // app.get("/getImage",handler.getImage)
app.get('/showUser',handler.showUser)
app.get('/*', (req, res) => {
 res.sendFile(path.resolve(path.join(__dirname, '/../react-client/dist/index.html')));
});
/////////////////////////////
app.listen(3000, function() {
  console.log('listening on port 3000!');
});

/////////////////////////////////////////////////////////////
// const PORT = process.env.PORT || 3000
//
// if (!module.parent) {
//   app.listen(PORT, () => {
//     console.log(`The Port : ${PORT}`)
//   })
// }
// module.exports = app
