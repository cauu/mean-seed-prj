var express = require('express');
var router = express.Router();

var user = require('../models/user');

//add middlewares here 
//eg. router.use('/', require('../middlewares/auth.js'));

router.post('/register', function (req, res) {
    user.create(req.body.tel, 
        req.body.hashed_password, 
        function (err, user) {
            if (err) {
              //TODO: return err
              res.json(err);
            }
            else {
              res.json(user);
            }
        });
});

router.get('/login', function (req, res) {
    user.authenticate(req.query.tel, 
        req.query.hashed_password, 
        function (err, user) {
            if (err) {
                //TODO: return err
                res.json(err);
            }
            else {
               res.json(user);
            }
        });
});

module.exports = router;
