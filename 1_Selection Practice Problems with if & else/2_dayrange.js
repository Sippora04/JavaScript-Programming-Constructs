/*
Day 32 Practice Problem
Ques 2) Write a program that takes day and month from the command line and prints true if
day of month is between March 20 and June 20, false otherwise.
*/
var prompt = require('prompt-sync')();

let date = prompt('Enter date : ');
let month = prompt('Enter month : ');

let isInDateRange = false;
if (month == 'March' && date >= 20) {
    isInDateRange = true;
}
if (month == 'April' || month == 'May') {
    isInDateRange = true;
}
if (month == 'June' && date <= 20) {
    isInDateRange = true;
}
console.log("The given day and month is in range - " + isInDateRange);