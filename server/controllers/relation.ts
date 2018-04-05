import * as dotenv from 'dotenv';
import * as jwt from 'jsonwebtoken';

import Relation from '../models/relation';
import BaseCtrl from './base';

export default class RelationCtrl extends BaseCtrl {
  model = Relation;

  getbyid = (req, res) => {
    this.model.find({ hostid : req.params.id  }, (err, docs) => {
      if (err) { return console.error(err); }
      res.status(200).json(docs);
    });
  }

}