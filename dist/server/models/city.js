"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
    name: { type: String, required: true },
});
var City = mongoose.model('City', schema);
exports.default = City;
//# sourceMappingURL=city.js.map