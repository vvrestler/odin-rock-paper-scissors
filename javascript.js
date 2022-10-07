/*
initialize rock, paper, and scissors choices
randomize computer choice
get user choice
compute the winner
output who won
*/

function getComputerChoice () {
    const options = ["ROCK", "PAPER", "SCISSORS"]
    const choice = Math.floor(Math.random() * options.length)
    console.log(options[choice])
}