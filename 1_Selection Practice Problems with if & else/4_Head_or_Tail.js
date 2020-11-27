/*
Day 32 Practice Problem
Ques 4) Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly.
*/
var randomNum = Math.floor(Math.random() * 2);
if(randomNum ===  0) {
console.log("Tails");
}
if(randomNum ===  1) {
console.log("Heads");
}