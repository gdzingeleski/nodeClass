# Chapter 3 Exercise 1: Middleware

## Objectives:
* Create middleware that logs the current time to the console


## Steps

1. Continue working in your `express1/lab-project` project. 

1. We will be using the moment package - add it to package.json.

1. In `app.js` add in middleware that causes all routes to print out the time as shown below. Make sure you put this before any routes that will call send() or render():

    ``` javascript
    app.use(function (req, res, next) {
        console.log(`Time: ${moment().format('MMMM Do YYYY, h:mm:ss a')}  `);
        next();
    });
    ``` 

1. Load the application in the browser. Look at the log when you go to http://localhost:3000 and for each link/route you activate - you should see the time in the terminal console.