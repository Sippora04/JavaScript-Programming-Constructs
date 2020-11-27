/*
Day 32 Practice Problem
Ques 16)Extend the program to take a range of number as input and output the Prime
Numbers in that range.
*/
const prompt = require('prompt-sync')();

const lowerRange = parseInt(prompt('Enter lower number: '));
const higherRange = parseInt(prompt('Enter higher number: '));

console.log("The prime numbers between " + lowerRange + " and " + higherRange + " are: ");

for (let i = lowerRange; i <= higherRange; i++) {
    let flag = 0;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}
