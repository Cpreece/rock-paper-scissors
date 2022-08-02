let choices = ['rock','paper','scissors']
let score = 0

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

function playerInput() {
  playerChoice = prompt('Choose Your Weapon. (Rock, Paper or Scissors)').toLowerCase()
  if (choices.includes(playerChoice)) {
    return playerChoice
  } else {
   return playerInput(); 
  }
};

function getComputerChoice() {
  return choices[Math.floor(Math.random()*choices.length)]
};


function youWin(player, computer) {
  score += 1
  alert("You Win : " + capitalizeFirstLetter(player) + " > " + capitalizeFirstLetter(computer))
};
function youLose(player, computer) {
  alert("You Lose : " + capitalizeFirstLetter(player) + " < " + capitalizeFirstLetter(computer))
};
function youTie(player, computer) {
  alert("You Tie : " + capitalizeFirstLetter(player) + " = " + capitalizeFirstLetter(computer))
  playRound(playerInput(), getComputerChoice())
};

function playRound(playerSelection, computerSelection) {
  console.log('player = ' + playerSelection)
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
  score = 0 
  for (let i = 0; i < 5; i++) {
    playRound(playerInput(), getComputerChoice());
    console.log('You\'ve won ' + score + ' out of ' + (i+1) + ' games')
  }
};