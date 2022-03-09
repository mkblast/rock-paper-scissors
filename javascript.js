let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let number = Math.floor(Math.random() * 10 + 1);

    if (number >= 1 && number <= 3 ) {
        return "rock";
    } else if (number > 1 && number <= 6) {
        return "paper";
    } else {
        return "scissors"; 
    }
}

function mainGame(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log(`It's a drow: the player and the pc have ${playerSelection}`);

    } else if (playerSelection === "rock" && computerSelection == "paper") {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
        computerScore++;

    } else if (playerSelection === "paper" && computerSelection == "scissors") {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
        computerScore++;

    } else if (playerSelection === "scissors" && computerSelection == "rock") {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
        computerScore++;

    } else if (playerSelection === "rock" && computerSelection == "scissors") {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`)
        playerScore++;

    } else if (playerSelection === "paper" && computerSelection == "rock") {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`)
        playerScore++;

    } else if (playerSelection === "scissors" && computerSelection == "paper") {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`)
        playerScore++;
    }
}

function roundCount() {
    for (let counter = 1; counter <= 5; counter++) {
        let playerSelection = prompt("choose something to play with: ").toLowerCase();
        mainGame(playerSelection, computerPlay());
    }

    if (playerScore > computerScore) {
        console.log("Player wins!");
    } else if (playerScore < computerScore) {
        console.log("computer wins!")
    } else {
        console.log("its a drow!")
    }
    
}

roundCount();