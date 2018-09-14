const express = require("express");
const path = require("path");
const config = {port: 3745} ;

let app = express();

app.use(function (req, res, next) {
    req.message = 'I was added by middleware in app.js<br/>';
   
    next();
});

// refer to router
app.use(require("./routes/index.js"));
  
app.listen(config.port, () => {
	console.log(`Listening at http://localhost:${config.port}`);
});
