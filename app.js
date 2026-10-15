let humanScore = 0;
let computerScore = 0;

const results = document.getElementById("results");
const score = document.getElementById("score");
const winner = document.getElementById("winner");

function getHumanChoice() {
  let humanChoice; //= prompt("ROCK,PAPER,SCISSORS");
  console.log("YOUR PICK " + humanChoice);
  return humanChoice;
}

function getComputerChoice() {
  let computerChoice = null;
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
  message = "";

  if (computerChoice === humanChoice) {
    message = "DRAW" + "Computer choice: " + computerChoice + " ";
  } else if (humanChoice === "ROCK" && computerChoice === "SCISSORS") {
    humanScore++;
    message = "YOU win " + "Computer choice: " + computerChoice + " ";
  } else if (humanChoice === "PAPER" && computerChoice === "ROCK") {
    humanScore++;
    message = "YOU WIN  " + "Computer choice: " + computerChoice + " ";
  } else if (humanChoice === "SCISSORS" && computerChoice === "PAPER") {
    humanScore++;
    message = "YOU WIN " + "Computer choice: " + computerChoice + " ";
  } else {
    computerScore++;
    message = "You lose " + "Computer choice: " + computerChoice + " ";
  }
  score.textContent =
    "Score: You " + humanScore + " - Computer " + computerScore;
  const p = document.createElement("p");
  p.textContent =
    message + "Score: You " + humanScore + " - Computer " + computerScore;
  results.appendChild(p);
}

const rock = document.getElementById("Rock");
const paper = document.getElementById("Paper");
const scissors = document.getElementById("Scissors");

rock.addEventListener("click", () => playRound("ROCK", getComputerChoice()));
paper.addEventListener("click", () => playRound("PAPER", getComputerChoice()));
scissors.addEventListener("click", () =>
  playRound("SCISSORS", getComputerChoice()),
);
