var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    pkgname: {type: String, required: true},
    pkgincludes: {type: String, required: true},
    pkgpriceperadult : {type: String, required: true},
    pkgpriceperchild : {type: String, required: true},
    
});



const Package = mongoose.model('Package', schema);

export default Package;
