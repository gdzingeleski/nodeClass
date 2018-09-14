var express = require('express');
const router = require("express-promise-router")();
const customErrors = require('../custom-errors');
const Promise = require("bluebird");

module.exports = function({db}) {

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Student Manager' });
});

router.get('/login', function(req, res, next) {
  res.render('admin/login');
});

router.post('/login', (req, res, next) => {
  return Promise.try(() => {
      return db("users").where({
          username: req.body.username
        }).first();
      })
      .then((user) => {
            if (user == null) {
              throw new customErrors.AuthenticationError("Incorrect username");
            } 
            else if (req.body.password != user.password) {   //if make it here, then user exist in db
              console.log(`${req.body.password} != ${user.password}`);
              throw new customErrors.AuthenticationError("Incorrect password");   
            }
            else {
              req.session.userId = user.id;
              req.saveSession();
              console.log(`Saved the user session`);
              res.redirect("/");
            }
      })
});
return router;
}
