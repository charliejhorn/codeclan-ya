// accessing every item in array using a loop
const score = [84, 5, 28, 29, 53];

for (let i of score) {
    console.log(i);
}

// add 1 to every value
// for(let index = 0, index < 5, index++) {
//     console.log("Added a point");
// }

// while loops
let x = 2;
while(x <= 6) {;
    x += 2;
    console.log(x)
}

// break a loop
while(true) {
    console.log("logging");
    break
}

// cities loop
const cities = ['Melbourne', 'Perth', 'Sydney', 'Adelaide', 'Hobart', 'Darwin'];

for(let city of cities) {
    console.log(`I love ${city}`);
}

// prices
const prices = [1.2, 6.3, 9.14, 3.7]
console.log(prices);

// for(let counter = 0; counter < prices.length; counter++) {
//     let tenPercent = prices[counter] / 10;
//     prices[counter] = Math.round(prices[counter] + tenPercent);
// }

for(let counter of prices) {
    let index = prices.indexOf(counter)
    counter *= 1.1;
    prices[index] = counter;
}

console.log('New prices:', prices);