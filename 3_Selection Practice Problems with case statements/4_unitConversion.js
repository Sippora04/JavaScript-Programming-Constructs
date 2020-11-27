/*
Day 32 Practice Problem
Ques 12)Write a program that takes User Inputs and does Unit Conversion of
different Length units
1. Feet to Inch 3. Inch to Feet
2. Feet to Meter 4. Meter to Feet
*/
var prompt = require('prompt-sync')();
var number = prompt("Enter the number: ");
console.log("1. Feet to Inch    3. Inch to Feet");
console.log("2. Feet to Meter   4. Meter to Feet");
var choice = Number(prompt("Choose the Unit Conversion: "));
let result = 0;
switch(choice){
    case 1: 
        console.log("Feet to Inch");
        result = 12 * number;
        console.log("Value in Inch is: "+result);
        break;
    case 2:
        console.log("Feet to Meter");
        result = 0.3048 * number;
        console.log("Value in meters is: " + result);
        break;
    case 3:
        console.log("Inch to Feet");
        result = number / 12;
        console.log("Value in feet is: " + result);
        break;
    case 4:
        console.log("Meter to Feet");
        result = number / 0.3048;
        console.log("Value in meters is: " + result);
        break;
    default:
        console.log("Wrong Entered");
}
