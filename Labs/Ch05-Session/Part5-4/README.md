# Chapter 5 Exercise 4: Forcing Logins

## Objectives:
* Modify routes to force a login

## Steps 

1. Navigate to your `MyPractice/lab-project` folder.

1. If you successfully completed the last exercise, continue with your project. Otherwise copy the solution from the last exercise.

1. Look at the Libs directory for Part5-4 and its middleware directory. Copy the `fetch-user.js` into your middleware directory.
What is this file doing? Where should the require for this middleware go?

	```












	```
1. This will get the user session info and put it into the req object. This includes wheter or not the user is logged in. Place this after the code that creates the session in app.js, before any routes are used.


1. Look at the Libs/Part5-4 `require-login.js` and copy it into your middleware directory.
What is this file doing? Where should it go? How do you include it in your app.js?
	```












	```

1. This will check to see if the user is logged in. If not, it will redirect them to the login page.  What is nice, is that you can include this in any middleware that requires being logged in.
Modify your middleware that routes to /students and /users to use this. For example:
	``` javascript
		router.use('/users', requireLogin,  users);
	```

1. Try to reach the URLs that are now protected. 