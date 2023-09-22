// Randomly return either 'Rock', 'Paper', or 'Scissors'.
function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[getRandomInteger(0, 2)];
}

// Get a random integer.
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}