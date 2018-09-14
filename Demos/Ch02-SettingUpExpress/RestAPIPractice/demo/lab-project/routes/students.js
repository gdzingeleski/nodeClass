var express = require('express');
var router = express.Router();

const students = [
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

router.get('/', function (req, res) {
  console.log('all users', students);
  res.send(students);
});


module.exports = router;
