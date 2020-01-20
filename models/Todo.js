var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var todoSchema = new Schema({
    todo: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('todo', todoSchema)