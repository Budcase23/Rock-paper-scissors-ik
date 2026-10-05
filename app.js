let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
  let humanChoice = prompt("ROCK,PAPER,SCISSORS");
  humanChoice = humanChoice.toUpperCase();
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

function playGame() {
  function playRound(humanChoice, computerChoice) {
    if (computerChoice === humanChoice) {
      console.log(
        "DRAW current score computer: " + computerScore + " You " + humanScore,
      );
    } else if (humanChoice === "ROCK" && computerChoice === "SCISSORS") {
      humanScore++;
      console.log(
        "YOU win ROCK beats scissors  current score computer:" +
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
      console.log(
        "You lose " +
          computerChoice +
          " beats " +
          humanChoice +
          "current score: Computer " +
          computerScore +
          "you: " +
          humanScore,
      );
    }
  }
  for (let i = 0; i <= 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  if (computerScore > humanScore) {
    console.log(
      "YOU LOOSE COMPUTER : " + computerScore + " YOU: " + humanScore,
    );
  } else {
    console.log("YOU WIN! COMPUTER : " + computerScore + " YOU: " + humanScore);
  }
}

playGame();
