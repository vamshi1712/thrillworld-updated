"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
    date: { type: String, required: true },
    numofadults: { type: Number, required: true },
    numofchilds: { type: Number, required: true },
    userid: { type: String, required: true },
    eventid: { type: String, required: true },
});
var Booking = mongoose.model('Booking', schema);
exports.default = Booking;
//# sourceMappingURL=booking.js.map