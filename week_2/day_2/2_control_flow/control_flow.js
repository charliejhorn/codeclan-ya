// conditional statements

/* 
    if (condition is true) {
        execute the code in this block;
    } else {
        do this;
    }
 */

let isRaining = false;

let message = "No umbrella is required";

if (isRaining) {
    message = "Take an umbrella";
} else {
    message = "You're good to go";
}

// console.log(message);




const fruitType = 'Apple';

if (fruitType === 'Apple') {
    console.log('Apples are $2.50 per kilo');
} else if (fruitType === 'Orange') {
    console.log('Oranges are $1.50 per kilo');
} else {
    console.log(`Sorry we have no ${fruitType}`);
}

// switch statement

switch(fruitType) {
    case 'Apple':
        console.log('Apples are $2.50 per kilo');
        break;
    case 'Orange':
        console.log('Oranges are $1.50 per kilo');
        break;
    default:
        console.log(`Sorry we have no ${fruitType}`);
        break;
}


// Given a number, log out if it is greater than, less than, or equal to 5

const number = 10;

if (number > 5) {
    console.log(number, 'is greater than 5');
} else if (number < 5) {
    console.log(number, 'is less than 5');
} else if (number === 5) {
    console.log(number, 'is 5');
}

// nested if in for

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let num of numbersArray) {
    if ( num % 2 === 0) {
        console.log(num);
    }
}

// given a student exam mark, determine if it is a fail (<5), pass (>=5 <=8), distinction (9 10)

const mark = 5;
let grade = 'Grade not yet awarded';

switch (true) {
    case mark < 5 && mark >= 0:
        grade = "Fail";
        break;
    case mark >= 5 && mark <= 8:
        grade = "Pass";
        break;
    case mark === 9 || mark === 10:
        grade = 'Distinction';
        break;
    default:
        grade = 'Invalid';
        break;
}