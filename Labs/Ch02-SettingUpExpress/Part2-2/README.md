# Chapter 2 Exercise 2: Creating a new route
## Objectives:
* Understand the usage of routes in the app so far
* Add an additional route to your project. 

## Steps

### Review and organize existing routes

1. Continue your work with your express1 project. Do an nom start if it is not already running.

1. Visit the site at http://localhost:3000

1. Notice the text on the browser screen. Look at the generated folder structure and code, can you see which file sets this text?  Think of your answer, and then scroll down to see..
    
    ``` 











    ```


    In `app.js` there are lines to include routes:
    
        ``` javascript
        var index = require('./routes/index');
        var users = require('./routes/users');
        ```

    And further down the file these are used.
        ``` javascript
        app.use('/', index);
        app.use('/users', users);
        ```

1. This had been set up during the app creation. Let's organize a bit and move the require statements down to the use statements so that all 4 of these lines are together. These statements could even be combined like this:
    ```app.use('/', require('./routes/index'));```

1. What the app.use means, is that when http://localhost:3000/ is hit in the browser, it will use the index (/) route file. Open the file `/routes/index.js` and see how it defines a router using express.Router()  
    ``` var router = express.Router();```

1. This router is exported, but before it is, it defines that when a GET request is made to the index path, that the index view (in this case index.pug) is rendered and the title with value of Express is passed. 

1. Notice in `app.js` that the route `/users` will use the `routes/users.js`. Look inside of this file. Notice that the route is setup with `router.get('/', ` not `router.get('/users',`.  If the entry inside /users.js was also /users then the complete path to match would be http://localhost:3000/users/users 


### Create a new route 

1.  Create a new route in the routes folder called students.js `routes/students.js`. The easiest way to do this is to copy and paste `users.js`. You can right click and choose copy (or CTRL-C) then click the folder and right click and choose paste. (or CTRL-V)

1. This is where the display of students will be. 
For now, update the line to read 
`res.send('Students will go in here');`

1. Update `app.js` to require and then use this route. If need help, copy what is being done for requiring the users route and update it for students.

1. Refresh the browser, is the root URL still working?

1. Now see your new route by visiting the URL http://localhost:3000/students (you can ctrl click this link)

1. Verify, are are you seeing the correct output? If not try to troubleshoot and ask questions if need be.


