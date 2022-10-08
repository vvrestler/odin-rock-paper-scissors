/*
initialize rock, paper, and scissors choices
randomize computer choice
get user choice
compute the winner
output who won
*/

function getComputerChoice () {
    const options = ["ROCK", "PAPER", "SCISSORS"];
    const choice = Math.floor(Math.random() * options.length);
    return options[choice];
}

function getPlayerChoice () {
    let rawPlayerChoice = prompt("What do you choose?");
    return rawPlayerChoice;
}

function playerChoiceToUpperCase () {
    let rawPlayerChoice = getPlayerChoice();
    let playerChoice = rawPlayerChoice.toUpperCase();
    return playerChoice;
}