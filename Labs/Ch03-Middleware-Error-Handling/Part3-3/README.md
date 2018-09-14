# Chapter 3 Exercise 3: Using the promise router so middleware can return promises

## Objectives:
* Add a login route to the app
* Use the Express Promise Router 
* Create custom errors
* Throw a custom error from a Promise

## Steps 

1. Continue working in your `express1/lab-project` project. 

1. So far our routes have been simple. Everyone has access to all.

1. In our app, we just got a new requirement to have http://localhost:3000/login as a way to allow users to login. Add this as a link in the layout.pug file after `a(href="/users") Users`.  
    ```
    li 
        a(href="/login") Login
    ```    

1. Which file would be a good place to indicate how to handle this route mapping for `/login`?

    Let's add the /login route to the `index.js` file since it is off of the root path. The URL / is the root/index. If the URL were to be /users/login we might add it to the `users.js` file.
    * Which HTTP method is needed to request the login page?
    * We need a GET for `/login` which returns the login view. Add this to `index.js`

    ``` javascript
    router.get('/login', function(req, res, next) {
        res.render('admin/login');
    });
    ```

1. From `/Libs/Part3-3` - copy the `admin` directory to the `views` directory which contains the login page. Looking at `login.pug` - what action is taken when the form is submitted?

1. Test now if you can see the login page when you click the link. If not, troubleshoot.

1. Supply any user/pass and submit. What happens? Why?
 
1. We need to process the /login as a POST. In the future we will be implementing this using DB functionality and therefore using Bluebird for Promises. Add a require in the `index.js` and also grab the dependency using the CLI.

    ``` const Promise = require("bluebird"); ```

    ``` npm i bluebird -S ```

1. For now, when a user submits their username and password, let's only check to see if the password matches `secret` and if not throw an error.

    ``` javascript
    router.post('/login', (req, res) => {
        return Promise.try(() => {
            if (req.body.password === "secret") {
            //if it is the correct password, login and set up session
                res.redirect('/students');
            
            } else {
            //throw new customErrors.AuthenticationError("Incorrect password");
                throw new Error("Incorrect password");
            }
        });
    });
    ```

1. Go through the login process. You should be see the page and be able to login using `secret`. But what happens if you supply a different password? Try both ways. Do you see the error page?

1. Because the error is being thrown from within a Promise, our unhandled error is not handling it! To make this work you can add a catch block after the Promise.try() passing next - like this. 

    ``` javascript
   .catch( next )
    ```    

1. You would need to do this everywhere you use promises. You may forget to do this in your code.  Instead, we can leverage the Express Promise Router. It allows middleware to return promses and will allow Promise rejections to be handled without explicitly calling next(err).  

1. Modify `index.js` by commenting out express.Router and instead using expressPromiseRouter
    
    ``` javascript
       //var router = express.Router();
        const expressPromiseRouter = require("express-promise-router");
        const router = expressPromiseRouter();
    ```

1. Add the dependency to the project. 
    ```
    npm i -S express-promise-router
    ```

1. Because we are now using the Express Promise Router in our application, let's replace the current contents of `app.js` with the contents in `/Libs/Part3-3/app.js`. This changes the use of the Express Router to the Express Promise router.

1. Notice how the new version of `app.js` uses the express-promise-router in multiple places.

1. Now, test that logging in, with an invalid password, works with or without the catch() block in the `Promise.try()` 

## Add Custom errors
  
1. Replace the contents of `middleware/error-handler.js` with the contents in `/Libs/Part3-3/middleware/error-handler`

1. Review the code and read the comments. This version expects to process some custo error messages. If the message is custom and has a code, this code is what is set and used, Otherwise a 500 code is set. 


1. We will leverage the `create-error` package, which gives a simple API for creating new types of Error which contains a custom error message and a specifed error code. Add this to your projet using `npm i -S create-error`

1. Let's create a file to house custom errors called `custom-errors.js`. You can right click the `lab-project` folder and choose `New file.`

1. In this file require createError and export an object with three custom error types.
    ```javascript
    const createError = require("create-error");

    module.exports = {
        AuthenticationError: createError("AuthenticationError", {isCustomError: true, status: 401}),
        NotFoundError: createError("Resource Not Found", {isCustomError: true, status: 404}),
        ValidationError: createError("ValidationError", {isCustomError: true, status: 422})
    };
    ```

1. In app.js, update the 404:
    ```javascript
        // catch 404 and forward to error handler
        router.use(function(req, res, next) {
            throw new customErrors.NotFoundError("404 Resource Not Found");
        });
    ```

1. In `index.js` include the new custom errors:
```const errors = require("../custom-errors");```

1. Now in the POST /login method, use the new custom error:
```throw new customErrors.AuthenticationError("Incorrect password");```
   
1. Test that the app is still working after these changes.

1. We still have work to do. We will start working with the DB next.


