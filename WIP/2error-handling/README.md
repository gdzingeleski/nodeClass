# Chapter 3 Demo: Error handling

## Objectives:
* View default error handling from express a generator

## Steps

1. First, expand the directory called `simple` and open a terminal at this location. Do an `npm install` and `npm start` but do not open browser, lets look at code first.

1. Open `app.js` in the editor. Notice the first line requiring `http-error`. 
    Is this a custom or 3rd party module? How can you find out? Search for the documentation. Scroll down to continue...
    
    ```
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    https://www.npmjs.com/package/http-errors
    ```


    The `create-error` function is what we are using to refer to the package `http-errors`. Open the link for it on npm. 

1. How many downloads per week? Pretty popular package!

    ### 404
1. In `app.js`, look at the next to last middleware with the comment: `catch 404 and forward to error handler`
    
    This catch 404 will only be reached if no other middleware returns with a send or render beforehand. This middleware is used to generate an error, set the status to 404 then it goes the next middleware the error handler. 

    The function `next()` is called with this error. What is the next middleware that runs?

    It is the error handler which is middleware which takes 4 arguments. 
    
    ```javascript
    app.use(function(err, req, res, next) {
    ```    

    What happens in this middleware? Notice how it passed data to the view.

1. In the browser, go to the URL http://localhost:3000

    The page should load with a link to a page that does not exist (no matching route.) 

    Click the link, do you see the info displayed from error.pug?

    ### Multiple examples of error handling.

1. Look at the rest of the routes in `routes/index.js`. There are multiple examples of handling errors. Read the code for each route and the comments then load the URLs in the browser to see the routes functioning. 


## Bonus

1. Copy this folder `\Demos\Ch03-Middleware-ErrorHandling\error-handling\` to your WIP directory.

1. Create routes for GET requests for car data. You can use the db.json file from `\Demos\Ch01-ReviewOfNode\super-agent\db.json`

1. Use the browser to pass a query parameter to indicate the country, and return JSON data. 

1. Create a `unique` route which uses Promises to read db.json, and make a list of the countries and number of makes per country.
