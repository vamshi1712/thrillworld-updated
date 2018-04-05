"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');
var bcrypt = require("bcryptjs");
var schema = new Schema({
    fullname: { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    location: { type: String, required: true },
    pincode: { type: String, required: true },
    isUser: { type: Boolean, required: true },
    isHost: { type: Boolean, required: true },
    email: { type: String, required: true, unique: true },
});
schema.plugin(mongooseUniqueValidator);
// Before saving the user, hash the password
schema.pre('save', function (next) {
    var host = this;
    if (!host.isModified('password')) {
        return next();
    }
    bcrypt.genSalt(10, function (err, salt) {
        if (err) {
            return next(err);
        }
        bcrypt.hash(host.password, salt, function (error, hash) {
            if (error) {
                return next(error);
            }
            host.password = hash;
            next();
        });
    });
});
schema.pre('findOneAndUpdate', function (next) {
    var host = this;
    bcrypt.genSalt(10, function (err, salt) {
        if (err) {
            return next(err);
        }
        bcrypt.hash(host.password, salt, function (error, hash) {
            if (error) {
                return next(error);
            }
            host.password = hash;
            next();
        });
    });
});
schema.methods.comparePassword = function (candidatePassword, callback) {
    bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
        if (err) {
            return callback(err);
        }
        callback(null, isMatch);
    });
};
// Omit the password when returning a user
schema.set('toJSON', {
    transform: function (doc, ret, options) {
        delete ret.password;
        return ret;
    }
});
var Host = mongoose.model('Host', schema);
exports.default = Host;
//# sourceMappingURL=host.js.map