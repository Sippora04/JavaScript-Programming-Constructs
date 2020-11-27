/*
Day 32 Practice Problem
Ques 15) Write a program that takes a input and determines if the number is a prime.
*/
const prompt = require('prompt-sync')();
let num = Number(prompt('Enter the number: '));
let flag = true;
if (num <= 1)
    flag = false;
else {
    for (let i = 2; i < num; i++){
        if (num % i == 0)
        flag = false;        
    }
}
if(flag==false)
console.log("It is not a prime number");
if(flag==true)
console.log("It is a prime number");
