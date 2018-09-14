const mkdirp = require('mkdirp');
const path = require('path');

console.log("Going to create directory tmp/test");

mkdirp(path.join(__dirname,'/tmp/test'),function(err){
   if (err) {
      return console.error(err);
   }
   console.log("Directory created successfully!");
});

