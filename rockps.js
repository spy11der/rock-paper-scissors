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

console.log(getComputerChoice());

function getHumanChoice() {
    let userInput = prompt("Do you choose rock, paper or scissors?");
    let userChoice = userInput.toLowerCase();
    return userChoice;
}
console.log(getHumanChoice());

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

   // Human wins cases
   if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    return "You win! Rock beats scissors.";
   }

   if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    return "You win! Paper beats rock.";
   }

   if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    return "You win! Scissors beats paper.";
   }
}

let result = playRound(humanScore, computerScore);

