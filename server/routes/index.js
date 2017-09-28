var express = require('express');
var router = express.Router();
var User = require('../models/User');
var Msg = require('../models/Msg');

/* GET page. */
router.get('/', function(req, res, next) {
  Msg.find({}).exec(function (err, msgs) {
    if (err){
      res.json({"error":"Cant find MSGS of DB"});
    }else{
      res.json(msgs);
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
        Sender:senderID,
        Receiver:receiverID,
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
          res.json({"answer":"Message sent successfully!"});
        }
      });

    }
  });
});


/* Contact routes*/

router.get('/contacts/getAll', function(req, res, next) {
  User.find({}).exec(function (err, users) {
    if (err){
      res.json({"error":err});
    }else{
      res.json(users);
    }
  });
});

router.get('/contacts/CreateContact',function(req,res,next){
  var user = new User({
      Name:req.name,
      Numbers: req.number,
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
