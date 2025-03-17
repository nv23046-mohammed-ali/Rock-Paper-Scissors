function getComputerChoice() {
  const randomNumber = Math.random();
  
  if (randomNumber < 0.33) {
    return "rock";
  } else if (randomNumber < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  const choice = prompt("Enter your choice: rock, paper, or scissors");
  return choice.toLowerCase();
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  
  function playRound(humanChoice, computerChoice) {
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    
    humanChoice = humanChoice.toLowerCase();
    
    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    } else {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
    }
    
    console.log(`Current score - You: ${humanScore}, Computer: ${computerScore}`);
  }
  
  for (let round = 1; round <= 5; round++) {
    console.log(`\nRound ${round}:`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  
  console.log("\n--- FINAL RESULTS ---");
  if (humanScore > computerScore) {
    console.log(`You win the game! Final score: You ${humanScore}, Computer ${computerScore}`);
  } else if (computerScore > humanScore) {
    console.log(`Computer wins the game! Final score: Computer ${computerScore}, You ${humanScore}`);
  } else {
    console.log(`It's a tie! Final score: You ${humanScore}, Computer ${computerScore}`);
  }
}

console.log("Welcome to Rock Paper Scissors!");
console.log("The game will be played in 5 rounds.");
playGame();
