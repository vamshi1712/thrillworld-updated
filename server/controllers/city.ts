import * as dotenv from 'dotenv';
import * as jwt from 'jsonwebtoken';

import City from '../models/city';
import BaseCtrl from './base';

export default class CityCtrl extends BaseCtrl {
  model = City;

}