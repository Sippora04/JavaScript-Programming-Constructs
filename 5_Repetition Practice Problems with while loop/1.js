/*
Day 32 Practice Problem
Q19)Write a program that takes a command-line argument n and prints a
table of the powers of 2 that are less than or equal to 2^n till 256 is
reached..
*/
const prompt = require('prompt-sync')();
let num = prompt("Enter the value of n for generation of table of powers of 2: ");
let i = 0;
while (i <= num) {
    let powerValue = Math.pow(2, i);
    console.log("2^" + i + " =", powerValue);
    i++;
    if (i > 8) {
        console.log("The powers of 2 that are less than or equal to 2^n till 256 is reached.");
        break;
    }
}