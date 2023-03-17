const cities = ['Melbourne', 'Perth', 'Sydney', 'Adelaide', 'Hobart', 'Darwin'];

// get the length of the array
console.log(cities.length);

// log the 3rd city in the array
console.log(cities[2]);

// update an item
cities[2] = 'City of Sydney';

// add an item to the end
cities.push('Canberra');

// add item to start
cities.unshift('Gold Coast');

// remove first item
cities.shift();

// find index
const adelaideIndex = cities.indexOf('Adelaide')

// remove using index
cities.splice(adelaideIndex, 1)

console.log(cities);

