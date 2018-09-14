const expressPromiseRouter = require("express-promise-router");

const router = expressPromiseRouter();
//const customErrors = require('../custom-errors');
const Promise = require("bluebird");

const moment = require('moment');

let students = [{
	nameFirst: "Devin",
	nameLast: "Durgan",
	email: "Devin.Durgan@gmail.com",
	hireDate: moment("01/19/2015", "MM/DD/YYYY")
}, {
	nameFirst: "Cristal",
	nameLast: "Adams",
	email: "Cristal.Adams@live.com",
	hireDate: moment("07/29/2016", "MM/DD/YYYY")
}, {
	nameFirst: "Nettie",
	nameLast: "McGlynn",
	email: "Nettie.McGlynn@gmail.com",
	hireDate: moment("08/29/2015", "MM/DD/YYYY")
}];



/* GET users listing. */
router.get('/', function(req, res, next) {
 // res.send('Students will go in here');
    res.render('students', { 
     title: 'Students' ,
     students: students  
    });
});

module.exports = router;