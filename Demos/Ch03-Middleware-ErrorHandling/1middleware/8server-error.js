const express = require("express");
const path = require('path');
const config = {port: 3748} ;
const fs = require('fs');

let app = express();

app.use((req, res, next)=> {
	const now = new Date().toString();
	console.log(`${now}: ${req.method} ${req.url}`);
	next();

})

app.get("/", (req, res) => {
	res.send(`
		Main page
	`);
});



app.get("/syncerror", (req, res) => {
	throw new Error("BROKEN"); // Express will catch this on its own.
});

app.get("/readnext", function (req, res, next) {
	fs.readFile("/file-does-not-exist", function (err, data) {
	  if (err) {
		next(err); // Pass errors to Express.
	  }
	  else {
		res.send(data);
	  }
	});
  });

  app.get("/readunhandled", function (req, res, next) {
	fs.readFile("/file-does-not-exist", function (err, data) {
	  if (err) {
		//next(err); // Pass errors to Express.
	  }
	  else {
		res.send(data);
	  }
	});
  });


app.get("/capitals", (req, res) => {
	res.send(`
		Check the above URL
	`);
});

//PUT THIS LAST - no one should make it here...
app.use((req, res) => {
	res.status(404).send('404 resource not found')
});

//if errors occur it will skip over the 404 and make it here notice the number of arguments
app.use(function(err, req, res, next) {
	console.error(err.message); // Log error message in our server's console
	if (!err.statusCode) err.statusCode = 500; // If err has no specified error code, set error code to 'Internal Server Error (500)'
	res.status(err.statusCode).send(err.message); // All HTTP requests must have a response, so let's send back an error with its status code and message
  });


app.listen(config.port, () => {
	console.log(`Listening at http://localhost:${config.port}`);
});

