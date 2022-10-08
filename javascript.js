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


function playRound (playerSelection = playerChoiceToUpperCase(), computerSelection = getComputerChoice()) {
    if (computerSelection === "ROCK") {
     switch (playerSelection) {
        case ("ROCK"):
            tie();
            break;
        case ("PAPER"):
            playerWins();
            break;
        case ("SCISSORS"):
            computerWins();
            break;
        default:
            alert("Something has gone wrong.");
     }
    }
        
     if (computerSelection === "PAPER") {
        switch (playerSelection) {
           case ("ROCK"):
               computerWins();
               break;
           case ("PAPER"):
               tie();
               break;
           case ("SCISSORS"):
               playerWins();
               break;
           default:
               alert("Something has gone wrong.");
        
        }
    }

        if (computerSelection === "SCISSORS") {
            switch (playerSelection) {
               case ("ROCK"):
                   playerWins();
                   break;
               case ("PAPER"):
                   computerWins();
                   break;
               case ("SCISSORS"):
                   tie();
                   break;
               default:
                   alert("Something has gone wrong.");
            } 
        }
    console.log(playerSelection);
    console.log(computerSelection);
}

function tie() {
    alert("It's a tie!");
}

function computerWins() {
    alert("You lose.");
}

function playerWins() {
    alert("You win!");
}

playRound();