"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
    userid: { type: String, required: true },
    bookingid: { type: String, required: true },
    eventid: { type: String, required: true },
    hostid: { type: String, required: true },
});
var Relation = mongoose.model('Relation', schema);
exports.default = Relation;
//# sourceMappingURL=relation.js.map