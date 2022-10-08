//Get the computer's choice, and the player's choice. Convert player choice to uppercase for strict compariosn later
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
    console.log(playerChoice + "player");
    return playerChoice;
   
}

/*
compare player choice to computer choice
determine winner
*/


function playRound (computerSelection = getComputerChoice()) {
    if (computerSelection === "ROCK") {
     computerPlaysRock();
     }
        
    else if (computerSelection === "PAPER") {
        computerPlaysPaper();
    }
    else if (computerSelection === "SCISSORS") {
        computerPlaysScissors();
            }     
    console.log(computerSelection + "computer");
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


//Functtions for finding the game result after getting the choices
function computerPlaysRock(playerSelection) {
    switch (playerSelection = playerChoiceToUpperCase()) {
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

function computerPlaysPaper (playerSelection) {
    switch (playerSelection = playerChoiceToUpperCase()) {
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

 function computerPlaysScissors (playerSelection) {
   switch (playerSelection = playerChoiceToUpperCase()) {
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

playRound();