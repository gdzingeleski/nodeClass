# Chapter 2 Exercise 4: Add new pug files, and render them
## Objectives:
* Create new pug files for student and users
* Pass title values from the specific routes to the pug files

If you want a challenge do this now. Otherwise, refer to the steps below. 

## Steps

1. Continue with your `express1/lab-project` copy the solution. Launch http://localhost:3000 in browser. Refer to previous exercises if you need more detail.

1. Copy the student.pug and users.pug files from this folders solution directory into your `views` directory. 

1. Update the `students.js` router files to render the new student.pug view with the appropriate title instead of just passing back text with send().  For example: 
    ``` javascript
    var express = require('express');
    var router = express.Router();

    /* GET student listing. */
    router.get('/', function(req, res, next) {
    res.render('students', { title: 'Students' });
    });

    module.exports = router;`
    ```

1. Visit the URL http://localhost:3000/students and confirm it is showing the students title        

1. Now do the same thing with the `users.js` router file to render the users.js pug view with appropriate title
    * http://localhost:3000/users