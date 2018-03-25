import * as dotenv from 'dotenv';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';
import Host from '../models/host';
import BaseCtrl from './base';

export default class HostCtrl extends BaseCtrl {
  model = Host;

  login = (req, res) => {
      var host = new Host({
      email: req.body.email,
      password: req.body.password
  });
    this.model.findOne({ email: req.body.email }, (err, host) => {
      if (!host) { return res.sendStatus(403); }
      host.comparePassword(req.body.password, (error, isMatch) => {
        if (!isMatch) { return res.sendStatus(403); }
        const token = jwt.sign({ host: host }, process.env.SECRET_TOKEN); // , { expiresIn: 10 } seconds
        res.status(200).json({
          success:true,
          message: 'Successfully logged in',
          token: token,
          hostId: host._id
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
     var host = new Host({
      email: req.body.password
  });
  bcrypt.genSalt(10, function(err, salt) {
    if (err) { return console.error(err); }
    bcrypt.hash(host.password, salt, function(error, hash) {
      if (error) { return console.error(err); }
      host.password = hash;
    }); 
  });
  this.model.findOneAndUpdate({ _id: req.params.id }, host, (err) => {
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
