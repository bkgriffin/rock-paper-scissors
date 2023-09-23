const choices = ["Rock", "Paper", "Scissors"];
const score = {
  win: 0,
  tie: 0,
  lose: 0
}

// Prompt the user for input of either 'Rock', 'Paper', or 'Scissors'.
function getPlayerChoice() {
  let playerChoice = formatPlayerChoice(prompt("Please enter your selection: "));
  while(!choices.includes(playerChoice)) {
    playerChoice = formatPlayerChoice(prompt("Invalid input!  Please enter your selection: "));
  }
  return playerChoice;
}

// Format the player choice to be case-insensitive.
function formatPlayerChoice(playerChoice) {
  if(playerChoice.length > 0)
    return playerChoice.charAt(0).toUpperCase() + playerChoice.toLowerCase().slice(1);
  else
    return null;
}

// Randomly return either 'Rock', 'Paper', or 'Scissors'.
function getComputerChoice() {
    return choices[getRandomInteger(0, 2)];
}
  
// Get a random integer.
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
  
// Play a single round of Rock Paper Scissors.
// If a round results in a win for the player, return true.  
// Otherwise, return false.
function playRound(playerChoice, computerChoice) {  
    if(playerChoice === "Rock")
    {
      if(computerChoice === "Rock") {
        score.tie += 1;
        return "Tie!  Rock ties Rock."
      }
      else if (computerChoice === "Paper") {
        score.lose += 1;
        return "You Lost!  Paper beats Rock."
      }
      else if(computerChoice === "Scissors") {
        score.win += 1;
        return "You Win!  Rock beats Scissors!"
      }
    }
    else if(playerChoice === "Paper")
    {
      if(computerChoice === "Rock") {
        score.win += 1;
        return "You Win!  Paper beats Rock!"
      }
      else if (computerChoice === "Paper") {
        score.tie += 1;
        return "Tie!  Paper ties Paper."
      }
      else if(computerChoice === "Scissors") {
        score.lose += 1;
        return "You Lost!  Scissors beats Paper."
      }
    }
    else if(playerChoice === "Scissors")
    {
      if(computerChoice === "Rock") {
        score.lose += 1;
        return "You Lost!  Rock beats Scissors."
      }
      else if (computerChoice === "Paper") {
        score.win += 1;
        return "You Win!  Scissors beats Paper."
      }
      else if(computerChoice === "Scissors") {
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
      const playerChoice = getPlayerChoice();
      const computerChoice = getComputerChoice();
      console.log(playRound(playerChoice, computerChoice));
    }

    getGameStatus();
}
  
game();