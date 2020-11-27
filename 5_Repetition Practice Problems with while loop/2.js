/*
Day 32 Practice Problem
Q20)Find the Magic Number:
a. Ask the user to think of a number n between 1 to 100
b. Then check with the user if the number is less then n/2 or greater
c. Repeat till the Magic Number is reached..

Magic Number: A number is said to be a magic number, if the sum of its digits are calculated till
a single digit recursively by adding the sum of the digits after every addition.
If the single digit comes out to be 1,then the number is a magic number.
*/
const prompt = require('prompt-sync')();
let num = parseInt(prompt('Enter a number[1 to 100] to check if it is a magic number: '));
let copy = num;
let sum = 0;
while(copy > 0 || sum > 9) {
    if(copy == 0){
        copy = sum;
        sum = 0;
    }
    sum = sum + copy % 10;
    copy = Math.floor(copy / 10);
}
if(sum == 1){
    console.log(num + " is a magic number");
}
else{
    console.log(num + " is not a magic number");
}