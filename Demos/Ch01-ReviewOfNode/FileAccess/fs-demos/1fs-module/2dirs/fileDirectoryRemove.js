const fs = require("fs");
const path = require('path');


console.log("Going to delete directory tmp/test");
fs.rmdir(path.join(__dirname,'/tmp/test'),function(err){
   if (err) {
      return console.error(err);
   }
   console.log("Going to read directory /tmp");
   
   fs.readdir(path.join(__dirname,"tmp/"),function(err, files){
      if (err) {
         console.log(err);
      }
      files.forEach( function (file){
         console.log( file );
      });
   });
});