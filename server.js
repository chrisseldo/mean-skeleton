// modules ==========================================
var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

// config ===========================================
    
// config files
var db = require('./config/db');

// set our port
var port = process.env.PORT || 3000; 

// need to uncomment when I enter credentials in config/db.js
// mongoose.connect(db.url); 

app.use(bodyParser.json()); 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(methodOverride('X-HTTP-Method-Override')); 
app.use(express.static(__dirname + '/public')); 

// routes ============================================
require('./app/routes')(app); // configure our routes

// start app =========================================
app.listen(port);               

// shoutout to the user                     
console.log('Magic happens on port ' + port);

// expose app           
exports = module.exports = app;   