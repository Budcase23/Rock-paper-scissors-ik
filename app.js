let humanScore = 0;
let computerScore = 0;
let humanChoice;
let computerChoice;

function getHumanChoice() {
  humanChoice = prompt("ROCK,PAPER,SCISSORS");
  humanChoice = humanChoice.toUpperCase();
  console.log("YOUR PICK " + humanChoice);
  return humanChoice;
}

function getComputerChoice() {
  computerChoice = null;
  result = Math.floor(Math.random() * 3 + 1);

  if (result === 1) {
    computerChoice = "ROCK";
  } else if (result === 2) {
    computerChoice = "SCISSORS";
  } else if (result === 3) {
    computerChoice = "PAPER";
  }
  console.log("Computer choice: " + computerChoice);
  return computerChoice;
}

function playRound(humanChoice, computerChoice) {
  if (computerChoice === humanChoice) {
    console.log(
      "DRAW current score computer: " + computerScore + " You " + humanScore,
    );
  } else if (humanChoice === "ROCK" && computerChoice === "SCISSORS") {
    humanScore++;
    console.log(
      "YOU win paper beats rock  current score computer:" +
        computerScore +
        " You " +
        humanScore,
    );
  } else if (humanChoice === "PAPER" && computerChoice === "ROCK") {
    humanScore++;
    console.log(
      "YOU WIN PAPER beats  rock  current score computer:" +
        computerScore +
        " You " +
        humanScore,
    );
  } else if (humanChoice === "SCISSORS" && computerChoice === "PAPER") {
    humanScore++;
    console.log(
      "YOU WIN SCISSORS beat  paper  current score computer:" +
        computerScore +
        " You " +
        humanScore,
    );
  } else {
    computerScore++;
    console.log("You lose " + computerChoice + " beats " + humanChoice);
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));
