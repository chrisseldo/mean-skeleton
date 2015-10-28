var mongoose = require('mongoose');

// define our book model
module.exports = mongoose.model('Book', {
    name : {type : String, default: ''}
});