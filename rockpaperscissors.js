const GAME_CHOICES = ["Rock", "Paper", "Scissors"];
const ROUNDS_TO_PLAY = 5;
const score = {
  win: 0,
  tie: 0,
  lose: 0
}
let rounds = 0;

// Randomly return either 'Rock', 'Paper', or 'Scissors'.
function getComputerChoice() {
    return GAME_CHOICES[getRandomInteger(0, 2)];
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
  return "Player Choice: " + playerChoice + ", Computer Choice: " + computerChoice;
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

// Set the text content of the divs.
function setDivTextContent(textDivs) { 
  textDivs.forEach(textDiv => {
    textDiv.Div.textContent = textDiv.TextContent;
  });
}

// Set the disabled status of the buttons.
function setButtonDisabledStatus(buttonStates) { 
  buttonStates.forEach(buttonState => {
    buttonState.Button.disabled = buttonState.Disabled;
  });
}

// Reset game score and rounds.
function resetGame() {
  score.win = 0;
  score.tie = 0;
  score.lose = 0;
  rounds = 0;
}

// End the gamplay loop.
function endGame(rockButton, paperButton, scissorsButton, gameRoundsDiv, gameChoicesDiv, gameResultsDiv, gameStatusDiv, gameScoreDiv) {
  const resetButton = document.querySelector(".reset-button");

  // Disable Player Choice buttons.  Enabled the reset button.
  setButtonDisabledStatus([    
    { Button: rockButton, Disabled: true }, 
    { Button: paperButton, Disabled: true },
    { Button: scissorsButton, Disabled: true },
    { Button: resetButton, Disabled: false }
  ]);
  
  resetButton.addEventListener('click', () => {
    // Reset score/rounds/choices/results/status divs.
    setDivTextContent([
      { Div: gameRoundsDiv, TextContent: "" }, 
      { Div: gameChoicesDiv, TextContent: "" }, 
      { Div: gameResultsDiv, TextContent: "" }, 
      { Div: gameStatusDiv, TextContent: "" }, 
      { Div: gameScoreDiv, TextContent: "" } 
    ]);

    // Enable the player choice buttons.  Disable the reset button.
    setButtonDisabledStatus([    
      { Button: rockButton, Disabled: false }, 
      { Button: paperButton, Disabled: false },
      { Button: scissorsButton, Disabled: false },
      { Button: resetButton, Disabled: true }
    ]);

    resetGame();
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
  if(rounds === ROUNDS_TO_PLAY) {
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