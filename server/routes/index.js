'use strict'

var express = require('express');
var router = express.Router();

var route = function (app) {
    app.use('/api', router);

    router.use('/user', require('./user'));

    router.route('/')
        .get(function (req, res) {
            console.log('api router is starting');
            res.json('bye');
        });
}

module.exports = route;
