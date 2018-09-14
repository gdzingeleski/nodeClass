'use strict';

const Promise = require("bluebird");
const knex = require("knex");
let db = knex(require("./knexfile"));

Promise.try(() => {
	return db("people");
}).then((people) => {
	console.log("All the people:", people);
}).finally(() => {
	db.destroy();
});
