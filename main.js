//Defining Constants
const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

//Linking to the HTLM
const rockbtn = document.getElementById("rock-button");
const paperbtn = document.getElementById("paper-button");
const scissorsbtn = document.getElementById("scissors-button");
const restbtn = document.getElementById("reset")

const resultMessage = document.getElementById("result-message");
const scoreMessage = document.getElementById("score-message")


rockbtn.addEventListener("click", () => playerMove(ROCK));
paperbtn.addEventListener("click", () => playerMove(PAPER));
scissorsbtn.addEventListener("click", () => playerMove(SCISSORS));

//This will be the score store
  const score = {
  wins: 0,
  loses: 0,
  draws: 0
};

//This is the constant which will store the user input result
const playerResult = playerInputResult()
  
function playerInputResult(input) {
  return input
}

//This is what the player will input
function playerMove(playerMove) {
  const bot = botMove();

  let result = "";

  if (bot === playerMove) {
    result = "It's a tie";
  } else if (
    (bot === PAPER && playerMove === ROCK) ||
    (bot === SCISSORS && playerMove === PAPER) ||
    (bot === ROCK && playerMove === SCISSORS)
  ) {
    result = "You lose";
  } else {
    result = "You win";
  }

  //TODO: -Do some conditional rendering to show the icons of the bot move 
  resultMessage.textContent = `You picked ${playerMove}. The bot picked ${bot}, so ${result}`;

  if (result === "You win") {
      score.wins += 1;
  } else if (result === "You lose") {
      score.losses += 1;
  } else if (result === "It's a tie") {
      score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  scoreMessage.textContent = `Wins: ${score.wins}, Loses: ${score.loses}, Draws: ${score.draws}`;
  
}

//This function will generate the bot result and return it
function botMove() {
  const randomNumber = Math.random();

  let botMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    botMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    botMove = "paper";
  } else {
    botMove = "scissors";
  }
  return botMove;
}
