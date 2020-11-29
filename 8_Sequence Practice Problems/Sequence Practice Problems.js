/*
1) Use REPL – Random Function Math.floor(Math.random() * 10); to get Single Digit.
*/
let Number = Math.floor(Math.random() * 10);
console.log("Random Single Digit Number: ",Number);

/*
2) Use REPL – Use Random to get Dice Number between 1 to 6
*/
let Random = Math.floor((Math.random() * 6)+ 1);
console.log("Random Number on Dice: ",Random);

/*
3) Use REPL – Add two Random Dice Number and Print the Result
*/
let num1 = Math.floor((Math.random() * 6)+ 1);
let num2 = Math.floor((Math.random() * 6)+ 1);
let sum = num1 + num2;
console.log("Addition of "+num1+" and "+num2+" dice: ",sum);

/*
4) Use Script & Debug – Write a program that reads 5 Random 2 Digit values, then find their sum and the average
*/
for (var i = 1; i <= 5; i++) {
var randomNum = Math.floor(Math.random() * 100);
if (randomNum > 9) {
    console.log("=> ",randomNum);
}  
else
i=i-1;
}

//5) Use Script & Debug – Unit Conversion
//a.) 1ft = 12 in then 42 in = ? ft
console.log("1ft = 12 in then 42 in = ? ft");
let convertIntoFt = 42/12;
console.log(convertIntoFt,"ft");

//b.) Rectangular Plot of 60 feet x 40 feet in meters
console.log("Rectangular Plot of 60 feet x 40 feet in meters");
let convertIntoMtr = (60*40)/10.764;
console.log(convertIntoMtr,"mtrs");

//c.) Calculate area of 25 such plots in acres
console.log("Calculate area of 25 such plots in acres");
let convertIntoAcres = (60*40*25)/43560;
console.log(convertIntoAcres,"acres");
