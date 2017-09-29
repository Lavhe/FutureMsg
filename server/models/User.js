var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    Avator:String,
    Name:String,
    Numbers: String,
    isUser:Number,
    JoinDateTime: Date
});

module.exports = mongoose.model("User", UserSchema);
