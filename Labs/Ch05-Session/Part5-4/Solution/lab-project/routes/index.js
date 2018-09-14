var express = require('express');
const router = require("express-promise-router")();
const customErrors = require('../custom-errors');
const Promise = require("bluebird");

const scryptForHumans = require("scrypt-for-humans");
const databaseError = require("database-error");

let duplicateUsername = {
  name: "UniqueConstraintViolationError",
  table: "users",
  column: "username"
}


module.exports = function ({ db }) {

  /* GET home page. */
  router.get('/', function (req, res, next) {
    res.render('index', { title: 'Student Manager' });
  });

  router.get('/login', function (req, res, next) {
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
        else {
					return Promise.try(() => {
            console.log(req.body);
            console.log(user);
            return scryptForHumans.verifyHash(req.body.password, user.hash);
					}).then((result) => {
						req.session.userId = user.id;
						return req.saveSession();
					}).then(() => {
						res.redirect("/");
					});
				}
			}).catch(scryptForHumans.PasswordError, (err) => {
				throw new errors.AuthenticationError("Incorrect password");
			});
		});

  
  router.get("/register", (req, res) => {
    res.render("admin/register");
  });

  router.post("/register", (req, res) => {
    return Promise.try(() => {
      return scryptForHumans.hash(req.body.password);
    }).then((hash) => {
      return db("users").insert({
        username: req.body.username,
        hash: hash
      }).returning("id");
    }).then((id) => {
      req.session.userId = id;
      return req.saveSession();
    }).then(() => {
      res.redirect("/");
    }).catch((pgerr) => {
      databaseError.rethrow(pgerr);
      }).catch(duplicateUsername, (err) => {
      throw new customErrors.ValidationError("Username already exists");
      });
  });






  return router;
}
