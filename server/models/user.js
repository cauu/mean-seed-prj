'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    local: {
        tel: { type: String, unique: true },
        hashed_password: { type: String, require: true },
        is_super_admin: { type: Boolean, default: false },  
        created_at: { type: Date, default: Date.now }, 
        username: { type:String, default: '', require: false },
        gender: { type: Number, default: 0 },
        selfie: { type: String, default: '' }
    }
});

var user = mongoose.model('User', UserSchema);

var create = function (tel, hashed_password, cb) {
    user.create ({
        'local.tel': tel,
        'local.hashed_password': hashed_password
    }, function (err, result){
            if (err) return cb(err);
            cb(null, result);
    });
}

var authenticate = function (tel, hashed_password, cb) {
    user.find({
        'local.tel': tel
    }, function (err, result) {
        if (err) return cb(err);     
        
        var _user = result[0];

        if (!_user) {
            cb();
        }
        else if(_user.local.hashed_password == hashed_password) {
           cb(null, _user);
        }
        else{
            var err = 'Password is wrong';
            cb(err);
        }
    });
}

var getByTel = function (tel, cb) {
    user.find({
        'local.tel': tel
    }, function (err, result) {
        if (err) return cb(err);

        cb(null, result[0]);
    });
}

var changePassword = function (tel, hashed_password, cb) {
    var condition = { 'local.tel': tel };
    var update = {$set: { 'local.hashed_password': hashed_password } };
    var options = {};
    user.update(condition, update, options, function (err) {
       if (err) return cb(err); 
       cb(null);
    });
}

exports.create = create;
exports.authenticate = authenticate;
exports.getByTel = getByTel;
exports.changePassword = changePassword;

