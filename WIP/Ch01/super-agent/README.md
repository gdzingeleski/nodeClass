# Chapter 1 Demo: SuperAgent

## Objectives:
* Review a project that uses client and server side modules
* Start a server and use SuperAgent to simplify AJAX calls
* Explore the usage of npm script commands

## Steps

1. Open the terminal at this location and run `npm install`

1. Open package.json. There is a lot going in this file and we will walk through it in this demo.

1. First, notice the development dependencies.

    `browserify` is used to bundle modules for use on the client side

    `watchify` is used during dev to keep bundling if there are any changes.

    `npm-run-all` simplifies writing multiple npm script calls

1. This project depends on  `json-server` and `superagent`.  The `json-server` package creates a quick and easy REST API built on top of express. You can give it a JSON fle and it creates the endpoints for you. 

1. Usully, projects have a script called `start` as does this one. Can you tell what it is doing?

    First, the build script is referenced. In npm, scripts can cause another script to run if it has a prefix of `pre` in front of the same name.

    So we have a prebuild and a build. In this case, browserify is used to do an initial bundling of code (this is done so require can be used on the client side) 
    
    After the initial bundling, the `build` script is used - which is using `watchify`. This will watch for changes in the files during dev, and will recreate the bundle if anything is changed.
    
    The use of & indicates that `jsonserver` should run in parallel. This works on linux but not on Windows.

    The script `runall` does the same thing by using run-p - this works better when you have many tasks that need to run in parallel (run-p) or sequentially (run-s) - and works on Windows.  You also do not need to use `npm run` in front of script names.

1. Execute the start script for your OS by using `npm start` or `npm run runall`  

1. Notice the output in the terminal window includes a URL for http://localhost:3333/Makes.  Open this in the browser (control+click works form VSCode) and notice this is a GET request which returns JSON data. The JSON data is coming from `db.json`.

1. Now load this page in the browser: `http://localhost:3333/`. Click the button to see the JSON data displayed as rows.  

1. Return to VSCode. The json-server lets us access static resources from the public folder. Expand this folder in VSCode and notice the index.html. This is the page that was loading. 

1. Hit the x on the terminal window. (or use Control + `) This hides the window but the service keeps running.

1. READ: Pure JavaScript could be used to make  AJAX requests to get the JSON data. We are instead using `superagent` which is a module that simplifies AJAX calls. Because this is a module, this project uses browserify to load the module in the browser.

1. Open the `api.js` file. This module defines an array (private) and exports a function which will be used to populate the array initially, and then create two functions to be used in the browser.

    * What do the 2 functions do?

1. Open `main.js` and note the use of superagent to make a GET request to the JSON-server, and pass the results off to initialize the array you saw in `app.js`

1. Bring back the terminal window. 
(Control + `) This is a toggle. 

1. In `app.js` modify line 9 to change the table column to Car Make instead of just make. Save your changes.

1. Watch the output of the terminal window. You should see a message about the bundle being updated.

1. Refresh the browser. You should see the changes displayed.

1. Now discard your changes to `app.js` by clicking the Y looking repo icon in the balck vertical menu, hovering over the listed app.js file, and clicking the discard changes icon (counter-clockwise arrow).


