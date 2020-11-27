/*
Day 32 Practice Problem
Ques 3) Write a program that takes a year as input and outputs the Year is a Leap Year or not
a Leap Year. A Leap Year checks for 4 Digit Number, Divisible by 4 and not 100 unless
divisible by 400.
*/
var prompt = require('prompt-sync')();
function leapyear(year) {
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
let year = prompt('Enter a year: ');
if (leapyear(year) == true)
    console.log(leapyear(year) + ", " + year + " is a Leap Year.");
else
    console.log(leapyear(year) + ", " + year + " is not a Leap Year.");