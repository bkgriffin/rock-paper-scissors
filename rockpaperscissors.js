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
// - Consider "Tie!" being a tie condition, rather than a loss condition.
function playRound(playerSelection, computerSelection) {
  
    const formattedPlayerSelection = formatPlayerSelection(playerSelection);
  
    if(formattedPlayerSelection === "Rock")
    {
      if(computerSelection === "Rock") {
        console.log("Tie!  Rock ties Rock.");
        return false;
      }
      else if (computerSelection === "Paper") {
        console.log("You Lost!  Paper beats Rock.");
        return false;
      }
      else if(computerSelection === "Scissors") {
        console.log("You Win!  Rock beats Scissors!");
        return true;
      }
    }
    else if(formattedPlayerSelection === "Paper")
    {
      if(computerSelection === "Rock") {
        console.log("You Win!  Paper beats Rock!");
        return true;
      }
      else if (computerSelection === "Paper") {
        console.log("Tie!  Paper ties Paper.");
        return false;
      }
      else if(computerSelection === "Scissors") {
        console.log("You Lost!  Scissors beats Paper.");
        return false;
      }
    }
    else if(formattedPlayerSelection === "Scissors")
    {
      if(computerSelection === "Rock") {
        console.log("You Lost!  Rock beats Scissors.");
        return false;
      }
      else if (computerSelection === "Paper") {
        console.log("You Win!  Scissors beats Paper.");
        return true;
      }
      else if(computerSelection === "Scissors") {
        console.log("Tie!  Scissors ties Scissors!");
        return false;
      }
    }
}

// Report a winner or loser.
function getGameStatus(numberOfWins, numberOfRounds) {
    if(numberOfWins > (numberOfRounds / 2))
        console.log("Congratulations!  You have won the game!");
    else if(numberOfWins === (numberOfRounds / 2))
        console.log("The game was a tie.");
    else if(numberOfWins < (numberOfRounds / 2))
        console.log("Oh no!  You have lost the game.");
}

// Play a 5 round game that keeps score and reports a winner or loser at the end.
function game() {
    const numberOfRounds = 5;
    let numberOfWins = 0;

    for(let i = 0; i < numberOfRounds; i++) {
      const playerSelection = prompt("Please enter your selection: ");
      const computerSelection = getComputerChoice();
      
      // Keep a running count of player wins.
      if(playRound(playerSelection, computerSelection))
        numberOfWins++;
    }

    getGameStatus(numberOfWins, numberOfRounds);
}
  
game();