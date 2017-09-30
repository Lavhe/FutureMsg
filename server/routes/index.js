var express = require('express');
var router = express.Router();
var User = require('../models/User');
var Msg = require('../models/Msg');
var Chat = require('../models/ChatList');

/* GET page. */
router.get('/', function(req, res, next) {
  Msg.find({}).exec(function (err, msgs) {
    if (err){
      res.json({"error":"Cant find MSGS of DB"});
    }else{
      User.find({}).exec(function(err,users){
        if (err){
          res.json({"error":"Cant find Users of DB"});
        }else{
          Chat.find({}).exec(function(err,chats){
            if (err){
              res.json({"error":"Cant find Chats of DB"});
            }else{
              res.json({"msgs":msgs,"users":users,"chats":chats});
            }
          });
        }
      });
    }
  });
});

router.post('/getUserID',function(req,res,next){
    var contact = req.body.number;
    User.find({Numbers:contact}).limit(1).exec(function (err,users) {
      if (err || !users){
        if(!users){
          res.json({"error":contact + " is not found."});
        }else{
          res.json({"error":err});
        }
      }else{
        res.json({"userID":users[0]._id});
      }
    });
});

router.get('/addChats',function(req,res,next){
  console.warn("We are in");
  var _chat = new Chat({
    SenderID:"yutytzsdzfxyyguio",
    Receiver:{
      Name:"The best"
    },
    LastMsg:{
      Msg:"This is a test message",
      PostedDateTime:Date.now()
    },
    Read:true
  });

  _chat.save(function(err){
    if (err){
      res.json({"error":err});
    }else{
      res.json({"answer":"Added the chatList"});
    }
  });
});

router.post('/getChats',function(req,res,next){
  //var senderID = req.body.senderID;
  Chat.find({}).exec(function (err, chats) {
    if (err){
      res.json({"error":"Cant find chats of DB"});
    }else{
      res.json(chats);
    }
  });
});

router.post('/sendText',function(req,res,next){
  var msg = req.body.msg;
  var senderID = req.body.senderID;
  var receiverID = req.body.receiverID;

  User.find({
    "_id" :{
      $in : [senderID,receiverID]
    }}).limit(2).exec(function (err, users) {

      if (err || users.length != 2){
        if(err) res.json({"error":err});
        else res.json({"error":"The Receiver can not be found."});
      }else{

        var answer = new Msg({
          SenderID: senderID,
          ReceiverID: receiverID,
          Title:"",
          Msg: msg,
          MsgType:0,
          SentDateTime: Date.now(),
          ReadDateTime:null,
          DueDateTime:null,
          DeliveryStatus: "sent",
          ReadStatus:"received"
        });

        answer.save(function(err) {
          if (err){
            res.json({"error":err});
          }else{
            Msg.find({}).exec(function (err, msgs) {
              if (err){
                res.json({"error":"Cant find MSGS of DB"});
              }else{
                res.json(msgs);
              }
            });
          }
        });

      }
    });
  });


  /* Contact routes*/

  router.get('/contacts/getAll', function(req, res, next) {
    //var userID = req.body.userID;
    //TODO : Go to this guy's phone book and take contacts
    console.warn("I am warning you....");
    User.find().exec(function (err, users) {
      if (err){
        res.json({"error":err});
      }else{
        res.json(users);
      }
    });
  });

  router.get('/contacts/CreateContact',function(req,res,next){
    console.warn(req);
    var user = new User({
      Name:req.query.name,
      Numbers: req.query.number,
      isUser:false,
      JoinDateTime: Date.now()
    });

    user.save(function(err) {
      if (err){
        res.json({"error":err});
      }else{
        res.json({"answer":"User saved!"});
      }
    });

  });


  module.exports = router;
