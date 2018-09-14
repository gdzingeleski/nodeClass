# Chapter 1 Exercise 1: ES6 Practice

## Objectives:
* Create a small application file and execute it
* Practice with some of the newer ES6 features.

### Help

If you need help you can refer to the demos for this chapter. There is a similar example using sports.

## Steps

1. In Ch00 you should have created a `WIP` directory. In this directory create another directory so that you have this structure: `WIP/Ch01/es6`


1. Create a file in the new directory called `myHobbies.js`.  You can right click the folder and choose new file, or click the new file icon in the menu when the folder is selected.

1. In this new file, create an array called `myHobbies` with 3 objects, each object represents a hobby.  Each hobby object should have a property for the `name`, and `lengthInYearsAtHobby`. 

1. Create a function called `printHobbyInfo` that takes in one hobby and prints it's properties using console.log using  ES6 backticks. Output should be similar to this:

    `volleyball has been an interest for 20 years`

1. Use a forEach loop and through the array items and call the function for each item. 

1. Run from the command line using `node myHobbies`

1. Now, sort the hobbies by alphabetical name using myHobbies.sort() and passing in a function to explain how to sort when given two values. 

    Recall: return negative, zero, or positive

    More help: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort 

1. Sort by the `lengthInYearsAtHobby` - and use an arrow function.

1. Mark your work as complete. 

#Bonus

1. Add a few more objects to the array and have some with the same lengthInYearsAtHobby value. Sort by years, and when years are same, sort alphabetically.

