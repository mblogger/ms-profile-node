/*
* Main script for the application 
* Application is for displaying profile
* as an alternative to CV to keep information
* upto date!
*/

const express = require('express');
var app = express();
var profile = require('./controllers/profile');
// var router = express.Router();

// router.get('/', function (req, res) {
//    res.send('Welcome to home!'); 
// });

app.get('/', function (req, res) {
    res.send('Welcome to home!'); 
});

// define routes
app.use('/profile', profile);

app.listen(3000, function () {
    console.log(`Running on 3000`);
});
