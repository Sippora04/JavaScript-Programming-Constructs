/*
Day 32 Practice Problem
Q5) Read a single digit number and write the number in word
*/
var prompt = require('prompt-sync')();

let number = prompt('Enter single digit number from [0-9]: ');
if(number == 0){
    console.log("Zero");
}
    else if(number == 1){
        console.log("One");
    }
        else if(number == 2){
            console.log("Two");
        }
            else if(number == 3){
                console.log("Three");
            }
                else if(number == 4){
                    console.log("Four");
                }
                    else if(number == 5){
                        console.log("Five");
                    }
                        else if(number == 6){
                            console.log("Six");
                        }
                            else if(number == 7){
                                console.log("Seven");
                            }
                                else if(number == 8){
                                    console.log("Eight");
                                }
                                    else if(number == 9){
                                        console.log("Nine");
                                    }
                                        else{
                                            console.log("Wrong Number Entered");
                                        }