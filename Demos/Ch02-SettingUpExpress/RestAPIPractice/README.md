# Chapter 2 Demo: Rest APIs

## Objectives:
* Practice with request / response
* Use Postman
* create your own REST API with GET & POST

## Steps

1. Do an npm install and npm start

	## Make GET requests

1. In the browser, go to the URL http://localhost:3000

1. How is this page being generated? Open `app.js` and trace through the different routes to find the function. Add this text to the response.

	```html
	<h1>GET requests for data</h1>
	```

1. Refresh the browser. Do you see your new text?

1. Click the links in the browser. Can you find where these routes live? 

1. View this link in the browser: http://localhost:3000/user/

1. Open the file `user.js` in the editor.  Read through data in the hard-coded array to see the source of the data in the browser. Find this route (near line 32) to see how the data is being sent back:

	```javascript
	router.get('/user/'
	```

1. Open Postman and make a GET request to http://localhost:3000/user/ to see the same data but in a nicer format.

	Continue using Postman for rest of demo.

1. Change the URL to display only user 4: http://localhost:3000/user/4 

1. Find the code near line 39 which matches this:
	```javascript
		router.param('id', function (req, res, next, id) {
	```

1. What is happening in this route? 

1. Notice there are two matching routes with `router.get('/user/:id` , which allow the id value to be used. What is the way the route parameter for id is being accessed?

1. Now try this route http://localhost:3000/user/6/interest and then http://localhost:3000/user/6/interest/1

1. Starting near line 62 is code to display the interests. How is one particular interest sepcified in the route, and obtained in the code? 


	## Make a post request

1. In Postman, first go back to looking at the data of all users:
a GET request to http://localhost:3000/user/

1. Copy the last object { } by highlighting it and using control+c

1. In postman, change the GET dropdown to be a post. Underneath, you should see a menu with Body as the third option. Choose body.

1. A new menu should appear with `raw` as the 3rd option. 

1. Choose raw, then a drop-down should be present two places to the right, mke sure that `JSON application/json` is selected.

1. Paste the object that you copied, but change the id value to one higher, and change the values up.

1. Hit Send. And notice the bottom of Postman has the status code displayed. You should see a 201 - created successfully.

1. Use the Git menu to discard any changes you made to the demos folder.


## Create a Rest API
1. Create a folder `WIP\Ch02\Rest`

1. Use the express app generator to create a project called rest-api

1. Create an array of your friends, with id, name, and an array of hobbies.

1. You will now create a short Rest API that returns data imply as JSON.

	Refer to the demos on sending data and routes in completing the following steps.

1. Create a GET route that returns all friends at /friends

1. Create a GET route that returns a specific friends at /friends/1 etc.

1. Create a GET route that gets just the hobbies for a specific friend.

1. Create a GET route that gets just one hobby for a specific friend.

1. Create a Post route to add a new friend. 

	* for each one take the appropriate action return the array, add to it (push) 

1. Test using Postman

1. Mark your work as complete. 

## Bonus

1. Implement a DELETE for /user/id 

1. Implement a PUT for user/id with a body passed