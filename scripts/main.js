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

// let the player select with a prompt window
function playerPlay() {
    let selection = prompt("Select one of the three; 'rock, paper, scissors': ");
    selection.toLocaleLowerCase();
    while (!options.includes(selection)) {
        selection = prompt("Select one of the three; 'rock, paper, scissors': ");
    }
    return selection;
}

// main game function
function game(n) {
    let playerSelection = "";
    let computerSelection = "";
    let playerScore = 0;
    let computerScore = 0;
    
    while (playerScore < n && computerScore < n) {
        playerSelection = playerPlay();
        computerSelection = computerPlay();
        if (playRound(playerSelection, computerSelection)[0] === "Player") {
            console.log("Player chooses: " + playerSelection + ", " + "Computer chooses: " + computerSelection);
            console.log(playRound(playerSelection, computerSelection)[1]);
            playerScore++;
            console.log("-----------------------------------------");
        } else if (playRound(playerSelection, computerSelection)[0] === "Computer") {
            console.log("Player chooses: " + playerSelection + ", " + "Computer chooses: " + computerSelection);
            console.log(playRound(playerSelection, computerSelection)[1]);
            computerScore++;
            console.log("-----------------------------------------");
        } else {
            console.log("Round ends in a tie.");
            console.log("-----------------------------------------");
        }
    }

    if (playerScore === n) {
        console.log("Player wins it all!" + ", " + "Score: " + playerScore);
    } else if (computerScore === n) {
        console.log("Computer wins it all!" + ", " + "Score: " + computerScore);
    }
    console.log("-----------------------------------------------");
    console.log("-----------------------------------------------");
}

game(5);