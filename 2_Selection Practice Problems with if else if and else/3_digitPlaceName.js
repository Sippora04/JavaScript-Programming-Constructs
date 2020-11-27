/*
Day 32 Practice Problem
Ques 7) Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...
*/
var prompt = require('prompt-sync')();
let num = prompt("Enter a number[1, 10, 100, 1000, etc]: ");
if (num==1){
    console.log("unit");
}else if (num==10){
    console.log("tens");
}else if (num==100){
    console.log("hundered");
}else if  (num==1000){
    console.log("thousand");
}else if (num==10000){
    console.log("tens of thousand")
}else if (num==100000){
    console.log("lacs")
}else{
    console.log("Invalid Number")
}
