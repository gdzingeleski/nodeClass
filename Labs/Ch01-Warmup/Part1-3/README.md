# Chapter 1 Exercise 3: Promises and Bluebird

## Objectives:
* Use bluebird to use promises with file reading

## Steps

1. In the `/WIP/Ch01` directory create a folder called `bluebird`.

1. In the `/bluebird` folder, open a terminal window

1. Create a `package.json` by using the `npm init` wizard from the command line. Call the package `bluebird-practice` - and accept all other defaults (keep hitting Return key)

1. Add the bluebird dependency to the project by issuing this command: `npm install -S bluebird`

1. in the /bluebird directory create an `index.js` file. Start off by requiring bluebird

    ``` javascript
        const Promise = require("bluebird");
    ```

1. One feature that Bluebird gives us is the ability to Promisify packages....you can dynamically create asychrounous functions from normally synchronous ones. They get suffixed with the name `Async`. Add this line of code to promisify the Node built in `fs` package.

    ``` javascript
        const fs = Promise.promisifyAll(require("fs"));
    ```

1. Now we will use the newly generated versions of the functions to write asynchronously.
    ``` javascript
    Promise.try(() => {
        return fs.writeFileAsync("hobbies.txt", "These are my hobbies: swimming, running, painting!");
    }).then(() => {
        console.log("Data written successfully!");
        console.log("Let's read newly written data");

        return fs.readFileAsync("hobbies.txt");
    }).then((data) => {
        console.log(`Asynchronous read: ${data.toString()}`);
    });

    console.log(`something console.logged after the calls to write data`);

    ```

1. In the terminal window, execute the command `node index.js`

1. Look at the output in the console and the order of the printed statements.

1. Also look at the newly created file. You may need to refresh the directory in the editor.

1. Mark your work as complete.

##Bonus

1. Create a json file called `hobbies.json`.

1. In this file create an array of 3 hobby objects - each object has a property for `name` and `lengthInYearsAtHobby`.

1. Read the `data` in, as done above, "then" use the JSON.parse(data) to convert to a JavaScript array.  

1. Filter the array for hobbies that have year values under 5 and console.log the results. 

## Extra Bonus
1. Write the results to a new file underfive.json. 