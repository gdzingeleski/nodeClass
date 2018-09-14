# Chapter 5 Exercise 1: Update Login Route to use Sessions

## Objectives:
* Create a small program that generates a secret code to use in sessions
* Update the Login Route to save user info in session


## Steps 

1. Navigate to your `MyPractice/lab-project` folder.

1. If you successfully completed the last exercise, continue with your project. Otherwise copy the solution from the last exercise.


### Generate a secret key to be used for sessions
1. Create a small application that generates a secret key. In your `MyPractice` folder, at the same level as `/lab-project` create a new directory called `/generate-secret-key`

1. Create a very basic javascript program that requires the crypto package and uses it to generate a random string. Refer to the slides or documentation if you need more info.

1. Run your new program and store the generated key in the `config.json` file as a property called `"secret"`

1. Ensure that config.json is being required in `app.js`

### Add the usage of expressSession to your app
1. In `app.js`, require `express-session` as a module dependency, and add it to package.json 

1. Add this middleware in `app.js`, before any included routes. Notice that it uses `expressSession` and references the secret that is stored in the config module. 
    ``` javascript
	router.use(expressSession({
		secret: config.secret,
		resave: false,
		saveUninitialized: false,
	}));
    ```

### Promisify the session methods

1. Create a new module in the middleware folder called `sessions-promises.js`. Add the following code. The point of this is to be able to save, destroy and reload sessions in a way that is wrapped in a promise. Notice that in the Promise.promisify() calls, the first argument is the function to Promisify, and the second argument contains the `context` - meaning, it's passing in the reference to look for the given function.

	```javascript

	const Promise = require("bluebird");

	module.exports = function(req, res, next) {
		req.saveSession = Promise.promisify(req.session.save, {context: req.session});
		req.destroySession = Promise.promisify(req.session.destroy, {context: req.session});
		req.reloadSession = Promise.promisify(req.session.reload, {context: req.session});
		next();
	};
	```

1. Add the inclusion of this middleware to the `app.js` - before any of the included routes. This will ensure the req object is set with the new methods, and is available on middleware that follows.
	```router.use(require("./middleware/sessions-promises"));```

### Save the User info to the session once logged in

1. Open the `index.js` route in order to store information in the session. Find the `/login` route and just before the redirect, save the user session info.

	``` javascript
	req.session.userId = user.id;
	req.saveSession();
	console.log(`Saved the user session`);
	res.redirect("/");
	```

1. Find the first middleware that was created to log the time. Add to it so that it will display a session ID and the number of times that session was accessed. 
	``` javascript
	router.use(function (req, res, next) {
	console.log(`Time: ${moment().format('MMMM Do YYYY, h:mm:ss a')}  `);

	if (req.session.views) {
		req.session.views++
	} else {
		req.session.views = 1
	}
	console.log(`*** ID:${req.sessionID} with UserID: ${req.session.userId} has: req.session.views = ${req.session.views}`);
	next();
	});
	```

1. Ensure the app is running correctly. Open Chrome and test the URL: http://localhost:3000

1. Notice the output includes the session ID, that the user ID is undefined, and the views is 1

1. Refresh the browser to see the views increase

1. Open Firefox and hit the URL:   http://localhost:3000 Notice the session ID and view count is different.

1. Log in to one of the browsers using username `user` and password `pass`. Notice in the log that the UserId is now in the log message.

