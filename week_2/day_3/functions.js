// functions
// blocks of code that take in some input and gives relevant output

// declaring a function
function square(x) {
    return x * x ;
}

// invoking or executing a function
const fiveSquared = square(5);
console.log(fiveSquared);

const threeSquared = square(3);
console.log(threeSquared);

// when to use return keyword

// declare the function myFunc()
function myFunc(anObject) {
    console.log(anObject.active);
}

const user = {
    active: true,
    userName: 'Harry',
    loginAttempts: 8,
};

myFunc(user);

// arguments and parameters
function getUserDetails(firstName, lastName, email) {
    const userDetails = `Name: ${firstName} ${lastName}, Email: ${email}`;
    return userDetails;
}

console.log(getUserDetails('Charlie', 'Horn', 'chimpy@gmail.com')); 

function getUserDetails1(firstName, lastName, email="None given") {
    const userDetails = `Name: ${firstName} ${lastName}, Email: ${email}`;
    return userDetails;
}

const newUserInfo = getUserDetails1("Pete", "P")
console.log(newUserInfo);

// declare a function called 'multiply' that takes an input of 2 numbers and multiplies them
function multiply(num1, num2) {
    return num1 * num2;
}

// declare a function called sumArray that takes an array as an argument and returns the sum of all items
function sumArray(array) {
    let total = 0
    for(let item of array) {
        total += item;
    }
    return total;
}

let numbers = [2, 4, 6, 8, 10];
console.log(sumArray(numbers));

// declare a function that takes an input of a number and returns true if the array contains a number and false if the array doesn't contain the number
function isInArray(number , array) {
    for (let item of array) { 
        if (item === number) {
            return true;
        }
    }
    return false;
}

console.log(isInArray(3, [3, 6, 1, 8]));

// add a function to the person object that returns a string in the format "Brendan Eich is 62 years old"

let person = {
    name: {
        first:'Brendan',
        last:'Eich',
    },
    age: 62,
    getDetails: function () {
        return `${this.name.first} ${this.name.last} is ${this.age} years old`
    }
}

console.log(person.getDetails()); 


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
