/*Day 33 Practice Problem
Ques 3) Extend the Prime Factorization Program to store all the Prime Factors of a
number n into an array and finally display the output.
*/
const prompt = require('prompt-sync')();
let number = Number(prompt("Enter a number: "));
let org = number;
let factorsArray = [];
for(let i = 2; i <= number; i++){
    while(number % i == 0){
        factorsArray.push(i)
        console.log (i);
        number = number / i;
    }
}
console.log(factorsArray + " prime factors of " + org + " are stored in array." )
