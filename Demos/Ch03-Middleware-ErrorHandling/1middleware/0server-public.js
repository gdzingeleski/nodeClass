const express = require("express");
const path = require("path");
const config = {port: 3740} 

let app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get('/', function (req, res) {
    res.send('Welcome');
});

app.listen(config.port, () => {
	console.log(`Listening at http://localhost:${config.port}`);
});
