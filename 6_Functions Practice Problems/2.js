/*
Day 32 Practice Problem
Q24)Write a function to check if the two numbers are Palindromes
*/
var prompt = require('prompt-sync')();
function checkForPalindrome(num1, num2){
    let reverse = 0;
    while (num1 != 0) {
        let remainder = num1 % 10;
            reverse = reverse * 10 + remainder;
            num1 = Math.floor(num1 / 10);
    }
    if (reverse == num2){
        return true;
    } else {
        return false;
    }
}
let num1 = prompt("Enter a number to check if it is a palindrome: ");
let num2 = prompt("Enter another number to check if it is a palindrome: ");
let isPalindrome = checkForPalindrome(num1, num2);
if (isPalindrome)
    console.log(num1 + " & " + num2 + " is Palindrome.");
else
    console.log(num1 + " & " + num2 + " is not Palindrome.");
