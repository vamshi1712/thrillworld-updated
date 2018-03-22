import * as dotenv from 'dotenv';
import * as jwt from 'jsonwebtoken';

import Event from '../models/event';
import BaseCtrl from './base';

export default class EventCtrl extends BaseCtrl {
  model = Event;

}