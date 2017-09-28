var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    Name:String,
    Numbers: String,
    isUser:Number,
    JoinDateTime: Date
});

var MsgSchema = mongoose.Schema({
    Sender:UserSchema,
    Receiver:UserSchema,
    Title:String,
    Msg: String,
    MsgType:Number,
    SentDateTime: Date,
    ReadDateTime: Date,
    DueDateTime:Date,
    DeliveryStatus: String,
    ReadStatus:String
});

module.exports = mongoose.model("Msg", MsgSchema);
module.exports = mongoose.model("User", UserSchema);
