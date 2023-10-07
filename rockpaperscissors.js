const choices = ["Rock", "Paper", "Scissors"];
const score = {
  win: 0,
  tie: 0,
  lose: 0
}
let rounds = 0;

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
function playRound(playerChoice, computerChoice) {  
    rounds += 1;
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

// Get the choices made by both the player and computer.
function getChoicesMade(playerChoice, computerChoice) {
  return "Player Choice: " + playerChoice + ", Computer Choice: " + computerChoice + "\n";
}

// Get the score of the game.
function getGameScore() { 
  return "Win: " + score.win + ", Tie: " + score.tie + ", Lose: " + score.lose; 
}

// Report a winner or loser.
function getGameStatus() {
    if(score.win > score.lose)
        return "Congratulations!  You have won the game!";
    else if(score.win === score.lose)
        return "The game was a tie.";
    else if(score.win < score.lose)
        return "Oh no!  You have lost the game.";
}

// Get the round of the game.
function getGameRounds() {
  return "Round: " + rounds;
}

// End the gamplay loop.
function endGame(rockButton, paperButton, scissorsButton, gameRoundsDiv, gameChoicesDiv, gameResultsDiv, gameStatusDiv, gameScoreDiv) {
  // TODO:
  // - Style page
  // - Modify event listener code?  Lots of duplication at the moment, could condense?
  // - Modify endGame() method.  Lots of values being passed in.  Probably split into several methods?
  const resetButton = document.querySelector(".reset-button");

  // Disable Player Choice buttons.  Enabled the reset button.
  rockButton.disabled = true;
  paperButton.disabled = true;
  scissorsButton.disabled = true;
  resetButton.disabled = false;
  
  resetButton.addEventListener('click', () => {
    // Reset score/rounds/choices/results/status divs.
    gameRoundsDiv.textContent = ""; 
    gameChoicesDiv.textContent = "";
    gameResultsDiv.textContent = "";
    gameStatusDiv.textContent = "";
    gameScoreDiv.textContent = "";
    score.win = 0;
    score.tie = 0;
    score.lose = 0;
    rounds = 0;

    // Enable the player choice buttons.  Disable the reset button.
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
    resetButton.disabled = true;
  });

}

// Process the choice made by the player against the choice made by the computer.
function processPlayerChoice(playerChoice) {
  const rockButton = document.querySelector(".rock-button");
  const paperButton = document.querySelector(".paper-button");
  const scissorsButton = document.querySelector(".scissors-button");
  const gameRoundsDiv = document.querySelector(".game-rounds");
  const gameChoicesDiv = document.querySelector(".game-choices");
  const gameResultsDiv = document.querySelector(".game-results");
  const gameStatusDiv = document.querySelector(".game-status");
  const gameScoreDiv = document.querySelector(".game-score");

  const computerChoice = getComputerChoice();
  gameChoicesDiv.textContent = getChoicesMade(playerChoice, computerChoice);
  gameResultsDiv.textContent = playRound(playerChoice, computerChoice);
  gameScoreDiv.textContent = getGameScore();
  gameRoundsDiv.textContent = getGameRounds();

  // Report the game status and end the gameplay loop after 5 rounds.
  if(rounds === 5) {
    gameStatusDiv.textContent = getGameStatus();
    endGame(rockButton, paperButton, scissorsButton, gameRoundsDiv, gameChoicesDiv, gameResultsDiv, gameStatusDiv, gameScoreDiv);
  }   
}

// Play a 5 round game that keeps score and reports a winner or loser at the end.
function game() {
    const rockButton = document.querySelector(".rock-button");
    const paperButton = document.querySelector(".paper-button");
    const scissorsButton = document.querySelector(".scissors-button");

    rockButton.addEventListener('click', function() { processPlayerChoice('Rock'); });
    paperButton.addEventListener('click', function() { processPlayerChoice('Paper'); });
    scissorsButton.addEventListener('click', function() { processPlayerChoice('Scissors'); });
}
  
game();