

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    title: {type: String, required: true},
    phone: {type: String, required: true},
    type: {type: String, required: true},
    description: {type: String, required: true},
    pkgname: {type: String, required: true},
    pkgincludes: {type: String, required: true},
    pkgpriceperadult: {type: Number, required: true},
    pkgpriceperchild: {type: Number, required: true},
    fromdate: {type: String, required: true},
    todate: {type: String, required: true},
    numofdays: {type:Number, required: true},
    textarea: {type: String, required: true},
    location: {type: String, required: true},
    pincode: {type: String, required: true},
    address: {type: String, required: true},
});



const Event = mongoose.model('Event', schema);

export default Event;
