/*
Day 32 Practice Problem
Q17
) Write a program that computes a factorial of a number taken as input.
5 Factorial – 5! = 1 * 2 * 3 * 4 * 5
*/
const prompt = require('prompt-sync')();
let num = prompt('Enter a number to find factorial: ');
let fact = 1;
for(var i = 1; i <= parseInt(num); i++) {
    fact = fact * i;
}
console.log("Factorial of " + num + " = " + fact);