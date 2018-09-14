var express = require('express');
var router = express.Router();
var createError = require('http-errors');
var fs = require("fs");
let Promise = require('bluebird');

let cars; 

fs.readFile("./db.json",(err, data) =>{
  // console.log(JSON.parse(data));
  cars = JSON.parse(data);
});

// Promise.try(() => {
//   // return fs.writeFileAsync(fileName, "Promises are cool! But you MUST call next on errors");
//   return fs.readFileAsync("./db.json",(err, data) =>{
//       // console.log(JSON.parse(data));
//       cars = JSON.parse(data); 
//       console.log(cars);   
//     });
// }).then((data)=>{
//   console.log(JSON.parse(data));
// }).catch((err)=>{
//   console.log('boom');
//   console.log(err);
// });




// router.param('id', function (req, res, next, id) {
//   //set a user object on req
//   console.log("here");

//   if(!isNaN(parseFloat(id)) && isFinite(id)){
//     console.log("second here");
//     Promise.try(() => {
//       // return fs.writeFileAsync(fileName, "Promises are cool! But you MUST call next on errors");
//       return fs.readFileSync("./db.json",(err, data) =>{
//           // console.log(JSON.parse(data));
//           console.log("zzy");   

//           cars = JSON.parse(data); 
//         });
//     }).then((data)=>{
//       console.log("first then");
//       cars=JSON.parse(data);
//       // console.log(JSON.parse(data));
//       req.car = cars.Makes.find((e) => {return e.id == id;});
//     }).catch((err)=>{
//       console.log('boom');
//       console.log(err);
//     });

//this is pulled from the route parameter 
router.param('id', function (req, res, next, id) {
  //set a user object on req
  console.log("here");

  if(!isNaN(parseFloat(id)) && isFinite(id)){
      req.car = cars.Makes.find((e) => {return e.id == id;});
  } else {
    req.car = "not a number !!";
  }
  next();  //pass to the next matching middleware
});

/* GET home page. */
router.get('/', function (req, res, next) {
  let html = `Test text`;
    console.log(req.query);
    res.send(html+"<br>"+req.car);
  });
// });
/* GET home page. */
router.get('/:id', function (req, res, next) {
  let html = `at id`;
  console.log('processing request with id');
    res.send(req.car);
  });
// });


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
http://localhost:3000/filewrite?filename=demo.text
then using
http://localhost:3000/filewrite

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

/* Notice how this uses an error first call back and calls next passing the err. Load this route in the browser, is it picked up by the error handler?
http://localhost:3000/fileread?filename=demo.text
then using
http://localhost:3000/fileread
*/
router.get("/fileread", function (req, res, next) {
  let fileName = req.query.filename;
     
  fs.readFile(fileName, function (err, data) {
    if (err) {
      next(createError(400, "invalid filename" )); // Explicitly Pass errors to Express.
    }
    else {
      res.send("file contents: " + data.toString());
    }
  });
});


// const Promise = require("bluebird");
const pfs = Promise.promisifyAll(fs);

//Good URL: http://localhost:3000/filewritepromise?filename=demo.text
//Bad URL: http://localhost:3000/filewritepromise
router.get("/filewritepromise", function (req, res, next) {
  let fileName = req.query.filename;

  Promise.try(() => {
    return fs.writeFileAsync(fileName, "Promises are cool! But you MUST call next on errors");
  }).then(() => {
    console.log("Data written successfully!");
    console.log("Let's read newly written data");
    return fs.readFileAsync(fileName);
  }).then((data) => {
    res.send(`Asynchronous read: ${data.toString()}`);
  }).catch(err => {
      next(err);
  });
});

//In this example, a developer might have been distracted and forgot to do something...read through the code.. 
//Try this URL: http://localhost:3000/filewritepromisenonext
router.get("/filewritepromisenonext", function (req, res, next) {
  let fileName = req.query.filename;

  Promise.try(() => {
    return fs.writeFileAsync(fileName, "Promises are cool! But you MUST call next on errors");
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
