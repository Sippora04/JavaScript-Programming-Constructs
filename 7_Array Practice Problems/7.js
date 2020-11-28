/*Day 33 Practice Problem
Ques 7) Write a Program to generate a birth month of 50 individuals
between the year 92 & 93. Find all the individuals having birthdays
in the same month. Store it to finally print.
*/

let mapBirthday = new Map();

function getDate() {
    let startDate = new Date("1992-01-01");
    let endDate = new Date("1993-12-31");
    let date = endDate.getTime() - startDate.getTime();
    return new Date(startDate.getTime() + Math.random() * (date));
}

for(var i = 1; i < 50; i++) {
    let birthday = getDate();
    console.log(birthday);
    let username = " person " + i;
    let month = birthday.getMonth() + 1;
    if(mapBirthday.has(month)){
        let users = mapBirthday.get(month);
        users.push(username);
        mapBirthday.set(month, users);
    }else {
        let users = new Array(username)
        mapBirthday.set(month, users);
    }
}

for(let [key, value] of mapBirthday){
    console.log("On month:" + key + " => Person's Birthday: " + value + "\n");
}