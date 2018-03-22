import * as dotenv from 'dotenv';
import * as jwt from 'jsonwebtoken';

import Host from '../models/host';
import BaseCtrl from './base';

export default class HostCtrl extends BaseCtrl {
  model = Host;

  login = (req, res) => {
    this.model.findOne({ email: req.body.email }, (err, host) => {
      if (!host) { return res.sendStatus(403); }
      host.comparePassword(req.body.password, (error, isMatch) => {
        if (!isMatch) { return res.sendStatus(403); }
        const token = jwt.sign({ host: host }, process.env.SECRET_TOKEN); // , { expiresIn: 10 } seconds
        res.status(200).json({ token: token });
      });
    });
  }

}