var expressPromiseRouter = require("express-promise-router");
const router = expressPromiseRouter();

/* GET users listing. */
router.get('/', function(req, res, next) {
 // res.send('respond with a resource');
  res.render('users', { title: 'Users' });
});

module.exports = router;
