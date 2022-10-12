//Get the computer's choice, and the player's choice. Convert player choice to uppercase for strict compariosn later
function getComputerChoice () {
    const options = ["ROCK", "PAPER", "SCISSORS"];
    const choice = Math.floor(Math.random() * options.length);
    return options[choice];
}

function getPlayerChoice () {
    let rawPlayerChoice = prompt("Pick Rock, Paper, or Scissors");
    if (rawPlayerChoice == null) {
        return("No value input.")
    } else return rawPlayerChoice;
}

function playerChoiceToUpperCase () {
    let rawPlayerChoice = getPlayerChoice();
    let playerChoice = rawPlayerChoice.toUpperCase();
    return playerChoice;
}

/*
return 1 if the player won, return 2 if the computer won, return 3 if tie
*/

function playRound (playerSelection = playerChoiceToUpperCase(), computerSelection = getComputerChoice()) {
    if (computerSelection === "ROCK") {
        switch (playerSelection) {
            case ("ROCK"):
                return 3;
            case ("PAPER"):
                return 1;
            case ("SCISSORS"):
                return 2;
            default:
                alert("Something has gone wrong.");
         }
     }
    else if (computerSelection === "PAPER") {
        switch (playerSelection) {
            case ("ROCK"):
                return 2;
            case ("PAPER"):
                return 3;
            case ("SCISSORS"):
                return 1;
            default:
                alert("Something has gone wrong.");
        }
    }
    else if (computerSelection === "SCISSORS") {
        switch (playerSelection) {
            case ("ROCK"):
                return 1;
            case ("PAPER"):
                return 2;
            case ("SCISSORS"):
                return 3;
            default:
                alert("Something has gone wrong.");
            }
    }     
}

//TODO need to get playRound to interact with playerWins, computerWins, and isTie
function game() {
    let playerScore = 0;
    let computerScore = 0;
    
    for (let i = 0; i < 5; i++) {  
        let playerWon = playRound();
        if(playerWon == 1) {playerScore++;}
        else if (playerWon == 2) {computerScore++;}
        else if (playerWon == 3){
            i--;
            console.log("Tie! Play again.");
        }
       console.log(`The score is Player - ${playerScore} to Computer - ${computerScore}`);
    }
    if (playerScore > computerScore) 
    {
        console.log("Congratulations! You win!");
    } else {
        console.log("Oh no! You lost!");
    }
}

console.log("Type game(); and then press enter to play! Best of five rounds wins!");