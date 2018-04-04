import * as dotenv from 'dotenv';
import * as jwt from 'jsonwebtoken';

import Booking from '../models/booking';
import BaseCtrl from './base';

export default class BookingCtrl extends BaseCtrl {
  model = Booking;


  todayBookings = (req, res) => {
    this.model.findOne({ date: req.body.date }, (err, item) => {
      if (err) { return console.error(err); }
      res.status(200).json(item);
    });
  }

  getbyid = (req, res) => {
    this.model.find({ eventid : req.params.id  }, (err, docs) => {
      if (err) { return console.error(err); }
      res.status(200).json(docs);
    });
  }

}