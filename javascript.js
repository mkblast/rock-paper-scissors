let playerScore = 0
let pcScore = 0

function computerPlay() {
    let number = Math.floor(Math.random() * 3 + 1);

    if (number === 1) {
        return "rock";
    } else if (number === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function mainGame(player ,pc) {
    if (player === pc) {
      return(`It's a drow: the player and the pc have ${player}`);

    } else if (player === "rock" && pc == "paper") {
      pcScore++;
      return(`You Lose! ${pc} beats ${player}`)

    } else if (player === "paper" && pc == "scissors") {
      pcScore++;
      return(`You Lose! ${pc} beats ${player}`)

    } else if (player === "scissors" && pc == "rock") {
      pcScore++;
      return(`You Lose! ${pc} beats ${player}`)

    } else if (player === "rock" && pc == "scissors") {
      playerScore++;
      return(`You win! ${player} beats ${pc}`)

    } else if (player === "paper" && pc == "rock") {
      playerScore++;
      return(`You win! ${player} beats ${pc}`)

    } else if (player === "scissors" && pc == "paper") {
      playerScore++;
      return(`You win! ${player} beats ${pc}`)
    }
}

const buttonsPress = document.querySelectorAll('.btn');
const winner = document.querySelector('.winner')
const score = document.querySelector('.score')

buttonsPress.forEach((button) => {
  button.addEventListener('click', () => {
    winner.textContent = mainGame(button.textContent, computerPlay())
    countGame();
  })
})

function countGame() {
  if (playerScore === 5) {
    winner.textContent = 'YOU WIN!!!'
    score.textContent = ''
    playerScore = pcScore = 0
  } else if (pcScore === 5){
    winner.textContent = 'YOU LOSS!!!'
    score.textContent = ''
    playerScore = pcScore = 0
  } else {
    score.textContent = `You: ${playerScore} PC: ${pcScore}`
  }
}
