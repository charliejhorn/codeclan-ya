let emailAddress = 'me@gmail.com';
let numberOfLogins = 40;

// Declaring variables
// camelCasing
let myName;
let myAge;

console.log(myName);

// console.log(cohortName);

myName = "Charlie";
myAge = 18;

console.log(myName);

// change or update the value of the variable
emailAddress = "me123@gmail.com"

console.log(emailAddress);

// declaring a constant variable
const animal = 'eagle'

// data types
let foo = 42;
foo = 'bar';

console.log(foo);


let firstName = 'john'
let lastName = 'fox'
fullName = `${firstName} ${lastName}`
console.log(fullName);

console.log(firstName.length);
console.log(firstName.toUpperCase());

let isLiked = false;
if(isLiked) {
    console.log("I am loved");
};

// array
let favourites = ["Star Wars", "Pinocchio", "Shrek", "Shrek 2", "The Goonies"];
console.log(favourites);

// object
let creature = {
    name:"Gregory",
    breed:"Shrek",
    favFoods:['people', 'donkey', 'the muffin man']
};
console.log(creature.favFoods);

creature.age = 420;
console.log(creature.age);

// Task 1
// Declare and initialise a variable called myPet and give it the value "Cat"; Note, we might have to to change it later
// to "Dog" so should we use let or const?
let myPet = 'Cat';

// Task 2
// Log out the value of myPet and the length of myPet using a template string
console.log(myPet, myPet.length);

// Task 3
// Declare and initialise a constant called daysInYear with a value of 365
const daysInYear = 365;

// Task 4
// Declare a variable called monthsInYear with a value of 12
// Declare another variable called averageDaysInMonth with a value of daysInYear divided by monthsInYear
// Log out averageDaysInMonth
const monthsInYear = 12;
let averageDaysInMonth = daysInYear / monthsInYear;
console.log(averageDaysInMonth);

// Task 5
// JavaScript has some built in modules that we can use.
// One of them is Math.
// Round averageDaysInYear using Math.round()
averageDaysInMonth = Math.round(averageDaysInMonth)


// Task 6
// Log out the remainder of 7 / 3
console.log(7 % 3);


// Task 7
// Generate a random number!
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Task 8
// Declare a variable called warningMessage with a value of "danger!"
// Log out the value of warningMessage in uppercase
let warningMessage = "danger!"; 
console.log(warningMessage.toUpperCase());


// Task 9
// Declare a variable called topSnacks with a value of an Array populated with strings
let topSnacks = ["Penguin", "Tim Tams"]

// Task 10
// Declare a variable called shoppingBasket with a value of an Object.
// The keys should be items and the values should be prices
let shoppingBasket = {
    penguin: 2,
    timTams: 2,
    car: 10000,
}