let computerScore = 0;
let userScore = 0;

function computerPlay() {
    let answer = Math.floor(Math.random()*3);
    if (answer === 0) return "Rock";
    if (answer === 1) return "Paper";
    return "Scissors";
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.substr(1).toLowerCase();
    console.log(playerSelection, computerSelection);
    if (playerSelection === computerSelection) return "Tie";
    if (playerSelection === "Rock" && computerSelection === "Paper") {
        computerScore++;
        return "You Lose! Paper beats Rock";
    }
    if (playerSelection === "Rock" && computerSelection === "Scissors") {
        userScore++;
        return "You Win! Rock beats Scissors";
    }
    if (playerSelection === "Paper" && computerSelection === "Rock") {
        userScore++;
        return "You Win! Paper beats Rock";
    }
    if (playerSelection === "Paper" && computerSelection === "Scissors") {
        computerScore++;
        return "You Lose! Scissors beats Paper";
    }
    if (playerSelection === "Scissors" && computerSelection === "Rock") {
        computerScore++;
        return "You Lose! Rock beats Scissors";
    }
    if (playerSelection === "Scissors" && computerSelection === "Paper") {
        userScore++;
        return "You Win! Scissors beats Paper";
    }
}

function game() {
    for(let i = 0; i < 5; i++) {
        const userInput = window.prompt("Your Move:", "Rock");
        console.log(`Game ${i+1}`);
        playRound(userInput, computerPlay());
    }
    console.log("Computer Score: ", computerScore);
    console.log("User Score: ", userScore);
}

game();