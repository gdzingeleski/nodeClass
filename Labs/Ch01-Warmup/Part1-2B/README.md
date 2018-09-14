# Chapter 1 Exercise 2B: More with NPM Modules

## Objectives:
* Create a package.json file using npm init
* Install packages locally 
* Use babel to transpile code from ES6 to ES5
* If you need additional help, you can refer to the appropriate `/Demos` directory. 


## Steps

1. Continue working in the folder `/browserifyModules`.

1. READ ONLY (make no changes): There are several ways to "transpile" code from ES6 down to ES5. One way is using babel. It can be used several ways including from the command line. One approach would be to install babel globally. Installing globally isn't always desirable. It makes it harder to manage the versions of the tools being used and can cause developers more manual work.

1. To manage our new project's dependencies, including for babel, we will create a `package.json` by using the `npm init` wizard from the command line. Be sure to be within the current project directory when you issue this command. 
    ```
    npm init --yes
    ``` 
    
    The `--yes`, or `-y` accepts all the defaults from the wizard.

1. Open the `package.json` and look at the dependency sections. It's currently empty. Close the file.

1. READ: Previously we used browserify from the command line because it was installed globally. It is better to add these dependencies to our project because the versions of dependencies can vary by project. 

1. Uninstall the global usage of browserify by using this command, from anywhere at the command line.

    ```
    npm uninstall -g browserify
    ```

1. Add browserify to this new project by executing this command from the command line, be sure you are in the `browserifyModules` directory, the same as the package.json.

    ```
    npm install --save-dev browserify
    ```

1. In the package.json file find the scripts object and add this property to it: 

    ```json
    "bundle": "browserify src/source.js -o dist/bundle.js"
    ```

1. Delete any /dist directory that you may have and test your new script by running this from the command line: `npm run bundle`

    You should see no errors and the /dist directory should be created.  

1. Now, let's get the code to work on IE11.  Add tools for babel to the new `package.json` dev dependencies with this command:

    ```
    npm install -D @babel/cli @babel/core @babel/polyfill 
    ```
    
    -D is a shortcut for `--save-dev` 

1. Open the `package.json` and look at the new entries in the dev dependencies section. Hoer over their names to read the descriptions. Close the file.

1. READ: You may notice a `package-lock.json` file being created. This helps to manage when multiple modules depend on similar modules with different version numbers. You can ignore this for now, but it could be checked in to your repo in the real-world. (https://docs.npmjs.com/files/package-lock.json)

1. Add a `@babel/preset-env` to the dev dependencies. Babel uses this to know how to transpile for different targets. 
    ```
    npm install @babel/preset-env -D
    ```

1. The last thing needed for the setup is a configuration file called `.babelrc`. Create this file in your main project directory - at the same level as your `package.json` file. In this file, add this content, which specifies to use the preset we just installed.
    ```json
    {
        "presets": [
            "@babel/env"
        ]
    }
    ```

1. READ (take no action): we want to execute the babel command to turn our ES6 code into ES5. 

    Because you have installed `babel` into node_modules, you could specify the CLI tool in the node_modules directory like this command which compiles all items in `/src` directory to `/dist`
    
    ```
    ./node_modules/.bin/babel src --out-dir dist
    ```

1. Instead of the command line, let's add the use of babel in the package.json `build` script so that it is easily repeatable and part of our development build process. 

    Find the location of the existing `"scripts"` property in `package.json` where you added `browserify`.  

    ```
       "build": "babel dist/bundle.js --watch --presets @babel/preset-env --out-dir dist"
    ```
    Notice you do not need to include the path to `node_modules` - it will be found as part of npm running the script.

    The `--watch` indicates to watch for changes, and keep transpiling whenever a file is changed.

1. Start the build process using the command: `npm run build`. Notice that your terminal window does not return to the prompt because it is listening for changes. 
  
1. Look in the `/dist` directory at the transpiled file. It should now be using ES5 type concatenation instead of backticks and not be using the arrow function.

1. Update the `index.html` to use this new `/dist/bundle.js` version of the bundled hobbies JS file.

1. Reload the IE11 browser, you should now see output in the dev tools console for both Chrome and IE.

1. READ: You can specify different browser versions with babel. Check out
https://github.com/ai/browserslist 


1. Mark your work as complete and then attempt the bonus

## BONUS

1. npx is a short-cut which will download a tool if it is not present, or execute it from the node_modules directory. They take a little longer to run if they need to be downloaded, but then you don't have to clean up your npm local repos or package.json file. Try these out:
    ```
    npx cowsay Say something

    npx happy-birthday -u YourName

    npx benny-hill
    ```



1. Modify your html page to create a `div` to hold the hobbies, and add JavaScript to call a function to update the div.
    ```
    <div id="hobbiesInfo"></div>

    <script>document.getElementById("hobbiesInfo").innerHTML=returnHobbiesHTML()</script>  
    ```

1. In a new file/module `src/htmlHobbies.js`, write and export a function `returnHobbiesHTML` which  takes in an array of hobbies, and returns an HTML formatted string of hobby information, which includes tags such as `<br />` or `<li>`. You can use ES6 backticks. 

    Include this module in source.js

    Add an html element with an id value  of `hobbiesInfo` and target it using `document.getElementById("hobbiesInfo").innerHTML=` and setting it equal to the result of calling the new returnHobbiesHTML function.




