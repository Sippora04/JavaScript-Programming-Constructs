/*
Day 32 Practice Problem
Ques 6)Read a Number and Display the week day (Sunday, Monday,...)
*/
var prompt = require('prompt-sync')();
let weekDay = prompt('Enter week day in number: ');

if(weekDay == 1){
    console.log("Monday");
}
    else if(weekDay == 2){
        console.log("Tuesday");
    }
        else if(weekDay == 3){
            console.log("Wednesday");
        }
            else if(weekDay == 4){
                console.log("Thursday");
            }
                else if(weekDay == 5){
                    console.log("Friday");
                }
                    else if(weekDay == 6){
                        console.log("Saturday");
                    }
                        else if(weekDay == 7){
                            console.log("Sunday");
                        }
                            else{
                                console.log("Wrong Entered");
                            }
