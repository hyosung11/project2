// DEPENDENCIES
const express = require('express')
const mongoose = require ('mongoose')
const app = express()
const db = mongoose.connection
// MIDDLEWARE
// include the method-override package
const methodOverride  = require('method-override')
//use public folder for static assets
app.use(express.static('public'))
// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: false }))// extended: false - does not allow nested objects in query strings
app.use(express.json());// returns middleware that only parses JSON - may or may not need it depending on your project.
//use method override
app.use(methodOverride('_method'));// allow POST, PUT and DELETE from a form

// connect to the movements controller
const movementsController = require('./controllers/movements.js')
app.use('/movements', movementsController)

// PORT
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3000

// DATABASE
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI

// Fix Depreciation Warnings from Mongoose*
// May or may not need these depending on your Mongoose version
mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)

// Connect to Mongo
mongoose.connect(MONGODB_URI , { useNewUrlParser: true})
mongoose.connection.once('open', () => {
  console.log('connected to Pineapple')
})

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'))
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI))
db.on('disconnected', () => console.log('mongo disconnected'))


// ROUTES => controllers
//localhost:3000
app.get('/' , (req, res) => {
  res.send('luminous minds working together')
});

// LISTENER
app.listen(PORT, () => console.log( 'Listening and ready on port:', PORT))
