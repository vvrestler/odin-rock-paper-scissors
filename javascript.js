function getComputerChoice() {
    const options = ["ROCK", "PAPER", "SCISSORS"];
    const choice = Math.floor(Math.random() * options.length);
    return options[choice];
}

let computerScore = 0;
let playerScore = 0;

function playRound(playerSelection, computerSelection = getComputerChoice()) {
    if (computerSelection === "ROCK") {
        switch (playerSelection) {
            case ("ROCK"):
                results.textContent = "Tie! Play again.";
                score.textContent = `Your score is ${playerScore} and the computer's score is ${computerScore}.`
                break;
            case ("PAPER"):
                results.textContent = "You won this round!";
                score.textContent = `Your score is ${playerScore} and the computer's score is ${computerScore}.`
                playerScore++;
                break;
            case ("SCISSORS"):
                results.textContent = "You lost this round.";
                score.textContent = `Your score is ${playerScore} and the computer's score is ${computerScore}.`
                computerScore++;
                break;
            default:
                alert("Something has gone wrong.");
         }
     }
    else if (computerSelection === "PAPER") {
        switch (playerSelection) {
            case ("ROCK"):
                results.textContent = "You lost this round.";
                score.textContent = `Your score is ${playerScore} and the computer's score is ${computerScore}.`
                computerScore++;
                break;
            case ("PAPER"):
                results.textContent = "Tie! Play again.";
                score.textContent = `Your score is ${playerScore} and the computer's score is ${computerScore}.`
                break;
            case ("SCISSORS"):
                results.textContent = "You won this round!";
                score.textContent = `Your score is ${playerScore} and the computer's score is ${computerScore}.`
                playerScore++;
                break;
            default:
                alert("Something has gone wrong.");
        }
    }
    else if (computerSelection === "SCISSORS") {
        switch (playerSelection) {
            case ("ROCK"):
                results.textContent = "You won this round!";
                score.textContent = `Your score is ${playerScore} and the computer's score is ${computerScore}.`
                playerScore++;
                break;
            case ("PAPER"):
                results.textContent = "You lost this round.";
                score.textContent = `Your score is ${playerScore} and the computer's score is ${computerScore}.`
                computerScore++;
                break;
            case ("SCISSORS"):
                results.textContent = "Tie! Play again.";
                score.textContent = `Your score is ${playerScore} and the computer's score is ${computerScore}.`
            default:
                alert("Something has gone wrong.");
            }
    }     
}

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => playRound("ROCK"));

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => playRound("PAPER"));

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => playRound("SCISSORS"));

const results = document.querySelector('#results');
const score = document.querySelector('#score');