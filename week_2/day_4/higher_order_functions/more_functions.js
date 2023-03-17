// anonymous function
let add = function(num1, num2) {
    return num1 + num2;
}

console.log(add(6.12, 3.5));

// declare a named function, takes in an array and reutrns sum of total of all the numbers
const myNumbers = [1, 2, 3, 4, 5, 6]

function sumArray(array) {
    let total = 0;
    array.forEach(element => {
        total += element
    });
    return total
}

console.log(sumArray(myNumbers));


// define an anonymous function that takes 2 arguments, eg. name and timeOfTheDay and returns greeting
let greeting = function(name, timeOfTheDay) {
    return `Good ${timeOfTheDay}, ${name}`;
}

console.log(greeting('Harry', 'midnight'));


// arrow functions
let multiply = (num1, num2) => num1 * num2;

console.log(multiply(3, 4));

// arrow function getName
let fullName = (first, last) => `${first} ${last}`

console.log(fullName('Paddington', 'Bear'));

// Write a function called sumElements that takes an array of numbers as an argument and returns the sum total of all the elements in the array.
// Hint: If you get stuck, start by writing the function using a for of loop, then refactor, replacing the for loop with the forEach.

function sumElements(arr) {
    let total = 0;
    arr.forEach((element) => total+=element)
    return total
}

console.log(sumElements(myNumbers));



/* NORMAL:
const multiplyByTwo = function(numbers){
    const result = [];
    numbers.forEach((number) => {
        result.push(number * 2);
    })
    return result;
}
*/

// using array.map()
const multiplyByTwoMap = function(numbers) {
    return numbers.map(number => number * 2)
}

console.log(multiplyByTwoMap(myNumbers));


// using array.filter()
const filterEven = function(numbers) {
    return numbers.filter(number => number % 2 == 0);
}

console.log(filterEven(myNumbers));


// using array.reduce()
const sumArrayReduce = function(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0)
}

console.log(sumArrayReduce(myNumbers));  