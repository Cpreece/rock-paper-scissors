let choices = ['rock','paper','scissors']
let computerSelection, playerSelection

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function youWin() {
  return document.getElementById('game-result').innerHTML = "You Win : " + capitalizeFirstLetter(playerSelection) + " > " + capitalizeFirstLetter(computerSelection) 
};
function youLose() {
  return document.getElementById('game-result').innerHTML = "You Lose : " + capitalizeFirstLetter(playerSelection) + " < " + capitalizeFirstLetter(computerSelection) 
};
function youTie() {
  return document.getElementById('game-result').innerHTML = "You Tie : " + capitalizeFirstLetter(playerSelection) + " = " + capitalizeFirstLetter(computerSelection)  
};

function playRound() {
  computerSelection = choices[Math.floor(Math.random()*choices.length)]
  console.log(computerSelection)
  playerSelection = document.getElementById('player_choice').value
  console.log(playerSelection)
  if (computerSelection === playerSelection) {
    return youTie ();
  } else if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      return youWin();
    } else {
      return youLose();
    }
  } else if (playerSelection === 'rock') {
    if (computerSelection === 'scissors') {
      youWin();
    } else {
      return youLose();
    }
  }  else if (playerSelection === 'scissors') {
    if (computerSelection === 'paper') {
      return youWin();
    } else {
      return youLose();
    }
  }
};

