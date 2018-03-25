import * as dotenv from 'dotenv';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';
import User from '../models/user';
import BaseCtrl from './base';

export default class UserCtrl extends BaseCtrl {
  model = User;

  login = (req, res) => {
    this.model.findOne({ email: req.body.email }, (err, user) => {
      if (!user) { return res.sendStatus(403); }
      user.comparePassword(req.body.password, (error, isMatch) => {
        if (!isMatch) { return res.sendStatus(403); }
        const token = jwt.sign({ user: user }, process.env.SECRET_TOKEN); // , { expiresIn: 10 } seconds
        res.status(200).json({
          success:true,
          message: 'Successfully logged in',
          token: token,
          userId: user._id
       });
      });
    });
  }


  updateProfile = (req, res) => {
    
      this.model.findOneAndUpdate({ _id: req.params.id }, req.body, (err) => {
        if (err) { return console.error(err); }
        res.sendStatus(200);
      });
    
    }
  
    updatePass = (req, res) => {
       var user = new User({
        email: req.body.password
    });
    bcrypt.genSalt(10, function(err, salt) {
      if (err) { return console.error(err); }
      bcrypt.hash(user.password, salt, function(error, hash) {
        if (error) { return console.error(err); }
        user.password = hash;
      }); 
    });
    this.model.findOneAndUpdate({ _id: req.params.id }, user, (err) => {
      if (err) { return console.error(err); }
      res.sendStatus(200);
    });
     
     
     
      // bcrypt.genSalt(10, function(err,req, salt) {
      //   if (err) { return console.error(err); }
      //   bcrypt.hash(req.body.password, salt, function(error, hash) {
      //     if (error) { return console.error(err); }
      //     req.body.password = hash;
      //   });
      //   this.model.findOneAndUpdate({ _id: req.params.id }, req.body, (err) => {
      //     if (err) { return console.error(err); }
      //     res.sendStatus(200);
      //   });
      // });
      
    
    }
}