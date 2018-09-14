var express = require('express');
var router = express.Router();
var createError = require('http-errors');
var fs = require("fs");


/* GET home page. */
router.get('/', function (req, res, next) {
  let html = `<p>These links throw errors. </p>
   <ul>
   <li> <a href="/foobar">This is a link to /foobar which doesnt have a route</a></li>

</ul>

  `;
  res.send(html);
});


/* Notice how this calls a function that doesnt exist - notAFunction. This will throw an error so that next() is never called. But Express takes care of this and will also forward on the error handling middleware. Open in the browser, is it picked up by the error handler? */

router.use('/throwserror', function (req, res, next) {
  console.log(`the following function doesnt exist`);

  notAFunction();

  next();
});


/* This simulates a service not being avaiable by creating a 503 error with a custom message and passing this into next().  Open in the browser, is it picked up by the error handler? */

router.use('/mtgox', function (req, res, next) {
  console.log(`Let's pretend another webservice is too busy and times out`);

  //call 3rd party service, times out - so we throw error with 503
  next(createError(503, "Service temporarily unavailable", { expose: false }));
});


/* Notice how the following uses a query string to pass the filename

Notice how it uses two callbacks. You can string together as many as you like, these are additional middleware that gets called in order. Notice the difference in the way fs.writeFile is called. next will be called, either with or without the error. If it is with an error, then it gets picked up by the errorhandler. Otherwise a response of OK is returned. Load this route in the browser, is it picked up by the error handler?


First load this route using
http://localhost:3000/filewrite?filename=demo.text   //this will work
then using
http://localhost:3000/filewrite   this will throw an error

*/
router.get("/filewrite", function (req, res, next) {
  let fileName = req.query.filename;
  fs.writeFile(fileName, "This is some demo text from " + req.path, next);
  //next gets called with or without the error
},
  function (req, res) { //this fires if next is called w no error
    res.send("OK");
  }
);




/* With err first callbacks */

/* Notice how this uses an error first call back and calls next passing the err. Load this route in the browser, is it picked up by the error handler?
With a file that exists
http://localhost:3000/fileread?filename=demo.text  //works if you did the last step

then using a file that doesnt exist - raises 400
http://localhost:3000/fileread?filename=badfile.txt


then using no query parameter  - 
http://localhost:3000/fileread
*/

router.get("/fileread", function (req, res, next) {
  let fileName = req.query.filename;
  if (!fileName) {
    next(createError(400, 'Called without filename'));
  };

  console.log(`After check of fileName`);

  fs.readFile(fileName, function (err, data) {
    if (err) {
      console.log('in error');
      next(createError(400, "invalid filename")); // Explicitly Pass errors to Express.
    }
    else {
      res.send("file contents: " + data.toString());
    }
  });
});





/* WITH PROMISES */
const Promise = require("bluebird");
const pfs = Promise.promisifyAll(fs);

//Good w filename: http://localhost:3000/filewritepromise?filename=demo.text
//Bad no filename: http://localhost:3000/filewritepromise
//Bad with empty filename: http://localhost:3000/filewritepromise?filename=
router.get("/filewritepromise", function (req, res, next) {

  let fileName = req.query.filename;

  if (!fileName) {
    console.log('calling next with error');
    next(createError(400, "Called without filename"))
  }
  else {

    Promise.try(() => {
      let fileName = req.query.filename;

      if (!fileName) {
        console.log('calling next with error');
        throw (createError(400, "Called without filename"))
      };
      return fs.writeFileAsync(fileName, "Promises are cool! But you MUST call next on errors");
    }).then(() => {
      console.log("Data written successfully!");
      console.log("Let's read newly written data");
      return fs.readFileAsync(fileName);
    }).then((data) => {
      res.send(`Asynchronous read: ${data.toString()}`);
    }).catch(next);
  }
});

//In this example, a developer might have been distracted and forgot to do something...read through the code.. 
//Try this URL: http://localhost:3000/filewritepromisenonext
router.get("/filewritepromisenonext", function (req, res, next) {
  
    Promise.try(() => {
      return fs.writeFileAsync("demo.txt", "Promises are cool! But you MUST call next on errors");
    }).then(() => {
      console.log("Data written successfully!");
      console.log("Let's read newly written data");
      return fs.readFileAsync(fileName);
    }).then((data) => {
      res.send(`Asynchronous read: ${data.toString()}`);
    }).catch(err => {
      console.log('Did I forget to turn off the stove?');
    });
  
});



module.exports = router;
