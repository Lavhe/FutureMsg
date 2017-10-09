var mongoose = require('mongoose');

var ChatListSchema = mongoose.Schema({
    Sender:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    Receiver:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    Chat:[
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Msg'
      }
    ],
    Read:Boolean
});

module.exports = mongoose.model("ChatList", ChatListSchema);
