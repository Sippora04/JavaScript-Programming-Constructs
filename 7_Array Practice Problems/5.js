/*Day 33 Practice Problem
Ques 5) Take a range from 0 – 100, find the digits that are repeated twice like 33, 77,
etc and store them in an array
*/
const prompt = require('prompt-sync')();
let number = Number(prompt("Enter the starting value of the range 0-100: "));
let numArray = [];
for(let i = number; i <= 100; i++){
    let num = i.toString();
    num = num.split("")
    console.log(num);
    if(num[0] == num[1])
        numArray.push(i);
}
console.log("Numbers with repeated digits: " +numArray);