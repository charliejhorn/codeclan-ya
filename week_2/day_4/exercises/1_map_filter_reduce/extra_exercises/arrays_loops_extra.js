//1. Iterate over an array of strings and capitalise each word:

const sentence = ["javascript", "is", "awesome"];

// Write your code here...
const capitalisedWord = function(sentence) {
  let newSentence = []
  sentence.forEach(word => {
    let newWord = word.split('');
    newWord[0] = newWord[0].toUpperCase();
    newSentence.push(newWord.join(''))
    }
  )
  return newSentence
}

const capitalisedWordEfficient = sentence => sentence.forEach(word => word = word.charAt(0).toUpperCase() + word.slice(1)) 

console.log((capitalisedWord(sentence)));


//2. Create a new array consisting of the users names using the "name" key in the following object:

const users = [
  {name: "John", age: 30},
  {name: "Jane", age: 25},
  {name: "Bob", age: 35}
];
// Write your code here...
const newUserNamesArray = (users) => users.map((user) => user.name)
console.log(newUserNamesArray(users));


//3. Filter out strings longer than 5 characters from the following array:

const strings = ["javascript", "is", "awesome", "but", "difficult"];

// Write your code here...
const stringsFiltered = (array) => array.filter(string => string.length > 5)

console.log(stringsFiltered(strings));


//4. Count the number of even numbers in the following array:

const listOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

// Write your code here...
const numOfEvenNums = function(numbers) {
  let total = 0
  numbers.forEach(num => {
    if(num % 2 === 0){
      total ++;
    }
  })
  return `${total} even numbers`
}

const numOfEvenNumsEfficient = numbers => numbers.filter(num => num % 2 === 0).length

// console.log(numOfEvenNums(listOfNumbers));
console.log(numOfEvenNumsEfficient(listOfNumbers));


//5. Find the first number that is even in the given array:

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// Write your code here...
// const firstEven = array => array.forEach(item => {if(item % 2 === 0){return item}})

/* 
function firstEven(array) {
  for (let num of array) {
    if (num % 2 === 0) {
      return `first even number is ${num}`
    }
  }
  return 'no even numbers'
}
*/
const firstEven = array => {for(let num of array){if(num % 2 === 0) {return `first even number is ${num}`}}}

const firstEvenEfficient = array => array.filter(num => num % 2 === 0)[0]

const firstEvenFind = array => array.find(num => num % 2 === 0)

// console.log(firstEven(numbers));
// console.log(firstEvenEfficient(numbers));
console.log(firstEvenFind(numbers));


//6. Find the sum of the ages of people in the following array of objects:

const folks = [
  {name: "John", age: 30},
  {name: "Jane", age: 25},
  {name: "Bob", age: 35}
];

// Write your code here...
function sumAges(array) {
  let sum = 0;
  array.forEach(person => sum += person.age);
  return sum
}

function sumAgesReduce(array) {
  return array.reduce((sum, person) => {console.log(person); console.log(person.age); sum + person.age}, 0)
}

const sumAgesReduceVar = array => array.reduce((sum, person) => sum + person.age, 0)


function sumAges2 (array) {
  array.forEach(person => console.log(person.age))
  return array.reduce((total, person) => 
    {
      console.log(person.age);
      total + person.age
    }
  )
}

// console.log(sumAges(folks))
// console.log(sumAgesReduce(folks))
console.log(sumAgesReduceVar(folks))


//7. Split the given array into two separate arrays of odd and even numbers:

const evensAndOdds = [1, 2, 3, 4, 5, 6, 7, 8];

// Write your code here...
function splitEvenOdd (array) {
  let evens = array.filter(num => num % 2 === 0);
  let odds = array.filter(num => num % 2 === 1);
  return {evens, odds}
}

const splitEvenOddEfficient = array => [array.filter(num => num % 2 === 0), array.filter(num => num % 2 === 1)]

// console.log(splitEvenOdd(evensAndOdds));
console.log(splitEvenOddEfficient(evensAndOdds));


const [evens, odds] = evensAndOdds.reduce((array, num) => {
  if(num % 2 === 0){
    array[0].push(num)
  }
  else if(num % 2 === 1){
    array[1].push(num)
  }
  return array
}, [[],[]]) 

//8. Create a new object from the given array of people, keys should be the names and values will be corresponding age:

const people = [
  {name: "John", age: 30},
  {name: "Jane", age: 25},
  {name: "Bob", age: 35}
];

// Write your code here...
function peopleObject(object) {
  let newObject = {}
  object.forEach(person => newObject[person.name] = person.age)
  return newObject
}

const peopleObjectEfficient = object => {
  let newObject = {};
  object.forEach(person => newObject[person.name] = person.age);
  return newObject;
}

/* const peopleObjectEfficient2 = array => {
  array.reduce((accumulator, person, currentIndex) => {accumulator[person.name] = person.age; console.log(accumulator); console.log(`index is ${currentIndex}`); return accumulator}, {})
} */

const peopleObjectEfficient2 = array => array.reduce((newObject, person) => newObject[person.name] = person.age, {})


console.log(peopleObject(people));
// console.log(peopleObjectEfficient(people));
console.log(peopleObjectEfficient2(people));


//9. Remove all odd numbers from the following array:

const allNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

// Write your code here...
const allOddNumbers = numbers => numbers.filter(num => num % 2 != 0)

console.log(allOddNumbers(allNumbers));

//10. Create a new array from the given array of numbers with each number doubled:

const moreNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

// Write your code here...
const twiceMoreNumbers = nums => nums.map(num => num * 2)

console.log(twiceMoreNumbers(moreNumbers));

