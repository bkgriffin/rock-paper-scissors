// Randomly return either 'Rock', 'Paper', or 'Scissors'.
function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[getRandomInteger(0, 2)];
}

// Get a random integer.
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Format the player selection to be case-insensitive.
function formatPlayerSelection(playerSelection) {
    return playerSelection.charAt(0).toUpperCase() + playerSelection.toLowerCase().slice(1);
}
  
// Play a single round of Rock Paper Scissors.
function playRound(playerSelection, computerSelection) {
  
    const formattedPlayerSelection = formatPlayerSelection(playerSelection);
  
    if(formattedPlayerSelection === "Rock")
    {
      if(computerSelection === "Rock")
        return "Tie!  Rock ties Rock."
      else if (computerSelection === "Paper")
        return "You Lost!  Paper beats Rock."
      else if(computerSelection === "Scissors")
        return "You Win!  Rock beats Scissors!"
    }
    else if(formattedPlayerSelection === "Paper")
    {
      if(computerSelection === "Rock")
        return "You Win!  Paper beats Rock!"
      else if (computerSelection === "Paper")
        return "Tie!  Paper ties Paper."
      else if(computerSelection === "Scissors")
        return "You Lose!  Scissors beats Paper."
    }
    else if(formattedPlayerSelection === "Scissors")
    {
      if(computerSelection === "Rock")
        return "You Lost!  Rock beats Scissors."
      else if (computerSelection === "Paper")
        return "You Win!  Scissors beats Paper."
      else if(computerSelection === "Scissors")
        return "Tie!  Scissors ties Scissors!"
    }
}

const playerSelection = prompt("Please enter your selection: ");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));