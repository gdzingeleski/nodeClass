var express = require('express');
//var path = require('path');
//var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

var sends = require('./routes/sends');
app.use('/', sends);
app.use('/', require('./routes/index'));
app.use('/', require('./routes/user'));
app.use('/students', require('./routes/students'));


// app.use(function(req, res, next){
//   res.locals.user = req.user;
//   res.locals.authenticated = ! req.user.anonymous;
//   next();
// });





app.get('/', function (req, res) {
  res.send('GET request to homepage');
});

app.get('/method', function(req, res) {
  res.send('user ' + req.method);
});

app.post('/pet', function(req, res) {
  
  res.send('user ' + req.method);
});




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error' + err);
});

module.exports = app;
