# Chapter 1 Exercise 6: Unit Testing with Mocha and Chai

## Objectives:
* Practice using mocha and chai for testing

## Steps

1. If you havent already - first complete the Demo work on Testing.

1. In the `/WIP/Ch01` directory create a folder called `testing`.

1. Under testing - create a folder called `test`.

1. In the `/testing` folder, open a terminal window

1. Create a `package.json` by using the `npm init -y` wizard from the command line. 

1. Add the mocha and chai dependencies to the project as devDepencies.  Recall how? Scroll down for the answer and to continue:
    ```
























    ```

    You can use `npm install -D mocha chai`

1. Open package.json and change the scripts.test property  to have the value "mocha test".

1. In the test folder create a file called 1test-arrays.js

1. In Mocha we use `describe` to setup the structure of our tests. We will be starting off by testing JS array functionality. Create this structure:

    ```javascript
    describe('Array', function() {
        describe('#indexOf()', function() {
            //tests will go here
        });
    });
    ```

1. From the terminal, execute `npm test` - this should start mocha and give feedback with 0 passing since no test has actually run yet. 

1. We can use mocha to indicate that a test should execute. Add this code where the comment is for //tests will go here

    ```javascript
    it('should return -1 when the value is not present');
    ```

1. In the terminal, hit the up arrow to execte npm test again. Now you should see a message that 1 test is pending - meaning it has not actually been written yet.

    The it function takes a second parameter, teh actual test to be run.

1. Mocha provides the structure, but we need to add the actul test with assertions.

    Node has assertions, but we will be using chai as it has a lot of features and BDD style options.

    In `1test-arrays.js`, require the chai assertion library.

    ```javascript
    const assert = require('chai').assert;
    ```

1. Now add the 2nd parameter to the it function. It is a callback function. Let's test that if an index is too big for the array, that -1 is returned.
    ```javascript
    function() {
      assert.equal([1,2,3].indexOf(4), -1);
    }
    ```

1. Go back to the terminal and run `npm test` - you should now see a checkmark and that the test is passing.

1. Add another test, after the first one. Where given an array, and checking the first item, that 0 is returned. You can use `[1,2,3].indexOf(1)` to get you started. Scroll down for help and to continue:

    ```javascript



























        it('should return -1 when the value is not present', function() {
        assert.equal([1,2,3].indexOf(4), -1);
        });

        it('should return 0 when the value is 1st element', function() {
            assert.equal([1,2,3].indexOf(1), 0);
        });
    ```

1. Add a new test (new it block) that should start at a given index. Define the it block with an appropriate name, and use this assertion and test. It should fail - can you tell why?  
    ```javascript
    assert.equal([1,9,2,9].indexOf(9, 2),1)
    ```

1. Fix the expected result and re-run.
        
1. Writing tests against APIs you are not as familiar with can be a good way to practice both. Let's do another describe block, still under array, but for a new function. Add this describe block after the one for  #indexOf

    ```javascript
        describe('#filter()', function() {
    
    });
    ```

1. Run npm test and see how no feedback is given. You must have an it inside to be evaluated.

1. Add this code inside the describe. Test you have added it correctly by running `npm test`.

    ```javascript
    it('should filter evens', function() {

            const allNums = [1,2,3,4,5,6];
            const evens = allNums.filter(function(element) {
                return (element % 2 == 0);
            })

            assert.include(evens, 2);
            assert.notInclude(evens, 3);
        })
    ```

     Does it make sense to you? Notice the usage of include and notInclude - these are from the chai assertion library.

1. Re-run and notice how both describe blocks are organized underneath the main category of Array.

1. As we add more logic, it is nice to use ESLint to catch any errors.  
    `npm install eslint -D`

1. Copy the ESLint config file from the same directory as this README into your current project folder.

1. Return to your test file in the editor and notice the errors. ESlint must be told about the usage of mocha. 

1. Edit your .eslintrc.json file by adding in mocha to the env property. Notice as you start typing mocha, there is autocompletion.

    ### Using should

1. Create another file `test/2test-should.js`

1. US this code at the top of yoru file:

    ```javascript
    var chai = require('chai')
    , expect = chai.expect
    , should = chai.should();
    ```

1. Note: The BDD style of `expect` is a function, `should` is returned from a function.

1. READ: The `expect` interface provides a function as a starting point for chaining your language assertions. It works on node.js and in all browsers.

    The should interface extends Object.prototype to provide a single getter as the starting point for your language assertions. It works on node.js and in all modern browsers except Internet Explorer.

1. Create a describe block called BDD and inside of it, another describe block for #should.

1. Add this code inside the #should block. 

    ```javascript
     it('should work with should', function () {

            let foo = 'bar'
                , beverages = { tea: ['chai', 'matcha', 'oolong'] };

            foo.should.be.a('number');//pass a string for correct datatype
            foo.should.equal();//pass a string value
            foo.should.have.lengthOf();//pass a number value
            beverages.should.have.property('tea').with.lengthOf();//pass  value and length
        });
    ```

1. Run the code and it fails. Update the code to make it work following the comments.

1. Once working notice the format of the output.

    ### Write some other code and test it.

1.  Add a new folder called `app`.

1. Inside of the folder create a module called `numbers.js`

1. In the module define an array of the numbers 1 to 100. 

1. Create and export 2 functions getEvens and getOdds.
    * getEvens uses filter to return array of even numbers
    * getOdds uses filter  to return array of odd numbers

1. Write a test called `testNumbers.js`

1. Use mocha and chai to test that both functions work. Example checks: check for certain numbers being in the array, check the length of the array returned.

1. Mark your work as complete.

## Bonus

1. Create a scores.js module with an array of three objects such as let scores = [{homeTeam: 'Steelers', awayTeam: 'Ravens', homeScore:21 , awayScore:3 }]

1. Write getWinners and getLosers functions that return the winners and losers. 

1. Write test code to check your code is working correctly using chai BDD type statements. 

    Can you write code that uses: 
    
    ```javascript
    expect(winners).to.have.lengthOf(3);
    ```


