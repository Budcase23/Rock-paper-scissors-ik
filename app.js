function getComputerChoice() {
  let computerChoice = null;
  result = Math.floor(Math.random() * 3 + 1);

  if (result == 1) {
    computerChoice = "Rock";
  } else if (result == 2) {
    computerChoice = "Scissors";
  } else if (result == 3) {
    computerChoice = "paper";
  }
  return computerChoice;
}

console.log(getComputerChoice());
