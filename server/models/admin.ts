var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');
import * as bcrypt from 'bcryptjs';

var schema = new Schema({
    fullname: {type: String, required: true},
    password: {type: String, required: true},
    phone: {type: String, required: true},
    isAdmin: {type: Boolean, required: true},
    email: {type: String, required: true, unique: true},
});

schema.plugin(mongooseUniqueValidator);

// Before saving the user, hash the password
schema.pre('save', function(next) {
  const admin = this;
  if (!admin.isModified('password')) { return next(); }
  bcrypt.genSalt(10, function(err, salt) {
    if (err) { return next(err); }
    bcrypt.hash(admin.password, salt, function(error, hash) {
      if (error) { return next(error); }
      admin.password = hash;
      next();
    });
  });
});

schema.methods.comparePassword = function(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) { return callback(err); }
    callback(null, isMatch);
  });
};

// Omit the password when returning a user
schema.set('toJSON', {
  transform: function(doc, ret, options) {
    delete ret.password;
    return ret;
  }
});

const Admin = mongoose.model('Admin', schema);

export default Admin;