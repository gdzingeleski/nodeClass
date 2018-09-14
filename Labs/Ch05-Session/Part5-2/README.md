# Chapter 5 Exercise 2: Session storage via the database

## Objectives:
	* Use connect-session-knex to store the session info in the db

## Steps 

1. Navigate to your `MyPractice/lab-project` folder.

1. If you successfully completed the last exercise, continue with your project. Otherwise copy the solution from the last exercise.

1. In app.js require connect-session-knex and make sure it is installed. Pass in expressSession.
	```const connectSessionKnex = require("connect-session-knex")(expressSession);```

1. Update the use of expressSession to have a property called store, and use connectSesionKnex to create a new db session.	
	``` javascript
	router.use(expressSession({
		secret: config.sessions.secret,
		resave: false,
		saveUninitialized: false,
		store: new connectSessionKnex({
			knex: db
		})
	}));
	```

1. Test the http://localhost:3000/ site and notice the newly added knex logging messages about storing the session in the db. Check the database and see the newsession table that is being used.