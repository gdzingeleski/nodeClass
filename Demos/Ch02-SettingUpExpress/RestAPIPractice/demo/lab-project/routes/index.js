var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  let resText = `
    <br/>
    
    <ul>
    <li><a href="/sendnull" />Send null</a>
    <li><a href="/sendname" />send Json object with name</a>
    <li><a href="/sendpet" />send Json object with 2 properties name</a>
    <li><a href="/sendarray" />send Json array</a>
  
    </ul>
  `
  res.send('Use different links to test request and response' + resText);
});


module.exports = router;
