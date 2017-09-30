var mongoose = require('mongoose');

var ChatListSchema = mongoose.Schema({
    SenderID:String,
    Receiver:{
      Name:String,
      Avatar:String
    },
    LastMsg:{
      Msg:String,
      PostedDateTime:Date
    },
    Read:Boolean
});

module.exports = mongoose.model("ChatList", ChatListSchema);
