const bookshelf = require('../bookshelf');

//declare a User object that extends built-in bookshelf Model 
//with a table name, in this case users table

var User = bookshelf.Model.extend({
	tableName: 'users'
});

// Finally, export User and we are done with model.

module.exports = {
	User: User
};