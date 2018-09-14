const fs = require("fs");
const path = require('path');

console.log("Going to read directory tmp");
fs.readdir(path.join(__dirname,'/tmp/'),function(err, files){
   if (err) {
      return console.error(err);
   }
   files.forEach( function (file){
      console.log( file );
   });
});