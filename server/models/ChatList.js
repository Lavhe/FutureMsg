var mongoose = require('mongoose');

var ChatListSchema = mongoose.Schema({
    SenderID:String,
    ReceiverID:String,
    LastMsgID: String
});

module.exports = mongoose.model("ChatList", ChatListSchema);
