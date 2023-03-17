// How 'for' works
const myNumbers = [1, 2, 3, 4, 5, 6]

for(const number of myNumbers) {
    console.log(`This number is ${number}`);
}

// using forEach()

myNumbers.forEach((element, index) => {console.log(`This number is ${element} at index position ${index}`)})

// function to return an array with items multiplied by two
const multiplyByTwo = function(numbers){
    const result = [];
    numbers.forEach((number) => {
        result.push(number * 2);
    })
    return result;
}

console.log( multiplyByTwo(myNumbers) );

// forEach get even numbers
const getEvens = function(array){
    const result = [];
    array.forEach((number) => {
        if(number % 2 === 0) {
            result.push(number)
        }
    })
    return result;
}

console.log(getEvens(myNumbers));