let playerScore = 0;
let computerScore = 0;

const container = document.querySelector("#main-container");

const scorePlayer = document.querySelector("#score-player");
const scoreComputer = document.querySelector("#score-computer");

const choseWhat = document.querySelector("#chose-what");
choseWhat.textContent = " ";
const roundResult = document.querySelector("#round-result");

const btnContainer = document.querySelector("#btn-container");
const btnRock = document.querySelector("#btn-rock");
const btnPaper = document.querySelector("#btn-paper");
const btnScissors = document.querySelector("#btn-scissors");

btnRock.addEventListener("click", () => { playRound("rock", computerPlay()); });
btnPaper.addEventListener("click", () => { playRound("paper", computerPlay()); });
btnScissors.addEventListener("click", () => { playRound("scissors", computerPlay()); });

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
        roundResult.textContent = "Round ends in a TIE!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        scoreComputer.textContent = "Computer: " + computerScore;
        choseWhat.textContent = "Player chooses: " + playerSelection + ", " + "Computer chooses: " + computerSelection;
        roundResult.textContent = "Computer wins!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        scoreComputer.textContent = "Computer: " + computerScore;
        choseWhat.textContent = "Player chooses: " + playerSelection + ", " + "Computer chooses: " + computerSelection;
        roundResult.textContent = "Computer wins!";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        scoreComputer.textContent = "Computer: " + computerScore;
        choseWhat.textContent = "Player chooses: " + playerSelection + ", " + "Computer chooses: " + computerSelection;
        roundResult.textContent = "Computer wins!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        scorePlayer.textContent = "Player: " + playerScore;
        choseWhat.textContent = "Player chooses: " + playerSelection + ", " + "Computer chooses: " + computerSelection;
        roundResult.textContent = "Player wins!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        scorePlayer.textContent = "Player: " + playerScore;
        choseWhat.textContent = "Player chooses: " + playerSelection + ", " + "Computer chooses: " + computerSelection;
        roundResult.textContent = "Player wins!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        scorePlayer.textContent = "Player: " + playerScore;
        choseWhat.textContent = "Player chooses: " + playerSelection + ", " + "Computer chooses: " + computerSelection;
        roundResult.textContent = "Player wins!";
    } else {
        /* return "An error occured."; */
    }

    if (playerScore === 5 || computerScore === 5) {
        btnContainer.removeChild(btnRock);
        btnContainer.removeChild(btnPaper);
        btnContainer.removeChild(btnScissors);

        choseWhat.textContent = "";
        roundResult.style.cssText = "font-size: 33px; color: red;";
        if (playerScore === 5) {
            roundResult.textContent = "YOU WON!";
        } else if (computerScore === 5) {
            roundResult.textContent = "COMPUTER WON!";
        }
    }
    
}