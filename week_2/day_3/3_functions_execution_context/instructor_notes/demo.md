# Functions

## Overview

By the end of this part, students should know how to:

- Declare functions
- Return values from functions
- Call functions with arguments
- Understand parameters & default params
- Use correct terminology
- Function execution context

Stick to the basic named function structure for now (i.e. don't go into arrows or anonymous functions)

<a href="https://docs.google.com/presentation/d/1xgsUPG910zAhUVKHbvnAjEJ_x9J-syANPwVFhwKipww/edit?usp=sharing">Companion notes</a>

## I Do

```javascript

//Functions are one of the fundamental building blocks in JavaScript. A function in JavaScript is a set of statements that performs a task or calculates a value. It should take some input and return an output where there is some obvious relationship between the input and the output.

// Declaring a function
function square(number) {
  return number * number;
}

// Invoking (calling) functions
const fiveSquared = square(5); // 25
const threeSquared = square(3); // 9


// When we use the return keyword in a function, the function execution ends
// We don't HAVE to return anything. However, this is known as a side effect which is generally undesireable.

// Declare the function 'myFunc'
function myFunc(anObject) {
  console.log(anObject.active);
}

/*
 * Declare variable 'user';
 * create and initialize a new Object;
 * assign reference to it to 'user'
 */
const user = {
  active: true,
  userName: "john123",
  loginAttempts: 8
};

// Pass object reference to the function
myFunc(user); // logs `true`


// Arguments and parameters
// Declare the function `getUserDetails` that takes 3 arguments
// We define it with 3 parameters
// Parameters are similar to variables in that they
// are labels for data that get stored in our
// function’s local memory

function getUserDetails(firstName, lastName, email){
  const userDetails = `Name: ${firstName} ${lastName}, Email: ${email}`
  return userDetails;
}

// The number of parameters has to match the number of arguments. IN THE RIGHT ORDER. 

getUserDetails() // 'Name: undefined undefined Email: undefined'
getUserDetails("Keith", "D", "me@gmail.com") // 'Name: Keith D, Email: me@gmail.com'


// Default parameter
// A default parameter is a way to set default values for function parameters if a value is not passed in
// They have to come at the end of the parameter list

function getUserDetails(firstName, lastName, email="None given"){
  const userDetails = `Name: ${firstName} ${lastName}, Email: ${email}`
  return userDetails;
}

getUserDetails("Keith", "D") // 'Name: Keith D, Email: None given'

```

## We Do Together

```javascript
// Task 1
// Declare a function called 'multiply' that takes an input of two numbers and returns those numbers multiplied together
function multiply( num1, num2 ){
  return num1 * num2;
}

// Task 2
// Declare a function called sumArray that takes an array as an argument and returns the total of all the values in that array
function sumArray(arr){
  let total = 0;
  for (let n of arr) {
    total += n;
  }
  return total;
}

let numbers = [2, 6, 1, 3, 9, 15];
sumArray(numbers); // 36

// Task 3
// Declare a function that takes input of a number and an array and returns true if the array contains that number and false if it doesn't

function containsValue(num, arr){
  for (let n of arr) {
    if (n === num) {
      return true;
      // the function will end here
    }
  }
  return false;
}

// Call the function
containsValue(3, [1, 2, 3]); // true
containsValue(5, [1, 2, 3]); // false

// Task 4
// Remember how an object can have anything as a value? Add a function to the person object that returns a string in the format "Brendan Eich is 62 yrs old"

const person = {
  name: {
    first: 'Brendan',
    last: 'Eich'
  },
  age: 62,
  getDetails: function() {
    return `${this.name.first} ${this.name.last} is ${this.age} yrs old`;
  }
};

// `this` refers to the object to the left of the `dot` when calling the function. In this case, the person object.
person.getDetails() // 'Brendan Eich is 62 yrs old'


// Task 5
// Use the correct terminology to describe the following code

function getGreeting(userName, timeOfDay="day") {
  return `Good ${timeOfDay} ${userName}!`;
}

console.log(getGreeting("Ailsa", "morning"));
console.log(getGreeting("Laura"));

/* We are declaring (or defining) a function called getGreeting 
  that takes 2 arguments (or with 2 parameters) - userName and timeOfDay. timeOfDay defaults to 'day'.

  We then call (or invoke) getGreeting twice, passing the return value to console.log
*/

```

## I Do - Function execution context

```js
// When a function runs (executes) it creates it's own space in memory known as the execution context.
// Outside a function, this is the `global context`.

/* If we declare variables inside a function with let, const or var, they will only
   exist while the function executes. Likewise, parameters only exist while the function executes.
   I.E. they are `function scoped`.
*/

function sherlockScope(buddyName){
  let firstName = "Sherlock";
  var lastName = "Holmes";
  const buddy = buddyName;

  return `${firstName} ${lastName} has a buddy called ${buddy}`;
}

console.log(sherlockScope("Watson")); // Sherlock Holmes has a buddy called Watson

console.log(firstName); // ReferenceError: firstName is not defined
console.log(lastName); // ReferenceError: lastName is not defined
console.log(buddy); // ReferenceError: buddy is not defined
console.log(buddyName); // ReferenceError: buddyName is not defined

```



