/*
Day 32 Practice Problem
Ques 14)Write a program that takes a command-line argument n and prints the nth harmonic
number form.
*/
const prompt = require('prompt-sync')();
    let sum = 1;
    let n = prompt("Enter the value of n and generate the nth harmonic number: ");
    for (let i = 2; i <= n; i++) {
        sum += "+(1/" + i + ")";
    }
    console.log("The nth harmonic number: ", sum);
