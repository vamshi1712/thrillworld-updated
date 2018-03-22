import * as dotenv from 'dotenv';
import * as jwt from 'jsonwebtoken';

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
        res.status(200).json({ token: token });
      });
    });
  }

}