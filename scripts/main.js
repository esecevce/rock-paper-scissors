let playerScore = 0;
let computerScore = 0;

const container = document.querySelector("#main-container");

const scorePlayer = document.querySelector("#score-player");
const scoreComputer = document.querySelector("#score-computer");

const roundResult = document.querySelector("#round-result");

const btnRock = document.querySelector("#btn-rock");
const btnPaper = document.querySelector("#btn-paper");
const btnScissors = document.querySelector("#btn-scissors");

const options = ["rock", "paper", "scissors"];
// randomly selects one of the options
function computerPlay() {
    let num = Math.floor(Math.random() * options.length);
    return options[num];
}

// compares the selections of player and computer and output the result
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return ["Tie", "It is a tie!"];
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return ["Computer", "Computer wins!\nPaper beats Rock."];
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return ["Computer", "Computer wins!\nScissors beats Paper."];
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return ["Computer", "Computer wins!\nRock beats Scissors."];
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return ["Player", "Player wins!\nPaper beats Rock."];
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return ["Player", "Player wins!\nRock beats Scissors."];
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return ["Player", "Player wins!\nScissors beats Paper."];
    } else {
        return "An error occured.";
    }
}