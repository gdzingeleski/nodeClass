var express = require('express');
var router = express.Router();
var moment = require('moment');


/* GET users listing. */
router.get('/', function(req, res, next) {
 // res.send('Students will go in here');
    res.render('students', { 
     title: 'Students' ,
     students: ['Uma','Tucker','Seema','Saroj','Rathna','Ella','Paul']
        
    });
});

module.exports = router;