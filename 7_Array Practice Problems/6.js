/*Day 33 Practice Problem
Ques 6) Write a program in the following steps
a. Roll a die and find the number between 1 to 6
b. Repeat the Die roll and find the result each time
c. Store the result in a dictionary
d. Repeat till any one of the number has reached 10 times
e. Find the number that reached maximum times and the one that was for
minimum times
*/

let mapDie = new Map()

for(let i = 1; i < 7; i++){
    mapDie.set(i.toString(), 0)
}

function checkCount(){
    for(let value of mapDie.values()){
        if(value == 10){
            return true;
        }
    }
    return false;
}

while(!checkCount()){
    let dieroll = Math.floor(Math.random() * 6) + 1
    for(let [key,value] of mapDie){
        if(key == dieroll){
            mapDie.set(key, mapDie.get(key) + 1)
        }
    }
}

let minKey = "1"
let maxKey = "1"
let minVal = mapDie.get("1")
let maxVal = mapDie.get("1")
for(let [key,value] of mapDie){
    console.log("key: " + key + "  value:  " + value)
    if(value < minVal){
        minVal = value
        minKey = key
    }
    if(value > maxVal){
        maxVal = value
        maxKey = key   
    } 
}

console.log("Number with max count:  " + maxKey)
console.log("Number with min count:  " + minKey)