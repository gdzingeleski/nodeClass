var createError = require('http-errors');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var moment = require('moment');

var index = require('./routes/index');
var users = require('./routes/users');
var students = require('./routes/students');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

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


app.use(function (req, res, next) {
  console.log(`Time: ${moment().format('MMMM Do YYYY, h:mm:ss a')}  `);
  next();
});

app.use('/', index);
app.use('/users', users);
app.use('/students', students);

// catch 404 and forward to error handler
  app.use(function(req, res, next) {
    next(createError(404,'Oh no! the page cannot be found'));
  });

app.use(require("./middleware/error-handler")(state));

module.exports = app;
