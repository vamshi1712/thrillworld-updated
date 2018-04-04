import * as dotenv from 'dotenv';
import * as jwt from 'jsonwebtoken';

import Event from '../models/event';
import BaseCtrl from './base';

export default class EventCtrl extends BaseCtrl {
  model = Event;

  getPermitted = (req, res) => {
    this.model.find({ isPermittedByAdmin : true }, (err, docs) => {
      if (err) { return console.error(err); }
      res.status(200).json(docs);
    });
  }

  getEventsofHost = (req, res) => {
    this.model.find({ hostid : req.params.id  }, (err, docs) => {
      if (err) { return console.error(err); }
      res.status(200).json(docs);
    });
  }

  permitevent = (req, res) => {
    this.model.findOneAndUpdate({ _id: req.params.id }, req.body, (err) => {
      if (err) { return console.error(err); }
      res.sendStatus(200);
    });
    }

  getNonPermitted = (req, res) => {
    this.model.find({ isPermittedByAdmin : false }, (err, docs) => {
      if (err) { return console.error(err); }
      res.status(200).json(docs);
    });
  }

  getLocation = (req, res) => {
    this.model.find({ location : req.params.location }, (err, docs) => {
      if (err) { return console.error(err); }
      res.status(200).json(docs);
    });
  }
  getTitle = (req, res) => {
    this.model.find({ title : req.params.title }, (err, docs) => {
      if (err) { return console.error(err); }
      res.status(200).json(docs);
    });
  }
  getType = (req, res) => {
    this.model.find({ type : req.params.type }, (err, docs) => {
      if (err) { return console.error(err); }
      res.status(200).json(docs);
    });
  }

}