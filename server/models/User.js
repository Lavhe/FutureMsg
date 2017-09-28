var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    Name:String,
    Numbers: String,
    isUser:Number,
    JoinDateTime: Date
});

module.exports = mongoose.model("User", UserSchema);
