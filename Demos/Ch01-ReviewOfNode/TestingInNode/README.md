# Chapter 1 Demo: Unit Test Examples

## Objectives:
* Become familiar with Unit Testing with mocha and chai

## Steps

1. Open a terminal window at the same location as this readme.

1. Do an `npm install`

1. Examine the test folder and look at the code in 0assertionTest, 1expectTest, and 2shouldTest.

1. Execute the following command: 
    ```
    npx mocha test/0assertionTest.js`
    ```

    `npx` is used as it will look in the node_modules folder without needing to specify the path. Now execute the other 2 we just looked at.

1. Rather than testing one test at a time we can execute directories. Try `npx mocha test` to execute all tests in the test directory.

1. We can also use the npm script that has been created. Try `npm run test`, or simply `npm test` as test is a common script in package.json. This will find our test directory and execute the tests.


