// Defining Constants
const moves = {
  rock: "rock",
  paper: "paper",
  scissors: "scissors",
};

const score = {
  wins: 0,
  loses: 0,
  draws: 0,
};

// Linking to the HTML
const rockbtn = document.getElementById("rock-button");
const paperbtn = document.getElementById("paper-button");
const scissorsbtn = document.getElementById("scissors-button");
const resetbtn = document.getElementById("reset");

const resultMessage = document.getElementById("result-message");
const scoreMessage = document.getElementById("score-message");

resetbtn.addEventListener("click", resetScore);

function resetScore() {
  score.wins = 0;
  score.loses = 0;
  score.draws = 0;
  scoreMessage.textContent = `Wins: ${score.wins}, Losses: ${score.loses}, Draws: ${score.draws}`;
}

rockbtn.addEventListener("click", () => playerMove(moves.rock));
paperbtn.addEventListener("click", () => playerMove(moves.paper));
scissorsbtn.addEventListener("click", () => playerMove(moves.scissors));

function playerMove(playerChoice) {
  const botChoice = botMove();

  if (playerChoice === botChoice) {
    result = "tied";
    score.draws++;
  } else if (
    (playerChoice === moves.rock && botChoice === moves.paper) ||
    (playerChoice === moves.scissors && botChoice === moves.rock) ||
    (playerChoice === moves.paper && botChoice === moves.scissors)
  ) {
    result = "lost";
    score.loses++;
  } else {
    result = "win";
    score.wins++;
  }

  resultMessage.textContent = `You picked ${playerChoice}. The bot picked ${botChoice}. You ${result}`;
  scoreMessage.textContent = `Wins: ${score.wins}, Losses: ${score.loses}, Draws: ${score.draws}`;

  return result;
}

function botMove() {
  let bot = "";
  const chose = Math.random();

  if (chose > 0 && chose < 0.33) {
    bot = moves.paper;
  } else if (chose >= 0.33 && chose < 0.67) {
    bot = moves.rock;
  } else {
    bot = moves.scissors;
  }

  return bot;
}
