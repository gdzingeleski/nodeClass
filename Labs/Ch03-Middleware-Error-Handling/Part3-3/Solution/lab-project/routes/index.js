//var express = require('express');
//var router = express.Router();
var expressPromiseRouter = require("express-promise-router");
var router = expressPromiseRouter();
const customErrors = require('../custom-errors');

const Promise = require("bluebird");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Student Manager' });
});


module.exports = router;
