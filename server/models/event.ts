

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

import Package from './package';

var schema = new Schema({
    title: {type: String, required: true},
    phone: {type: String, required: true},
    type: {type: String, required: true},
    description: {type: String, required: true},
    images: {type: String, required: false},
    packages : {type: mongoose.Schema.Types, ref: 'Package'},
    fromdate: {type: String, required: true},
    todate: {type: String, required: true},
    numofdays: {type:Number, required: true},
    textarea: {type: String, required: true},
    location: {type: String, required: true},
    pincode: {type: String, required: true},
    address: {type: String, required: true},
    hostid: {type: String, required: true},
    isPermittedByAdmin : {type: Boolean, required: true},
});



const Event = mongoose.model('Event', schema);

export default Event;
