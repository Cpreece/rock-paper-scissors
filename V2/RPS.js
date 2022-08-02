let choices = ['rock','paper','scissors'];
let playerScore, computerScore

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

function playerInput() {
  playerChoice = prompt('Choose Your Weapon. (Rock, Paper or Scissors)').toLowerCase()
  if (choices.includes(playerChoice)) {
    return playerChoice;
  } else {
   return playerInput(); 
  }
};

function getComputerChoice() {
  return choices[Math.floor(Math.random()*choices.length)];
};


function youWin(player, computer) {
  playerScore += 1
  alert("You Win : " + capitalizeFirstLetter(player) + " > " 
    + capitalizeFirstLetter(computer));
};
function youLose(player, computer) {
  computerScore += 1
  alert("You Lose : " + capitalizeFirstLetter(player) + " < " 
    + capitalizeFirstLetter(computer));
};
function youTie(player, computer) {
  alert("You Tie : " + capitalizeFirstLetter(player) + " = " 
    + capitalizeFirstLetter(computer));
  playRound(playerInput(), getComputerChoice());
};

function playRound(playerSelection, computerSelection) {
  console.log('player = ' + playerSelection);
  console.log('computer = ' + computerSelection)
  if (computerSelection === playerSelection) {
    return youTie (playerSelection, computerSelection);
  } else if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      return youWin(playerSelection, computerSelection);
    } else {
      return youLose(playerSelection, computerSelection);
    }
  } else if (playerSelection === 'rock') {
    if (computerSelection === 'scissors') {
      youWin(playerSelection, computerSelection);
    } else {
      return youLose(playerSelection, computerSelection);
    }
  }  else if (playerSelection === 'scissors') {
    if (computerSelection === 'paper') {
      return youWin(playerSelection, computerSelection);
    } else {
      return youLose(playerSelection, computerSelection);
    }
  }
};

function playGame() {
  playerScore = 0 
  computerScore = 0
  for (let i = 0; i < 5; i++) {
    playRound(playerInput(), getComputerChoice());
    console.log('You\'ve won ' + playerScore + ' out of ' + (i+1) + ' games')
  }
  if (playerScore > computerScore) {
    alert('Congratulations. You\'ve beaten a helpless machine.')
  } else {
    alert('By losing you have become meat for the machine.')
  }
};