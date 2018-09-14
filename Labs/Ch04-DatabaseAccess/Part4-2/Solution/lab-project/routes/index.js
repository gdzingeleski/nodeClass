var express = require('express');
//var router = express.Router();
var expressPromiseRouter = require("express-promise-router");
var router = expressPromiseRouter();
const customErrors = require('../custom-errors');

const Promise = require("bluebird");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Student Manager' });
});

router.get('/login', function(req, res, next) {
  res.render('admin/login');
});

router.post('/login', (req, res, next) => {
  return Promise.try(() => {
    if (req.body.password === "secret") {
      return Promise.try(() => {
       // return: go ahead and setup the user sessions
      }).then(() => {
        res.redirect("/students");
      });
    } else {
      throw new customErrors.AuthenticationError("Incorrect password");
    }
  });
});  

module.exports = router;
