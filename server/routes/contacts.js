var express = require('express');
var router = express.Router();
var User = require('../models/Msg.js');

/* GET page. */
router.get('/contacts/getAll', function(req, res, next) {
  User.find({}).exec(function (err, users) {
    if (err) console.error("Unable to read users from the database.");

    res.json(users);
  });
});

router.get('/contacts/AddContact',function(req,res,next){
  if (err) console.error("Unable to read users from the database.");
  
});

module.exports = router;
