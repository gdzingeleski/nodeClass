const request = require('superagent');
const api = require('./api.js');

//initialize the api
request
      .get('/Makes')
      .then(function(res) {
          // res.body, res.headers, res.status
          api(window, res.body);
          
      })
      .catch(function(err) {
          // err.message, err.response
          throw new Error('An  AJAX error occured: ' + err.message);
      });
  

