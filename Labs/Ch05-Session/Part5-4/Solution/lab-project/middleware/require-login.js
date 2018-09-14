'use strict';

const errors = require("../custom-errors");

module.exports = function(req, res, next) {
	if (req.user != null) {
		next();
	} else {
		res.redirect('/login');
	}
};
