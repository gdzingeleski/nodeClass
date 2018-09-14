# Chapter 3 Exercise 2: Use a custom error handling middleware

## Objectives:
* Examine the default error handling middleware 
* Organize code by adding a new middleware called error-handler.js  
* Practice passing state to the error handler

## Steps

1. Continue working in your `express1/lab-project` project.

1. npm start if the project is not already running.

1. Notice in `app.js` the last middleware that raises the 404. Try to reach a made up URL like http://localhost:3000/notforrealz 

1. You should be seeing the same format as your other pages as the error page here is using the same layout.

1. In the 404 catch middleware, modify the Error text so that instead of  `Not Found` the text `Oh no! the page cannot be found` is used. 

1. Test your changes in the browser.

