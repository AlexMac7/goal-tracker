var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Goal = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    }
},{
    collection: 'goals'
});

module.exports = mongoose.model('Goal', Goal);
