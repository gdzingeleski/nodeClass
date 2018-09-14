# Chapter 4 Exercise 3: 

## Objectives:
* Add the use of bookshelf to create a User model
* Use the model to create CRUD operations in the user router
* Modify the login route to use the database

## Steps 

### Add the use of bookshelf to create a User model

1. Navigate to your `MyPractice/lab-project` folder.

1. If you successfully completed the last exercise, continue with your project. Otherwise copy the solution from the last exercise.

1. We will be using bookshelf - add this as a dependency to package.json.

1. Create a copy of `db.js` and name the copy `bookshelf.js`

1. Modify the contents to create an instance of bookshelf and export this.

1.  At the root of the project, in `/lab-project` create a directory called `models` and inside create a file called `User.js`

1. In this file require bookshelf: 
    ```const bookshelf = require('../bookshelf');```

1. Declare a User object that extends built-in bookshelf Model with a table name, in this case users table
    ```javascript
    var User = bookshelf.Model.extend({
        tableName: 'users'
    });
    ```

1. Finally, export User and we are done with model.
    ```javascript
    module.exports = {
        User: User
    };
    ```


### Use the model to create CRUD operations in the user router
1. Let's update the `routes/users.js` to:
    * Use express-promise-router
    * Use the User model and define methods for different CRUD operations
    * If you feel comfortable, try for solution, otherwise, copy the file `/Lib/Part4-3/users.js` into `routes/users.js`

1. Bring up the URL: http://localhost:3000/users - you should see JSON being returned

1. Use postman to test the POST, DELETE, GET 

GET http://localhost:3000/users
POST http://localhost:3000/users
with this data:
{
        "username": "allas",
        "password": "aaaa"
}

GET http://localhost:3000/users/3


DELETE:
http://localhost:3000/users/3


### Modify the login route to use the database

1. Let's update the /login route to look at the database based upon the username.

1. Modify `app.js` to pass the db to `index.js`. You can pass the state object which contains the db.

1. Modify the `index.js` to do the following, if need be copy `index.js` from `Libs/Part4-3/index.js`
    * Use express promise router
    * Receive the db info 
    * Use the db info to check the database for supplied username, and see if password matches
    * Export the router 
  
1. Test your work and check that the new version of /login route works. 

