# Chapter 5 Exercise 3: Registering and Authenticating Users

## Objectives:
* Setup a /register routes to allow users to register
* Handle duplicate usernames
* Use a hash to more safely store the password
* Update the /login to compare the supplied password with the hashed value

## Steps 

### Setup /register routes

1. Navigate to your `MyPractice/lab-project` folder.

1. If you successfully completed the last exercise, continue with your project. Otherwise copy the solution from the last exercise.

1. Copy the register.pug from `/Libs/Part5-3` into this project's `/views/admin` directory.

1. In the `index.js` route, add a route handler for `/register` that causes the admin/register page to render. 
	``` javascript
	router.get("/register", (req, res) => {
		res.render("admin/register");
	});
	```

1. Visit the Login page http://localhost:3000/login which has the Register button. Click it,  you should reach the Register page.

1. Now add a route handler for the POST request to `/register`. Read over the below code:
	* Note the use of scryptForHumans to hash the passed in password
		- What is returned by this call?
		- add scrypt-for-humans to your project and require it in this file
	* Note how the userId is added to the session once inserted successfully
		- and how the session is saved	
	* How databaseError is used to translate from a pg error to a general error
		- install and require database-error

	```javascript
	router.post("/register", (req, res) => {
		return Promise.try(() => {
		return scryptForHumans.hash(req.body.password);
		}).then((hash) => {
		return db("users").insert({
			username: req.body.username,
			hash: hash
		}).returning("id");
		}).then((users) => {
		let user = users[0];

		req.session.userId = user.id;
		return req.saveSession();
		}).then(() => {
		res.redirect("/");
		}).catch((pgerr) => {
		databaseError.rethrow(pgerr);
		}).catch(duplicateUsername, (err) => {
		throw new errors.ValidationError("Username already exists");
		});
	});
	```

1. Notice also in the code the use of duplicateUsername. This is a possible error that can be thrown. To make this work, we must define this. A good place is at the top of the file after the require statements:

	``` javascript
		let duplicateUsername = {
			name: "UniqueConstraintViolationError",
			table: "users",
			column: "username"
		}
	```

1. This code uses the customError of ValidationError, be sure that custom errors is required at the top of the router file. 

1. Test that you can register new users at http://localhost:3000/register
	* supply a username of `bbbb` and a password of `cccc`

1. Verify in the db the new user is added.

1. Try it again. Do you see the correct error message?

1. Can you log in now with `bbbb` and `cccc`? If not, why?  Scroll down...
	```














	```


### Need to update the /login to use the hash, so it matches what is stored in db

1. Update the /login route so that it uses `scryptForHumans.verifyHash` to compare the supplied value versus the hash. 
	```javascript
	router.post("/login", (req, res) => {
			return Promise.try(() => {
				return db("users").where({
					username: req.body.username
				}).first();
			}).then((user) => {
				if (user == null) {
					throw new errors.AuthenticationError("Incorrect username");
				} else {
					return Promise.try(() => {
						return scryptForHumans.verifyHash(req.body.password, user.hash);
					}).then((result) => {
						req.session.userId = user.id;
						return req.saveSession();
					}).then(() => {
						res.redirect("/");
					});
				}
			}).catch(scryptForHumans.PasswordError, (err) => {
				throw new errors.AuthenticationError("Incorrect password");
			});
		});
	```

1. Now verify that you can log in with the with `bbbb` and `cccc`.