"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
    title: { type: String, required: true },
    phone: { type: String, required: true },
    type: { type: String, required: true },
    description: { type: String, required: true },
    mainimage: { type: String, required: false },
    images: { type: String, required: false },
    packages: { type: mongoose.Schema.Types, ref: 'Package' },
    datefrom: { type: String, required: true },
    dateto: { type: String, required: true },
    mempertent: { type: String, required: true },
    pricepernight: { type: String, required: true },
    numofdays: { type: Number, required: true },
    location: { type: String, required: true },
    pincode: { type: String, required: true },
    address: { type: String, required: true },
    hostid: { type: String, required: true },
    isPermittedByAdmin: { type: Boolean, required: true },
});
var Event = mongoose.model('Event', schema);
exports.default = Event;
//# sourceMappingURL=event.js.map