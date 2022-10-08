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
    let rawPlayerChoice = prompt("Pick Rock, Paper, or Scissors");
    return rawPlayerChoice;
}

function playerChoiceToUpperCase () {
    let rawPlayerChoice = getPlayerChoice();
    let playerChoice = rawPlayerChoice.toUpperCase();
    return playerChoice;
}

/*
compare player choice to computer choice
determine winner
*/

/*
function playRound (playerSelection = playerChoiceToUpperCase(), computerSelection = getComputerChoice()) {
    switch (playerSelection == "ROCK") {
        case (computerSelection == "ROCK"):
        alert("It's a tie!")

    }
}
        console.log(playerSelection);
    console.log(computerSelection);
    

    }
    */

function tie() {
    alert("It's a tie!");
}

function computerWins() {
    alert("The computer wins.");
}

function playerWins() {
    alert("You win!");
}

    