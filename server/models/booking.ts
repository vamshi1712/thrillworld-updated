var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    date: {type: Date, required: true},
    numofadults: {type: Number, required: true},
    numofchilds: {type: Number, required: true},
    userid: {type: String, required: true},
    eventid: {type: String, required: true},
    
});



const Booking = mongoose.model('Booking', schema);

export default Booking;
