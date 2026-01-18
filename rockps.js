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

let humanScore, computerScore;
humanScore = 0;
computerScore = 0;
