var express = require('express');
var router = express.Router();
let hobbies=["astronomy","woodworking"];
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a hobby resource '+hobbies);
});

module.exports = router;