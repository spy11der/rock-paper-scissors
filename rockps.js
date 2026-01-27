function getComputerChoice() {
  let randomNumber = Math.random();

  if (randomNumber < 0.33) {
    return "rock";
  } else if (randomNumber < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let userInput = prompt("Do you choose rock, paper or scissors?");
  if (!userInput) return null; // user hit Cancel
  return userInput.toLowerCase();
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      return "It's a tie!";
    }

    // Human loses cases
    if (humanChoice === "rock" && computerChoice === "paper") {
      computerScore++;
      return "You lose! Paper beats rock.";
    }

    if (humanChoice === "paper" && computerChoice === "scissors") {
      computerScore++;
      return "You lose! Scissors beats paper.";
    }

    if (humanChoice === "scissors" && computerChoice === "rock") {
      computerScore++;
      return "You lose! Rock beats scissors.";
    }

    // Otherwise human wins
    humanScore++;

    // Win message that matches the winning matchup
    if (humanChoice === "rock") return "You win! Rock beats scissors.";
    if (humanChoice === "paper") return "You win! Paper beats rock.";
    return "You win! Scissors beats paper.";
  }

  for (let i = 0; i < 5; i++) {
  let humanChoice = getHumanChoice();
  if (humanChoice === null) {
    console.log("Game cancelled.");
    return;
  }

  let computerChoice = getComputerChoice();

  let result = playRound(humanChoice, computerChoice);

  console.log("Round " + (i + 1));
  console.log("Human: " + humanChoice);
  console.log("Computer: " + computerChoice);
  console.log(result);
  console.log("Score: Human " + humanScore + " Computer " + computerScore);
}


  if (humanScore > computerScore) {
    console.log("Congratulations! You won the game!");
  } else if (computerScore > humanScore) {
    console.log("Sorry, you lost the game.");
  } else {
    console.log("It's a tie game!");
  }
}

playGame();
