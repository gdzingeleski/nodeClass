const express = require("express");
const path = require("path");
const config = {port: 3744} 

let app = express();


app.use(function (req, res, next) {
    console.log('Time: %d', Date.now());
    
});  

// this middleware hangs the server, as next is not called
app.use(function(req, res, next) {
    res.send('Hello World');
});

// requests will never reach this route
app.get('/', function (req, res) {
    res.send('Welcome');
});


app.listen(config.port, () => {
	console.log(`Listening at http://localhost:${config.port}`);
});
