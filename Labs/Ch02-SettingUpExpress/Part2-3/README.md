# Chapter 2 Exercise 3: Working with static assets
## Objectives:
* View usage of static assets files from in /public folder 
* Add a favicon.ico from /Libs dorectory and enable it

## Steps

### Use CSS

1. Navigate to your `express1/lab-project` folder.

1. If you successfully completed the last exercise, continue with your project. Otherwise rename your lab-project (and ask intructor or others for help later) and copy the `Solution/lab-project` from the last exercise to continue.

1. Start the project if needed, and launch http://localhost:3000 in browser. Refer to the README.md in `/Labs/Ch02-SettingUpExpress/Part2-2` if you need more help with launching the server.

1. Modify the `style.css` file to make all body text red. Add 
`color: red;` inside the body selector.

1. Refresh the browser, at the URL http://localhost:3000. Is it updated? Is the text red?

1. Now try http://localhost:3000/students

1. Is the text red?  Why or why not?

### Add a favicon 

1. Find the file `/Libs/Part2-3/favicon.ico` in your courseload and copy it into your projects `/public` directory.

1. Copy this line into your `layout.pug`, at the same indentation as the other link in the head section:
    ``` link(rel="shortcut icon", href="favicon.ico", type="image/x-icon") ```      

1. In app.js, find this section of code and uncomment the line for the favicon usage:
    ``` javascript
    // uncomment after placing your favicon in /public
    app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
    ```

1. You may need to re-open a new tab in the browser, but you should see the favicon now in the browser tab.