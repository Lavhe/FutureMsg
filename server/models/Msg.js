var mongoose = require('mongoose');

var MsgSchema = mongoose.Schema({
    Sender:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    Receiver:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
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
