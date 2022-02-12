/*
* Main script for the application 
* Application is for displaying profile
* as an alternative to CV to keep information
* upto date!
*/

// External imports
const express = require('express');
const { engine } = require('express-handlebars');

// Internal imports
var profile = require('./controllers/profile');

var app = express();
app.engine('.hbs', engine(
    {
        extname: '.hbs',
        defaultLayout: 'main',
        layoutsDir: __dirname + '/views/layouts'
    }
));
app.set('view engine', '.hbs');
app.set('views', './views');

app.use('/static', express.static(__dirname + '/views/assets'));

// welcome home
app.get('/', function (req, res) {
    res.send('Welcome to home!'); 
});

// define routes
app.use('/profile', profile);

app.listen(3000, function () {
    console.log(`Running on 3000`);
});
