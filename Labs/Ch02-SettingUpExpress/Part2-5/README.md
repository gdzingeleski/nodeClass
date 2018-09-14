# Chapter 2 Exercise 5: Iterate over data

## Objectives:

Update the students view to display array data from the server

## Steps

1. Continue working in your express1 project

1. Launch http://localhost:3000 in browser. Refer to previous exercises if you need more detail.

1. In the terminal install the `moment` package and add it as a dependency to the package.json.
`npm i -S moment`

1. In the student router, create a student array to be used in the student view - notice the use of moment to format dates.

	``` javascript
	let students = [{
		nameFirst: "Devin",
		nameLast: "Durgan",
		email: "Devin.Durgan@gmail.com",
		hireDate: moment("01/19/2015", "MM/DD/YYYY")
	}, {
		nameFirst: "Cristal",
		nameLast: "Adams",
		email: "Cristal.Adams@live.com",
		hireDate: moment("07/29/2016", "MM/DD/YYYY")
	}, {
		nameFirst: "Nettie",
		nameLast: "McGlynn",
		email: "Nettie.McGlynn@gmail.com",
		hireDate: moment("08/29/2015", "MM/DD/YYYY")
	}];
	```

1. Modify the render all in this student.js file to pass students as well as title:
	```javascript
	/* GET users listing. */
	router.get('/', function(req, res, next) {
	// res.send('Students will go in here');
		res.render('students', { 
		title: 'Students' ,
		students: students
			
		});
	});
	```

1. Delete these 3 files in your \views directory - and then copy the `index.pug`, `layout.pug` and `students.pug` from `/Libs/Part2-5` into your views directory.

1. Notice that the new index.pug has `Welcome to #{title}`

1. Notice that the layout.pug has `Student Manager Application`

1. Notice how the `student.pug` is dsplaying the student data. 

1. Test that you can see the students in the browser when you click on the student link.

1. Notice how in student.pug there is an if conditon to display if no students are present. 

	Comment out students inclusion in router and test in browser that you see the other output.
	
	Once the conditional works - then take out the comment and confirm students are once again displayed.

## Make things pretty

The following will modify the application to have links to the routes files. It uses Bootstrap for styling. 

1. Delete the `/public/javascripts` and `/public/stylesheets` directories. 

1. Copy the css and js folders from `/Libs/Part2-5` into the `/public` folder.

1. Load in the browser and you should now see a nicer styled output