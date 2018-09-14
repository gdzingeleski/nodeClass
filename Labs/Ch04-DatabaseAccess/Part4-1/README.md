# Chapter 4 Exercise 1: Database Access

## Objectives:
* Get students from the databse rather than a file

## Steps 

1. In `WIP` create a dircetory called `4-1`.

1. Copy the `lab-project` folder from this directory to your `WIP\4-1` folder.

1. Open that folder at the terminal, and run `npm i` then `npm start`

1. Open the browser and clik the student link, you should see 3 students. Where is this data coming from?

1. What dependencies are necessary to connect to the database? Add them to package.json. Scroll down to verify and add any missing dependencies.
	```


















	```

	Install pg and knex and add to package.json. You can do this in one step from the command line 
	`npm install -S pg knex `

1. Open another terminal here, and use this knex CLI command ```npx knex init``` to create a `knexfile.js`.

1. Open the created `knexfile.js`. This version of the knexfile can be used in different environments. View the contents and note how you can setup connections for different environments.

1. Instead of hard-coding values to the database, it is better to add a `config.json` file to the project. Add a new `config.json` to the root directory, with this content:
	```
	{
		"env": "development",
		"database": {
			"hostname": "localhost",
			"username": "postgres",
			"password": "password",
			"database": "studentmanagement"
		}
	}
	```

1. In the knexfile.js add this reference at the top:
	``` const config = require("./config.json"); ```

1. 	Modify the development settings in knexfile.js to look like this:
	```javascript	
	 development: {
		client: "pg",
		connection: {
		host: config.database.hostname,
		user: config.database.username,
		password: config.database.password,
		database: config.database.database
		}
 	 },
	```

1. Create a `db.js` file in the project root, that:
	* requires knex, knexfile and config
	* Creates a database connection pool passing the env from config.json
	* Try this now, and scroll down for help or to continue
	``` javascript
















	const knex = require("knex");
	const knexconfig = require('./knexfile.js'); 
	const config = require('./config.json'); 

	const db         = require('knex')(knexconfig[config.env]);

	module.exports = db;
	```

1. In `app.js`, we want to use this new module. Make sure you require it at the top of your `app.js` file.   Scroll for help or to continue.

	```





















	const db = require('./db');
	```
	
1. Find the `state` object in app.js and modfy it to add db to it. We will use this to pass the student router the database information. 

	``` javascript
	let state = {
		db: db,
		errorReporter: errorReporter
	}
	```

1. Change the require of the student router to pass the state to the student roter module like this:
	``` const students = require('./routes/students')(state); ```

1. Change the `routes/students.js` file to the structure below...it removes the hard-coded students, and changes the module.exports to a function that accepts {db}, and now uses the express-promise-router:
	
	```javascript
	const expressPromiseRouter = require("express-promise-router");
	const Promise = require("bluebird");
	const moment = require('moment');
	const router = expressPromiseRouter();
	
	module.exports = function({db}) {
		
	router.get("/",  (req, res) => {
		return Promise.try(() => {
			return db("students");
		}).map((student) => { //process each student
			student.fullName = student.nameFirst + ' ' + student.nameLast;
			student.hireDate = moment(student.hireDate, "MM/DD/YYYY")
			return student;
		}).then((students) => {
			res.render("students", {
				students: students
			});
		}).catch(err => {
			res.render("students", {
				students: null
			});
	       });
	});
	```

1. Confirm with the pgAdmin client that you have a studentmanagement database with a student table containing records. 

1. Test your changes in the browser, by clicking on the student link do you see the student records from the database?

1. It can be helpful at times to see the generated SQL. You can do this by adding the knex-logger package to your project as a dependency in app.js.
	```npm i -S knex-logger```
	```const knexLogger = require('knex-logger');```

1. Now you can add middleware that logs the SQL calls.
	``` app.use(knexLogger(db)); ```

1. Test this is working by visiting the students URL.










