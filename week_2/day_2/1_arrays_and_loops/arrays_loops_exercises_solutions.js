/* -------------------------------------------------------------
EXERCISE 1

Let's start off with some basic array practice. In this exercise we'd like you to create an array of three items, 
stored inside a variable called myArray. The items can be anything you want — how about your favourite bands or movies?

Next, modify the first two items in the array using simple bracket notation and assignment. 
Then add a new item to the beginning of the array. 

Finally, 'pop off' the last item in the array and log it out.
-------------------------------------------------------------- */

const myArray = ["The Departed", "The Life of Brian", "The Irishman"];
myArray[0] = "The Godfather";
myArray[1] = "Lost in Translation";
myArray.unshift("Jurassic Park");
console.log(myArray.pop());

/* -------------------------------------------------------------
EXERCISE 2

Now let's practice removing items from an array. 

Using the indexOf() and splice() methods, remove 'Visual Basic' from the programmingLanguages array. 

-------------------------------------------------------------- */
const programmingLanguages = [ 'JavaScript', 'Python', 'Java', 'C', 'Visual Basic', 'Go' ];

const ind = programmingLanguages.indexOf('Visual Basic');
programmingLanguages.splice(ind, 1);
console.log(programmingLanguages);

/* -------------------------------------------------------------
EXERCISE 3

Nested arrays!

The ticTacToe (naughts & crosses) array represents a board of 3x3 dimensions.
The first nested array is the top row of the board, the last nested array is the bottom row.

Add items ('x' or 'o') to the nested arrays such that 'x' wins. 

-------------------------------------------------------------- */
const ticTacToe = [['', '', ''], ['', '', ''], ['', '', ''] ];

ticTacToe[0][1] = 'x';
ticTacToe[1][1] = 'x';
ticTacToe[2][1] = 'x';

/* -------------------------------------------------------------
EXERCISE 4

Now let's practice converting strings to arrays. In this exercise we'd like you to create a string, 
stored inside a variable called myString. The items can be anything you want but should be separated by
a comma or semi-colon.

Next, use the split() method to convert myString into an array called arrFromStr. 
Then use a for..of statement to log out the items in arrFromStr. 

-------------------------------------------------------------- */

const myString = "Green,Red,Amber,Blue";
const arrFromStr = myString.split(",");

for( let color of arrFromStr ){
    console.log(color);
}

/* -------------------------------------------------------------
EXERCISE 5

Given an array of numbers and an empty array called doubles, use a for loop to iterate through the array,
multiply each number by 2 and push the result onto the doubles array.

-------------------------------------------------------------- */
const numbers = [2, 4, 5, 7];
const doubles = [];

for(let num of numbers){
    doubles.push(num *= 2);
}

console.log(doubles);

/* -------------------------------------------------------------
EXERCISE 6

In this exercise, we'd like you to write a for loop that starts at 0
and ends at 2. For each musician, push on a new intro to the intros array. 

Finally, use a for..of statement to loop through the intros array and log out each intro.

-------------------------------------------------------------- */
const firstNames = ["Chris", "Harry", "Sporty"];
const lastNames  = ["Martin", "Styles", "Spice"];
const bands      = ["Coldplay", "One Direction", "Spice Girls"];

const intros = [];

// Loop through the firstNames and lastNames arrays and store the following strings in the intros array:
// 'Hi, my name is Chris Martin and I am in Coldplay'
// 'Hi, my name is Harry Styles and I am in One Direction'
// 'Hi, my name is Sporty Spice and I am in Spice Girls'


for(let i=0; i <= 2; i++){
    let intro = `Hi, my name is ${firstNames[i]} ${lastNames[i]} and I am in ${bands[i]}`;
    intros.push(intro);
}

for(let intro of intros){
    console.log(intro);
}

/* -------------------------------------------------------------
EXERCISE 7

In this final exercise, given a counter, use a while loop to log out
a count down from 10 to 1. HINT: remember you can decrement the value 
of a variable using the '--' shorthand.

-------------------------------------------------------------- */
let counter = 10;

while( counter >= 1 ){
    console.log(counter);
    counter--;
}

// Write your code here...