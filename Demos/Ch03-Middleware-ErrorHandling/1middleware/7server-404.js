const express = require("express");
const path = require('path');
const config = {port: 3747} ;

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


app.get("/capitals", (req, res) => {
	res.send(`
		Check the above URL
	`);
});

//PUT THIS LAST - no one should make it here...
app.use((req, res) => {
	res.status(404).send('404 resource not found')
});

app.listen(config.port, () => {
	console.log(`Listening at http://localhost:${config.port}`);
});

