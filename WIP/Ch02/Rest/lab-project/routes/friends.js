var express = require('express');
var router = express.Router();

const friends = [
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
  { id: 5, name: 'Cloberella', age: 55, interests: [{ id: 1, interest: 'movies' }, { id: 2, interest: 'travel' }] },
  { id: 6, name: 'John', age: 96, interests: [{ id: 1, interest: 'Alaska' }, { id: 2, interest: 'beer' }] }

];
console.log('friends.js');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('friends='+friends);
});

/* GET users listing. */
router.param('id', function (req, res, next, id) {
  console.log('router.param id='+id);
  req.user =friends.find((f)=>{return f.id==id;});
  next();
});

router.get('/:id', function (req, res, next) {
  console.log('this matches /friend/' + req.params.id);
  console.log('friend in req object', req.user);
  next();
});

router.get('/:id', function (req, res) {
  console.log('and this matches tu');
  res.send('friend ' + req.params.id + ' is ' + req.user.name+' interests '+JSON.stringify(req.user.interests));
});


// ******* POST  *********
router.post('/', function (req, res) {
  //bodyparser in app.js took care of this already
  friends.push(req.body);
  res.status(201);
  res.json(req.body);
});
module.exports = router;
