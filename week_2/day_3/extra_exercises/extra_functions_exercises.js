/* -------------------------------------------------------------

Practice writing and using functions by providing functions to fulfill the following requests;
You can test your functions by executing them in a console.log()

e.g. console.log(my_function())

1. Count the number of vowels in a string.
2. Write a function `lengths` that accepts a single parameter as an argument, namely an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.
3. Create a function that;
    If passed a number, return the number tripled.
    If passed a string, return the string "ARRR!"
    If NOT passed a number or string, return the data unchanged.



------------------------------------------------------------- */

// 2:
function lengths(array) {
    let answer = [];
    for(let str of array) {
        answer.push(str.length)
    }
    return answer
}

console.log(lengths(['skdjf', 'sdfskjdnf', 'oqyx', 'osdfnnaisdouq'])); 


// 3:
function iDunno(value) {
    if(typeof value === 'number') {
        return value * 3;
    } else if (typeof value === 'string') {
        return "ARRR!";
    } else {
        return value
    }
}