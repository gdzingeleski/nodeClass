var express = require('express');
var router = express.Router();



router.get('/sendnull', function (req, res) {
  res.json(null);
});

router.get('/sendname', function (req, res) {
  res.json({ name: 'Cody' });
});

const myArray = [1,2,3,4];
router.get('/sendarray', function (req, res) {
  res.json(myArray);
});

const myPet = {name:'birdy', type:'cat'};
router.get('/sendpet', function (req, res) {
  res.json(myPet);
});

router.get('/senderror', function (req, res) {
  res.status(500).json({ error: 'message' });
});


module.exports = router;
