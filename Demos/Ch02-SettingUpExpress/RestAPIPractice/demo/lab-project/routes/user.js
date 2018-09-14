var express = require('express');
var router = express.Router();

const users = [
  {
    id: 1, name: 'Sam', age: 32,
    interests:
      [{ id: 1, interest: 'baseball' },
      { id: 2, interest: 'golf' }
      ]
  },
  {
    id: 2, name: 'Bob', age: 10,
    interests: [{ id: 1, interest: 'cars' },
    { id: 2, interest: 'trucks' }
    ]
  },
  { id: 3, name: 'Jay', age: 22, interests: [{ id: 1, interest: 'beer' }, { id: 2, interest: 'frisbee' }] },
  {
    id: 4, name: 'Anil', age: 14,
    interests: [{ id: 1, interest: 'science' },
    { id: 2, interest: 'games' }
    ]
  },
  { id: 5, name: 'Sasha', age: 55, interests: [{ id: 1, interest: 'movies' }, { id: 2, interest: 'travel' }] },
  { id: 6, name: 'John', age: 96, interests: [{ id: 1, interest: 'Alaska' }, { id: 2, interest: 'beer' }] }

];

// ******* GET  *********

router.get('/user/', function (req, res) {
  //all users
  res.send(users);
});


//this is pulled from the route parameter 
router.param('id', function (req, res, next, id) {
  //set a user object on req
  req.user = users.find((e) => {return e.id == id});
  next();  //pass to the next matching middleware
});

router.get('/user/:id', function (req, res, next) {
  //console.log('this matches /user/' + req.params.id);
  //console.log('user in req object', req.user);
  next();
});

//this matches the above, so doesnt generate a separate call for router.param 
router.get('/user/:id', function (req, res) {
 // console.log('and this matches too');
  res.send('user ' + req.params.id + ' is ' + req.user.name);
});



// **** more than one parameter
//get all interests for a given user
router.get('/user/:id/interest', function (req, res) {
  let interests = req.user.interests.map((e) => { return e.interest }).join(", ");
  res.send(`user ${req.params.id} is ${req.user.name} who likes ${interests}`);
});

//get one interest for a given user
router.get('/user/:id/interest/:interestid', function (req, res) {
  let userId = req.params.id;
  let interestId = req.params.interestid;
  let interest = req.user.interests.find((e)=>{return e.id==interestId});
  res.send(`user ${userId} is ${req.user.name} who likes this one thing ${interest.interest}`);
});


// ******* POST  *********
router.post('/user/', function (req, res) {
  //bodyparser in app.js took care of this already
  users.push(req.body);
  res.status(201);
  res.json(req.body);
});


// *** Query paramaters
//this will allow query string to be passed to filter users
//http://localhost:3000/searchusers?name=bob&age=21&interest=beer 
router.get('/searchusers/', function (req, res) {
    var name = req.query.name;
    var age = req.query.age;
    var interest = req.query.interest;  

    //with this data you could filter results
  
    res.send(`name ${name} age=${age} interest=${interest}`);
});


module.exports = router;
