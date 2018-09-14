const express = require("express");
const moment = require("moment");

let router = express.Router();

router.get("/", (req, res, next) => {
	req.message += '<br/>I was added by middleware in /router/index.js';
	next();
});

router.get("/", (req, res, next) => {
	res.send(req.message);
});

module.exports = router;
