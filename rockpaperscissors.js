const score = {
  win: 0,
  tie: 0,
  lose: 0
}

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
// If a round results in a win for the player, return true.  
// Otherwise, return false.
//
// TODO: 
// - Handle invalid input i.e. blank input
function playRound(playerSelection, computerSelection) {
  
    const formattedPlayerSelection = formatPlayerSelection(playerSelection);
  
    if(formattedPlayerSelection === "Rock")
    {
      if(computerSelection === "Rock") {
        score.tie += 1;
        return "Tie!  Rock ties Rock."
      }
      else if (computerSelection === "Paper") {
        score.lose += 1;
        return "You Lost!  Paper beats Rock."
      }
      else if(computerSelection === "Scissors") {
        score.win += 1;
        return "You Win!  Rock beats Scissors!"
      }
    }
    else if(formattedPlayerSelection === "Paper")
    {
      if(computerSelection === "Rock") {
        score.win += 1;
        return "You Win!  Paper beats Rock!"
      }
      else if (computerSelection === "Paper") {
        score.tie += 1;
        return "Tie!  Paper ties Paper."
      }
      else if(computerSelection === "Scissors") {
        score.lose += 1;
        return "You Lost!  Scissors beats Paper."
      }
    }
    else if(formattedPlayerSelection === "Scissors")
    {
      if(computerSelection === "Rock") {
        score.lose += 1;
        return "You Lost!  Rock beats Scissors."
      }
      else if (computerSelection === "Paper") {
        score.win += 1;
        return "You Win!  Scissors beats Paper."
      }
      else if(computerSelection === "Scissors") {
        score.tie += 1;
        return "Tie!  Scissors ties Scissors!"
      }
    }
}

// Report a winner or loser.
function getGameStatus() {
    if(score.win > score.lose)
        console.log("Congratulations!  You have won the game!");
    else if(score.win === score.lose)
        console.log("The game was a tie.");
    else if(score.win < score.lose)
        console.log("Oh no!  You have lost the game.");
}

// Play a 5 round game that keeps score and reports a winner or loser at the end.
function game() {
    const numberOfRounds = 5;

    for(let i = 0; i < numberOfRounds; i++) {
      const playerSelection = prompt("Please enter your selection: ");
      const computerSelection = getComputerChoice();
      console.log(playRound(playerSelection, computerSelection));
    }

    getGameStatus();
}
  
game();