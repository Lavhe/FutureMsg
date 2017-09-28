var express = require('express');
var router = express.Router();
var Fruit = require('../models/Fruit.js');

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
      res.json(json);
  });
});

router.get('/chats', function(req, res, next) {
  Fruit.find({}).select('name value -_id').sort({'value': -1}).limit(5).exec(function (err, fruits) {
    if (err) console.error("Cant find values of DB");
      // chart JSON data
      var jsons = {
          chart:[ {
              type: "pie",
              title: 'Top 5 Fruits',
              data: fruits,
              container: "container"
          }, {
              type: "save the sheep",
              title: 'Top 50 Fruits',
              data: fruits,
              container: "container"
          }]
      };
      res.json(jsons.chart[1].container);
  });
});

module.exports = router;
