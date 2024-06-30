console.log("hello world")




//////////////////// ASSIGNMENT ////////////////////
let n = 10 //to test
console.log() //print all numbers >= n 

for (let i = 1; i <= n; i++) {
    if (i % 3 === 0)
        {
        console.log("Fizz")
    } else {
        console.log(i)
    }
    if (i % 5 === 0) {
        console.log("Buzz")
    } else {
        console.log(i) 
    }
}
    //this repeats the number twice 

////////////////////////////////////////////////////

console.log("SECOND ATTEMPt")

function fizzBuzz(n2) {
    for (let i = 1; i <= n; i++) {  
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz"); //this ensures that the two conditions are dealt with in one function 
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

let n2 = 10; // Change this value to test with different numbers
fizzBuzz(n2);