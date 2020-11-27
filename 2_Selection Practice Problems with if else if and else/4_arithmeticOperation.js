/*
Day 32 Practice Problem
Ques 8) Enter 3 Numbers do following arithmetic operation and find the one that
is maximum and minimum.
*/
var prompt = require('prompt-sync')();
let num1 = Number(prompt("Enter first number: "));
let num2 = Number(prompt("Enter second number: ")); 
let num3 = Number(prompt("Enter third number: "));
console.log("Digits are: "+ num1, num2, num3);

let arr =[];
arr[0] = num1 + num2 * num3;
arr[1] = num1 % num2 + num3;
arr[2] = num3 + num1 / num2;
arr[3] = num1 * num2 + num3;

let maximum = arr[0];
let minimum = arr[0];

for (let i=0; i < 4; i++){
    console.log(arr[i]);
    if (arr[i] > maximum){
        maximum = arr[i];
    }
    if (arr[i] < minimum){
        minimum = arr[i];
    }
}
console.log("Max number: " + maximum);
console.log("Min number: " + minimum);
