# Chapter 1 Exercise 5: SuperAgent

## Objectives:
* Practice with superagent
* Create a delete call

## Steps

1. First, complete the demo which walks you through the demo code and explains usage of package.json scripts: `\Demos\Ch01-ReviewOfNode\super-agent`

1. Once completed, delete the generated node_modules folder in that demos folder, and right-click the folder and choose copy. 

1. Right-click on the `/WIP/Ch01` folder and choose paste so that you now have a `/WIP/Ch01/super-agent` folder.

1. Try using `npm install`, then `npm run start`. Confirm the app is working.

1. Now, you will changes, and you will be able to refresh the browser and test as the watchify task is rebuilding as you save.

    Implement the delete functionality in the `/public/api/js` file.  It should:
    * call the json-server using superagent to delete
    * update the makesLocal array to remove the object that has the same `id` being passed
    * call the function which refreshes the screen

1. Try to do this, if you need help, or when you are done, scroll down this page to continue:

    ```




















    ```

    ### Detailed steps
1. Find this line in `api.js`
    ``` javascript
    alert(`Trying to delete ${id} - not yet implemented`);
    ```

1. After this line use the following code for superagent, and complete the TODO:

    ``` javascript
    request
    .delete(" ")  /* TODO: ADD THE CORRECT URL*/
    .then(function(res) {
        makesLocal = makesLocal.filter(function(el) {
            return el.id !== id;
        });
        alert(`Deleted record`);
        
        showmakes();
    })
    .catch(function(err) {
        /* err.message, err.response */
        throw new Error('An AJAX error occured: ' + err.message);
    });
    ```

1. Test the changes that you have made by deleting an item near the top of the list. The screen should refresh without this item. Examine the db.json, is the item you dleeted gone?

1. Click the trashcan icon in the terminal window to stop the running process.

1. Mark your work as complete.

## Bonus

1. Write a filter form on index.html that allows you to enter characters, and click a button. When the button is clicked use the input to filter the list of displayed makes. 

