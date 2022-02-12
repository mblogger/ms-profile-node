const express = require('express');
var profile = express.Router();

profile.get('/home', function (req, res, next) {
   res.render('home');
});

profile.get('/access', function (req, res, next) {
   res.render('access');
});

module.exports = profile