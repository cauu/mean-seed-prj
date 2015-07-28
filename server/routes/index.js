'use strict'

var express = require('express');
var router = express.Router();
var oauth = require('../middlewares/auth');

var route = function (app) {
    app.use('/api/v1', router);

    router.use('/user', require('./user'));
}

module.exports = route;
