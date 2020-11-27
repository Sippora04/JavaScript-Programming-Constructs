/*
Day 32 Practice Problem
Ques 11)Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...
*/
const prompt = require('prompt-sync')();
let num = prompt("Enter a number[1, 10, 100, 1000, etc]: ");

switch(num)
{
    case '1':
        console.log("unit");
        break;
    case '10':
        console.log("tens");
        break;
    case '100':
        console.log("hundred");
        break;
    case '1000':
        console.log("thousand");
        break;
    case '10000':
        console.log("tens of thousand");
        break;
    case '100000':
        console.log("lacs");
        break;
    default:
        console.log("Wrong Entered.")
}
