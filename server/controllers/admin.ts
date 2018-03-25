import * as dotenv from 'dotenv';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';
import Admin from '../models/admin';
import BaseCtrl from './base';

export default class AdminCtrl extends BaseCtrl {
  model = Admin;

  login = (req, res) => {
    this.model.findOne({ email: req.body.email }, (err, admin) => {
      if (!admin) { return res.sendStatus(403); }
      admin.comparePassword(req.body.password, (error, isMatch) => {
        if (!isMatch) { return res.sendStatus(403); }
        const token = jwt.sign({ admin: admin }, process.env.SECRET_TOKEN); // , { expiresIn: 10 } seconds
        res.status(200).json({
          success:true,
          message: 'Successfully logged in',
          token: token,
          adminId: admin._id
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
       var admin = new Admin({
        email: req.body.password
    });
    bcrypt.genSalt(10, function(err, salt) {
      if (err) { return console.error(err); }
      bcrypt.hash(admin.password, salt, function(error, hash) {
        if (error) { return console.error(err); }
        admin.password = hash;
      }); 
    });
    this.model.findOneAndUpdate({ _id: req.params.id }, admin, (err) => {
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