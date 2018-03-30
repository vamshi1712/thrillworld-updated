import * as dotenv from 'dotenv';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';
import Pass from '../models/pass';
import BaseCtrl from './base';

export default class PassCtrl extends BaseCtrl {
  model = Pass;




  updatePass = (req, res) => {
    this.model.findOneAndUpdate({ _id: req.params.id }, req.body, (err) => {
      if (err) { return console.error(err); }
      res.sendStatus(200);
    });
    }






}