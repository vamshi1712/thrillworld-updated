"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
    comment: { type: String, required: true },
    cleanliness: { type: String, required: true },
    comfort: { type: String, required: true },
    location: { type: String, required: true },
    facilities: { type: String, required: true },
    staff: { type: String, required: true },
    valueformoney: { type: String, required: true },
    reviewedby: { type: String, required: true },
    reviewedon: { type: String, required: true },
});
var Review = mongoose.model('Review', schema);
exports.default = Review;
//# sourceMappingURL=review.js.map