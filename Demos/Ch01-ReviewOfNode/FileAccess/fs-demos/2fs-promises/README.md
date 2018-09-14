# Chapter 4 Demo  Working with Files - with Promises


## Overview : 

* You will review the use of Bluebird's PromisifyAll which creates a version of the fs module API to return promises

* You will review Bluebird's Promise.try() to wrap around a call to fs.readFileAsync and read the `./input.txt` file  

* Print the file contents to the terminal, if successful

* Print an error to the terminal if one occurs

## Detailed Steps

1. Add bluebird as a dependecy. Where can you find the documentation?

1. Lookup the usage of `Promise.promisifyAll`.  This can be used to modify the fs module - it creates new functions that can be called that return promises - suffixed with Async.  This allows us to call `fs.readFileAsync` which returns a promise, instead of only having `fs.readFile` available. 

1. Code can be structured as follows: 

    ```javascript
    Promise.try(() => {
        return fs.readFileAsync("./input.txt");
    }).then((fileContents) => {
        console.log(fileContents.toString());
    }).catch((err) => {
        console.error("An error occurred", err);
    });
    ```

1. Use `npm install` to get the dependency.

1. Read through each file one at a time, reading for understanding and then executing, making note of any changes to the system - and the order of console.log statements
