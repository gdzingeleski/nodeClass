const express = require('express')  
const app = express();
const path = require("path");
const config = {port: 3743}; 


//send back the maintenance down page, with NO Next()
//sendfile requires an absolute path 
app.use((request, response, next) => {  
  response.sendFile(path.join(__dirname, 'public', 'site-down.html'));
})

//generate random number
app.use((request, response, next) => {  
  request.chance = Math.random();
  next();
})

//put chance into response
app.get('/', (request, response) => {  
  response.json({
    chance: request.chance
  })
})

app.listen(config.port, () => {
	console.log(`Listening at http://localhost:${config.port}`);
});

