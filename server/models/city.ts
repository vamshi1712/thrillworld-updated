

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    name: {type: String, required: true},
    
});



const City = mongoose.model('City', schema);

export default City;
