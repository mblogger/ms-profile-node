const express = require('express');
var profile = express.Router();

profile.get('/access', function (req, res, next) {
   res.render('*/static/template/access');
    res.send('Access here!');
    next();
});

module.exports = profile