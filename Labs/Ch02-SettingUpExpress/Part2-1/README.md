# Chapter 2 Exercise 1: Create a new project
## Objectives:
* Create a new project for the course using Express App Generator
* Customize some of the default setup

## Steps

### Create new project

1. During exercises, you will create various projects and update them during following exercises.

1. Create a new directory now at `WIP/express1`

1. If you havent already, install globally the Express application generator using `npm install express-generator -g`

1. Execute one of these commands to create the lab-project
    
    1. This works if you have npm > 5.x
         ``` express --view=pug --git lab-project && cd lab-project``` 
    
    1. Or split it out into two commands instead of using && for both steps

        ``` express --view=pug --git lab-project ```
    
        ``` cd lab-project ```

1. Execute the command `npm install`

1. Look at the "start" script in package.json, how is this Node app started? See if you can walk through the code... then scroll down
```


























```

1. The script runs node `./bin/www`. This file requires `app.js`. We will mostly be working within app.js.

1. Run npm start

1. Visit the site at http://localhost:3000. Your app should now be up and running.

1. In VSCode you can:
    * Ctrl-C to stop the process and stay in the same directory
    * Hit the trashcan icon to kill process and clsoe the window
    * Hit the X to hide the window, and use Ctrl-` to get it back



### Modify initial setup of new project

1. If you havent already, install `nodemon` globally. This way you can start projects using `nodemon` - which will automatically restart the server when you make file changes. 

1. Update the `package.json` scripts entry for `start` to use nodemon instead of node: 
    ```   "start": "nodemon ./bin/www" ```

1. Another nice script to have allows you to launch the project in a DEBUG specific mode. Complete your scripts area for now by adding an entry for devstart
    ```
    "scripts": {
        "devstart": "DEBUG=lab-project nodemon ./bin/www",
        "start": "nodemon ./bin/www"
    },
    ```

1. Add a nicer console.log to the `./bin/www` file which lists the complete URL to make it easer to click through to the start of the application.

1. Stop/Restart the server is it still working?