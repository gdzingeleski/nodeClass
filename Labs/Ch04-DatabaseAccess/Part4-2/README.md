# Chapter 4 Exercise 2: Add migrations

## Objectives:
* Add migrations to the project for a users table called `users`
* Use seeds to populate the db

## Steps 

### Add migration for users table

1. Navigate to your `MyPractice/lab-project` folder.

1. If you successfully completed the last exercise, continue with your project. Otherwise copy the solution from the last exercise.

1. Review the `knexfile.js` and recall that this version of the file can be used in different environments. 

1. Execute this from the command line. 
	``` knex migrate:make create_users```

1. Look in the newly created migratons folder at the created file.

1. Modify the file so that on `exports.up`, it:
	* Creates a `users` table with `id` as a primary key that increments
	* Has a string `username` that cannot be null and is unique
	* Has a string `password` field which is text that cannot be null
	* and on `exports.down`, it drops the table
	* SCROLL DOWN FOR HELP CREATING THE FILE CONTENTS...

    ``` javascript
    



















	exports.up = function(knex, Promise) {
		return knex.schema.createTable('users', function (table) {
			table.increments();
			table.string('username').notNull().unique();
			table.string('password');
			table.timestamps();
		});
	};

	exports.down = function(knex, Promise) {
		return knex.schema.dropTable("users");
	};
    ```

1. Run the migration with this command. The default is developent, if you would want to run for another env you can specify it with `knex migrate:latest --env test`

	```knex migrate:latest```

1. Check the DB for the added `Users` table

1. Drop the table from the client database software, pgAdmin.

1. Try to run this again
	```knex migrate:latest```

1. You will likely get a message that it is already up to date and if so - you must drop the knex_migrations related tables before you can run the command again.  Do that now with pgAdmin, and try to run the command again.
```knex migrate:latest```

1. Be sure you end this exercise with the users table in the database, it will be used in future exercises.


### Use seed for users

1. Execute this command: `knex seed:make users`

1. Look for the newly created directory and file: `/seeds/users.js`

1. This allows seed data to be provided. Update the contents fo the file to this:
	``` javascript
		exports.seed = function(knex, Promise) {
		// Deletes ALL existing entries
		return knex('users').del() // Deletes ALL existing entries
			.then(function () { // Inserts seed entries one by one in series
				// Inserts seed entries
				return knex('users').insert([
					{id: 1, username: 'user', password: 'pass' },
					{id: 2, username: 'judy', password: '1111' }
				]);
			});
		};
	```

1. Execute this to populate the table: 
	```knex seed:run --env development```

1. Check the database, you should now see the records.



## Add a new migration file

1. Now create a new migraton to add a new column to the users table. We really shouldnt store password as plain text, but instead - a hash of it.
	* Think of the command to create a new migration file
	* Think of the logic to add/remove the column
	* Scroll down...
	```














	```
1. Execute the command: 	``` knex migrate:make add_hash_column_users```
This allows seed data to be provided. Update the contents of the file to this:
	``` javascript
		exports.up = function(knex, Promise) {
			return knex.schema.table("users", function(table){
				table.string("hash");
			});
		};

		exports.down = function(knex, Promise) {
			return knex.schema.table("users", function(table){
				table.dropColumn("hash");
			})
		};
	```

1. Run the command:
	```knex migrate:latest```

1. Check the database the new column should be available

1. Run the command:
	```knex migrate:rollback```

1. Check the database the new column should be gone now

1. Run the command:
	```knex migrate:latest```

1. Check the database that the new `hash` column in `users` is present. This is what we need for future exercises.
