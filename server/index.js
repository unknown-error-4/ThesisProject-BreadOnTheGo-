var express = require('express')
var session = require('express-session')
var bodyParser = require('body-parser')
var handler = require('./handler')
var path = require('path')
var items = require('../database-mongo')
var morgan = require('morgan')
const parentModule = require('parent-module')
var app = express()
// var multer  =   require('multer');
// to connect with react
app.use(express.static(__dirname + '/../react-client/dist'))

/// //////////////////////////////////////////////////////////

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('dev'))
/// /////////////////////////////////////////////////////////
// session ::
// authinticate transzction between Server and client ..
app.use(session({
  secret: 'any string of text',
  resave: true, // even if nothing changed in the files ,, gana save it again ..
  saveUninitialized: false // for the database
}))
/// //////////////////////////////////////////////////////////

// it should be the same in the ajax call
app.post('/alo',handler.payment)
app.get('/alo',handler.payment)
app.post('/signupuser', handler.SignUpUser)
app.post('/signupbakery', handler.SignUpBakery)
app.post('/signin', handler.SignIn)
app.post('/signinb', handler.SignInB)
app.post('/products', handler.SavingProducts)
app.get('/Profile', handler.retrieveOne)
app.get('/ProfileB', handler.retrieveOneBakery)
app.get('/showProduct', handler.showProduct)
app.get('/showOne', handler.retrieveOneProduct)

app.get('/profiles', handler.retrieve)
app.post('/orders', handler.SavingOrders)
app.get('/orders', handler.retrieveOneC)

app.post('/upload', handler.upload)
app.put('/updateRating', handler.updateRating)
app.put('/updateImage', handler.updateImage)
app.put('/upload', handler.upload)
app.get('/getImage', handler.getImage)
app.get('/showUser', handler.showUser)

app.post('/home', handler.distancebetweenBAndC)
app.get('/logout', handler.logout)
app.post('/upload', handler.upload)
app.get('/upload', handler.getImage)
app.get('/upload', handler.updateImage)

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(path.join(__dirname, '/../react-client/dist/index.html')))
})
/// //////////////////////////
app.listen(3000, function () {
  console.log('listening on port 3000!')
})

/// //////////////////////////////////////////////////////////
// const PORT = process.env.PORT || 3000
//
// if (!module.parent) {
//   app.listen(PORT, () => {
//     console.log(`The Port : ${PORT}`)
//   })
// }
// module.exports = app
