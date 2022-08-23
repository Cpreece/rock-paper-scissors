let choices = ['rock','paper','scissors'];
let playerScore = 0
let computerScore = 0
let nodes = document.querySelectorAll('.choice')

//support functions 
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

// game mechanics

function getComputerChoice() {
  return choices[Math.floor(Math.random()*choices.length)];
};

function playerInput(e) {
  playerChoice = this.id
  playRound(playerChoice, getComputerChoice())
  e.stopPropagation();
};
  

function youWin(player, computer) {
  playerScore += 1;
  document.querySelector('.instructions').textContent = "You Win : " + capitalizeFirstLetter(player) + " > " 
  + capitalizeFirstLetter(computer);
  document.querySelector('#human > .score').textContent = playerScore
};
function youLose(player, computer) {
  computerScore += 1;
  document.querySelector('.instructions').textContent = "You Lose : " + capitalizeFirstLetter(player) + " < " 
    + capitalizeFirstLetter(computer);
    document.querySelector('#computer > .score').textContent = computerScore

};
function youTie(player, computer) {
  document.querySelector('.instructions').textContent = "You Tie : " + capitalizeFirstLetter(player) + " = " 
    + capitalizeFirstLetter(computer);
};

function endGame(pScore, cScore) {
  if (pScore === 3 || cScore === 3) {
    document.querySelector('.reset').classList.toggle('inactive');
    document.querySelector('.choices-inner').classList.toggle('inactive');
    if (pScore > cScore) {
      document.querySelector('.instructions').textContent = 'Congratulations. You\'ve beaten a helpless machine.'
    } else {
      document.querySelector('.instructions').textContent = 'By losing you have become meat for the machine.'
    };
  };
};

function playRound(playerSelection, computerSelection) {
  if (computerSelection === playerSelection) {
    youTie (playerSelection, computerSelection);
  } else if (playerSelection === 'paper') {
      if (computerSelection === 'rock') {
        youWin(playerSelection, computerSelection);
      } else {
        youLose(playerSelection, computerSelection);
      }
  } else if (playerSelection === 'rock') {
      if (computerSelection === 'scissors') {
        youWin(playerSelection, computerSelection);
      } else {
        youLose(playerSelection, computerSelection);
      }
  } else if (playerSelection === 'scissors') {
      if (computerSelection === 'paper') {
        youWin(playerSelection, computerSelection);
      } else {
        youLose(playerSelection, computerSelection);
      }
  };
  console.log('endgame')
  endGame(playerScore, computerScore)
};

function newGame() {
  document.querySelector('.reset').classList.toggle('inactive');
  document.querySelector('.choices-inner').classList.toggle('inactive');
  playerScore = 0
  computerScore = 0
  document.querySelector('#human > .score').textContent = playerScore
  document.querySelector('#computer > .score').textContent = computerScore
}

// event listeners

nodes.forEach(item => { item.addEventListener('click', playerInput)
});

document.querySelector('.reset > button').addEventListener('click', newGame)




