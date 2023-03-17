/* -------------------------------------------------------------

Practice writing and using functions by providing functions to fulfill the following requests;
You can test your functions by executing them in a console.log()

e.g. console.log(my_function())

1. Return the square of a number
2. Convert Celsius to Fahrenheit
3. Find the area of a given Rectangle
4. Find the area and perimeter of a Circle
5. Generate a random number
6. Reverse a string.


------------------------------------------------------------- */
function square(x) {
    return x * x;
}


function conversion(temperature) {
    let answer = temperature * 1.8 + 32;
    return answer;
}

console.log( conversion(45) );



function areaAndPerimeter(radius) {
    let area = Math.PI * square(radius);
    let perimeter = 2 * Math.PI * radius;
    return `Area: ${area}. Perimeter: ${perimeter}`
}
console.log(areaAndPerimeter(420));



let word1 = 'hat'
let word2 = 'cloak'


function accessLastCharacter(string) {
    let length = string.length;
    let lastCharacter = string[length - 1];
    return lastCharacter;
}

function accessEveryCharacter(string) {
    for (let character of string) {
        console.log(character);
    }
}


function reverseString(string) {
    let answer = "";
    for (let index = 0; index < string.length; index += 1) {
        answer += string[string.length - 1 - index]
    }
    return answer
}



// string1[2] = e

console.log( reverseString( word1 ) );
console.log( reverseString( word2 ) );