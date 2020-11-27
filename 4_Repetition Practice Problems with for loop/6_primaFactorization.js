/*
Day 32 Practice Problem
Q18)Write a program to compute Factors of a number N using prime factorization method.
Logic -> Traverse till i*i <= N instead of  <= N for efficiency.
O/P -> Print the prime factors of number N.]
*/
const prompt = require('prompt-sync')();
let number = prompt("Enter the number to compute prime factors of a number :");
console.log("Prime Factors are:");
for (let i = 2; i < number; i++) {
    while (number % i == 0) {
        console.log(i + " ");
        number = number / i;
    }
}
if (number > 2) {
    console.log(number);
}