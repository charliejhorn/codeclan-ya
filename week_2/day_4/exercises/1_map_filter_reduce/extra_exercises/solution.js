//1. Iterate over an array of strings and capitalise each word:

const sentence = ["javascript", "is", "awesome"];

sentence.forEach(str => {
  str = str.charAt(0).toUpperCase() + str.slice(1);
  console.log(str);
});

//2. Create a new array consisting of the users names using the "name" key in the following object:

const users = [
  {name: "John", age: 30},
  {name: "Jane", age: 25},
  {name: "Bob", age: 35}
];

const names = users.map(obj => obj.name);
console.log(names);

//3. Filter out strings longer than 5 characters from the following array:

const strings = ["javascript", "is", "awesome", "but", "difficult"];

const filteredStrings = strings.filter(str => str.length > 5);
console.log(filteredStrings);

//4. Count the number of even numbers in the following array:

const listOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

const count = listOfNumbers.reduce((acc, cur) => {
  if (cur % 2 === 0) {
    return acc + 1;
  }
  return acc;
}, 0);

console.log(count);

//5. Find the first number that is even in the given array:

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const first = numbers.find(num => num % 2 === 0);
console.log(first);

//6. Find the sum of the ages of people in the following array of objects:

const folks = [
  {name: "John", age: 30},
  {name: "Jane", age: 25},
  {name: "Bob", age: 35}
];

const sum = folks.reduce((acc, cur) => {
  return acc + cur.age;
}, 0);

console.log(sum);

//7. Split the given array into two separate arrays of odd and even numbers:

const evensAndOdds = [1, 2, 3, 4, 5, 6, 7, 8];

const [evens, odds] = evensAndOdds.reduce((acc, cur) => {
  if (cur % 2 === 0) {
    acc[0].push(cur);
  } else {
    acc[1].push(cur);
  }
  return acc;
}, [[], []]);

console.log(evens);
console.log(odds);

//8. Create a new object from the given array of people, keys should be the names and values will be corresponding age:

const people = [
  {name: "John", age: 30},
  {name: "Jane", age: 25},
  {name: "Bob", age: 35}
];

const obj = people.reduce((acc, cur) => {
  acc[cur.name] = cur.age;
  return acc;
}, {});

console.log(obj);

//9. Remove all odd numbers from the following array:

const allnumbers = [1, 2, 3, 4, 5, 6, 7, 8];

const solution = allnumbers.reduceRight((acc, cur) => {
  if (cur % 2 !== 0) {
    acc.push(cur);
  }
  return acc;
}, []);

console.log(solution);

//10. Create a new array from the given array of numbers where each number is doubled:

const moreNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

const result = moreNumbers.map(num => num * 2);
console.log(result);