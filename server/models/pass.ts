var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');
import * as bcrypt from 'bcryptjs';

var schema = new Schema({
    
    password: {type: String, required: true}
    
});

schema.plugin(mongooseUniqueValidator);

// Before saving the user, hash the password
schema.pre('save', function(next) {
  const host = this;
  if (!host.isModified('password')) { return next(); }
  bcrypt.genSalt(10, function(err, salt) {
    if (err) { return next(err); }
    bcrypt.hash(host.password, salt, function(error, hash) {
      if (error) { return next(error); }
      host.password = hash;
      next();
    });
  });
});


schema.pre('findOneAndUpdate', function(next) {
  const host = this;
  
  bcrypt.genSalt(10, function(err, salt) {
    if (err) { return next(err); }
    bcrypt.hash(host.password, salt, function(error, hash) {
      if (error) { return next(error); }
      host.password = hash;
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

const Pass = mongoose.model('Pass', schema);

export default Pass;