# DEMO Using Middleware
## Objectives:
* You will review various uses of middleware code

## Setup
1. Read through the package.json, noting dependencies
1. Do an npm install
1. Open a terminal at THIS location.

There is no code to be copied in these demos, these directions can be opened on Github for easy viewing.

## Steps

### 0 public folders

1. Open 0server-public.js. A quick way to make static assets available is to use the middleware on line 7 - this makes what is available in the public directory available. 

    Sometimes this is all people use Node and express for as it makes it quick and easy to test static assest from an http server rather than using the local file:// protocol. 

    Using path.join is good as files can be moved around but this is using __dirname.

1. Notice the only other route defined is /.

1. From the terminal type `node 0` then hit tab to autocomplete to node 0server-public.js. Hit return to start the server, control click to open the browser.

1. You should see the welcome page from the / route.

1. Keep the server running and hit the URL: http://localhost:3740/test.html

1. You can confirm this is the content from the public folder.

1. In the terminal, use control-c to stop the server but keep this directory available.


### 1 Logging time

1. Open 1server-logtime.js. Notice the port it will start on.

1. Note how the request is being changed form one middleware to the next.

1. From the terminal type node 1 then hit tab to autocomplete to node 1server-logtime.js. Hit return to start the server, control click to open the browser.

1. What is in the console?
1. What is in the browser?

1. In the brower hit http://localhost:3741/something

1. Is anything logged? What is in the browser? Later we will handle 404 better.

1. Hit control-c in the terminal to stop the server - but return to the prompt.

### 2 Changing request object

1. Open 2server-change-req.js. Notice the port it will start on.

1. Note the use of sendFile on line 10 - this will cause all in coming request to go the site down page.

1. From the terminal type node 2 then hit tab to autocomplete to run the file. Hit return to start the server, control click to open the browser and verify behavior.

1. Hit control-c in the terminal to stop the server - but return to the prompt.


### 3 Site down

1. Open 3server-site-down.js. Notice the port it will start on.

1. Note the use of sendFile on line 10 - this will cause all in coming request to go the site down page. you coudl do this to temporarily halt the serving of any other pages. 

1. From the terminal type node the number of this file, then hit tab to autocomplete to run the file. Hit return to start the server, control click to open the browser and verify behavior.

1. Hit control-c in the terminal to stop the server - but return to the prompt.

### 4 Server unreachable

1. Open 4server-no-return.js. Notice the port it will start on.

1. From the terminal type node the number of this file, then hit tab to autocomplete to run the file. Hit return to start the server, control click to TRY to open the browser. Notice it does not load.

1. Examine the code - why is this?


1. Hit control-c in the terminal to stop the server - but return to the prompt.

### 5 Server router

1. Open 5server-router.js. Notice the port it will start on.

1. Notice the order of the middleware, 5server-router.js line 8 alters the request object by adding a message, and calls next().

1. Line 14 requires routes/index.js and if you look in this file, the message is appended to.  

1. From the terminal type `node` space and then the number of this file, then hit tab to autocomplete to run the file. Hit return to start the server, control click to open the browser. Is it as you expect?

1. Hit control-c in the terminal to stop the server - but return to the prompt.

### 6 Favicons and capitals

1. Open 6server-favicons-caps.js. Notice the port it will start on.

1. In the server file, notice the require for serve-favicon and the entry in package.json

1. Reasons to use this module:
   - User agents request favicon.ico frequently and so you may wish to exclude these requests from your logs by using this middleware before your logger middleware.
   - This module caches the icon in memory to improve performance by skipping disk access.
   - Typically this middleware will come very early in your stack (maybe even first) to avoid processing any other middleware if we already know the request is for /favicon.ico. 

1. From the terminal type `node` space and then the number of this file, then hit tab to autocomplete to run the file. Hit return to start the server, control click to open the browser. 

1. Notice the favicon in the browser tabs. It is a ukelele. You may need to open browser dev tools, right-click the refresh icon and choose empty cache and hard reload.

    ### lowercase paths
1. Notice the use of the module `express-lowercase-paths`   
    - This Express middleware module that will redirect user HTTP requests that contain uppercase letters, to the same URL converted to lowercase, without modifying query parameters.
    - Why use this module?
        - for parameter normalization and SEO purposes
        - Ensures that dynamic routes (using dynamic parameters, e.g. :username) will be interpreted in their lowercase form. 
        - Quicker than writing code that normalizes individual URL parameters
        - good for SEO (by ensuring there is single canonical URL for all of your content).
        - A 301 redirect is used to ensure that search engines are redirected to the lowercase, canonical version of your content

1. Try hitting http://localhost:3746/CAPITALS in the browser. Notice the output in the browser.

1. Hit control-c in the terminal to stop the server - but return to the prompt.

### 7 Server 404

1. Open 7server-404.js. Notice the port it will start on.

1. Notice how the last middleware assumes that if you have reached it, we have a 404.

1. From the terminal type node the number of this file, then hit tab to autocomplete to run the file. Hit return to start the server, control click to open the browser and verify behavior.

1. Hit control-c in the terminal to stop the server - but return to the prompt.

### 8 Server errors

1. Open 8server-error.js. Notice the port it will start on.

1. Notice on line 21 there is a new Error thrown. Express understands to return this type of synchrounous error.

1. From the terminal type node the number of this file, then hit tab to autocomplete to run the file. Hit return to start the server. Try to hit the URL http://localhost:3748/syncerror control click to open the browser and verify behavior.

    Open the network tab of the browser and look at the type of status code returned. 

1. Now look at line 26 of the server file. This is an asynchronous error, which is caught in the handler, and next() is called.  This should cause teh handler to be called that takes in an error. Try to hit the URL http://localhost:3748/readnext to open the browser and verify behavior.

1. Now check out line 37. Notice someone commented out the call to next. Try to hit the URL http://localhost:3748/readunhandled to open the browser and verify behavior. We will discuss how to account for unhandled errors.

1. Hit control-c in the terminal to stop the server - but return to the prompt.




