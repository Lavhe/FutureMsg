var express = require('express');
var router = express.Router();
var Fruit = require('../models/Fruit.js');
var Msg = require('../models/Msg');

/* GET page. */
router.get('/', function(req, res, next) {
  Fruit.find({}).select('name value -_id').sort({'value': -1}).limit(5).exec(function (err, fruits) {
    if (err) console.error("Cant find values of DB");
    // chart JSON data
    var json = {
      chart: {
        type: "pie",
        title: 'Top 5 Fruits',
        data: fruits,
        container: "container"
      }
    };
    res.json(fruits);
  });
});

router.get('/add',function(req,res,next){

  Msg.find({}).select('text').sort({'text': -1}).limit(5).exec(function (err, msgs) {
    if (err) console.error("Cant find values of DB");

    res.json(msgs);
  });
});

router.get('/chats', function(req, res, next) {
  console.log("Adding ");

  var answer = new Msg({
    "text":"Food is Munandiiiiii",
    "date":Date.now()
  });

  answer.save(function(err) {
    if (err) throw err;

    console.log('User saved successfully!');

    res.json({"name":"joe"});
  });
});

module.exports = router;
