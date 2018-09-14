var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var moment = require('moment');

var app = express();

const expressPromiseRouter = require("express-promise-router");
const router = expressPromiseRouter();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
router.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
router.use(logger('dev'));
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));
router.use(cookieParser());
router.use(express.static(path.join(__dirname, 'public')));

const unhandledError = require("unhandled-error");
let crashOptions = {doNotCrash : true};
let errorReporter = unhandledError( (err) => {
                            /* This should eventually be hooked into some sort of error reporting
                              mechanism. SMS text nessaging....etc. bug */
                            console.error("UNHANDLED ERROR:", err.stack);
                          }
                    , crashOptions);

/* The 'state' object is an object that we pass to everything that needs some
   sort of stateful dependency; all of the stateful dependencies are initialized
   here in server.js, and then passed into the modules that need them using a
   wrapper function. The wrapper function can unpack the stateful dependencies
   that it needs, eg. using object destructuring. */
   let state = {
     errorReporter: errorReporter
   }

 
router.use(function (req, res, next) {
  console.log(`Time: ${moment().format('MMMM Do YYYY, h:mm:ss a')}  `);
  next();
});

/* Include Route files */
const index = require('./routes/index');
const users = require('./routes/users');
const students = require('./routes/students');

/* Main routes */
router.use('/', index);
router.use('/users', users);
router.use('/students', students);

router.use(require("./middleware/error-handler")(state));

// catch 404 and forward to error handler
router.use(function(req, res, next) {
  let err = new Error('Oh no! the page cannot be found');
  err.status = 404;
  req.timestamp = new Date();
  next(err);
});

app.use(router);

module.exports = app;
