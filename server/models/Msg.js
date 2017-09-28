var mongoose = require('mongoose');

var MsgSchema = mongoose.Schema({
    text: String,
    date: Date
});

module.exports = mongoose.model("Msg", MsgSchema);
