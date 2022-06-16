let computerScore = 0;
let userScore = 0;

function computerPlay() {
    let answer = Math.floor(Math.random()*3);
    if (answer === 0) return "Rock";
    if (answer === 1) return "Paper";
    return "Scissors";
}

function playRound(e) {
    if(computerScore === 5 || userScore === 5){
        resetScores();
    }
    let playerSelection = "Rock";
    if (e.target.getAttribute('id')==="rock-button") {
        playerSelection = "Rock";
    }
    if (e.target.getAttribute('id')==="paper-button") {
        playerSelection = "Paper";
    }
    if (e.target.getAttribute('id')==="scissors-button") {
        playerSelection = "Scissors";
    }


    let computerSelection = computerPlay();
    console.log(playerSelection, computerSelection);
    // if (playerSelection === computerSelection) return "Tie";
    if (playerSelection === "Rock" && computerSelection === "Paper") {
        computerScore++;
    }
    if (playerSelection === "Rock" && computerSelection === "Scissors") {
        userScore++;
    }
    if (playerSelection === "Paper" && computerSelection === "Rock") {
        userScore++;
    }
    if (playerSelection === "Paper" && computerSelection === "Scissors") {
        computerScore++;
    }
    if (playerSelection === "Scissors" && computerSelection === "Rock") {
        computerScore++;
    }
    if (playerSelection === "Scissors" && computerSelection === "Paper") {
        userScore++;
    }

    updateScores();

    if(computerScore === 5 || userScore === 5){
        endGame();
    }

    // console.log("User Score: ", userScore);
    // console.log("Computer Score: ", computerScore);
}


function updateScores() {
    let userScoreLabel = document.querySelector('.user-score');
    userScoreLabel.textContent = `User Score: ${userScore}`;
    let computerScoreLabel = document.querySelector('.computer-score');
    computerScoreLabel.textContent = `Computer Score: ${computerScore}`;
}

function resetScores() {
    computerScore = 0;
    userScore = 0;
    const endGameLabel = document.querySelector("h3");
    endGameLabel.textContent = "First to 5 wins!";
}

function endGame() { 
    const endGameLabel = document.querySelector("h3");
    if (userScore < computerScore) {
        endGameLabel.textContent = "Sorry, You Lost :(";
    } else {
        endGameLabel.textContent = "Good Job, You Won!";
    }
}



let buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener('click', playRound));