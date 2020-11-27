/*
Day 32 Practice Problem
Q22)Write a Program where a gambler starts with Rs 100 and places Re 1 bet
until he/she goes broke i.e. no more money to gamble or reaches the
goal of Rs 200. Keeps track of number of times won and number of bets
made.
*/
const LOST = 0;
const WON = 1;
let Money = 100;
let wonCount = 0;
let noOfBets = 0;
while (Money > 0 && Money < 200) {
    let bet = Math.floor(Math.random() * 10) % 2;
    switch (bet) {
        case WON:   Money += 1;
                    wonCount++;
                    break;
        case LOST:  Money -= 1;
                    break;
    }
    noOfBets++;
}
console.log("Number of times bet won= " + wonCount);
console.log("Total number of bets= " + noOfBets);
console.log("Totat Amount= " + Money);