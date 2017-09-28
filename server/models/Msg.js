var mongoose = require('mongoose');

var MsgSchema = mongoose.Schema({
    SenderID:String,
    ReceiverID:String,
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
