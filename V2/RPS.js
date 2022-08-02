let choices = ['Rock','Paper','Scissors']
let playerSelection = prompt('Choose Your Weapon. (Rock, Paper or Scissors)')

function getComputerChoice() {
  return choices[Math.floor(Math.random()*choices.length)]
};

playRound(playerSelection, computerSelection)