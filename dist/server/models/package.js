"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
    pkgname: { type: String, required: true },
    pkgincludes: { type: String, required: true },
    pkgpriceperadult: { type: String, required: true },
    pkgpriceperchild: { type: String, required: true },
});
var Package = mongoose.model('Package', schema);
exports.default = Package;
//# sourceMappingURL=package.js.map