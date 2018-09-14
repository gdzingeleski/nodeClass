# Chapter 1 Exercise 2: Modules and Browserify

## Objectives:
* Divide up the code into modules
* Use browserify to be able to use modules in a browser

## Steps

1. Create another directory so that you have this structure: `WIP/Ch01/browserifyModules` 

1. You will be doing command line work in this folder. You can get there in VS code by right clicking the new folder and choosing Open in Terminal.

1. In your new `browserifyModules` folder, create a new directory called `src`. Typically, this is where source JS files are kept before they are processed.

1. Create a new file in `src` called `printHobbies.js` and copy this code into it - which includes module.exports as shown:

    ``` javascript
    function printHobbyInfo(hobby) {
        console.log(` ${hobby.name} has been an interest for ${hobby.lengthInYearsAtHobby} years`)
    }

    module.exports = printHobbyInfo;
    ```

1. In the `src` directory create a file called `source.js` that requires `printHobbies.js`. You can copy the source below into this new file.

    ``` javascript
    const printInfo = require('./printHobbies');

    const hobbies = [
        { name: 'volleyball', lengthInYearsAtHobby: 20 },
        { name: 'cooking', lengthInYearsAtHobby: 5},
        { name: 'swimming', lengthInYearsAtHobby: 11}
    ];

    for (const hobby of hobbies) {
        printInfo(hobby);
    }
    ```

1. Very few browsers support modules, so lets use browserify to convert the use of modules into something that we can use. We can install it globally using:
```npm install -g browserify``` 

1. Open a terminal window at the same level as `browserifyModules` and execute this command: 

    ```
    browserify src/source.js -o dist/bundle.js
    ```

1. Create an `index.html` directly inside the `browserifyModules` folder.

    Before typing anything in this file, as the first line, start typing the word `html`. A pop-up should appear while you are typing, and if you choose the html:5 template it will create the basic HTML structure that is needed.

1. Before the closing `</head>` tag add this:

    ```html
         <script src="dist/bundle.js"></script> 
    ```

1. Test your `index.html` file in Chrome.

    If you have the Open in Browser extension in VSCode installed, you can right-click the html file and choose open in browser. Choose Chrome as your default browser. Do you see your output in the developer tools console? (you can right click in browser and choose inspect to open the devtools menu). Chrome should successfully display the data in the dev tools. 

1. Test in IE11. To open in IE you can copy the link from Chrome, or choose Open in Browser and choose Open in Other Browsers - then IE.

    Internet Explorer will not display the output due to the ES6 code. We will address this in a future exercise. 

## Bonus

1. In `source.js` require lodash.

1. Create a function called `mostRecentHobby`, which uses lodash to find and return the hobby with the minimum years. 

    You can search npm for lodash and search usage guides for an appropriate lodash method to find an object by a property minimum value.