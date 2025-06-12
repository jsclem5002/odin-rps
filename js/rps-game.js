let humanScore = 0;
let computerScore = 0;

let getComputerChoice = () => {
  let computerChoice = Math.floor(Math.random() * 100) + 1;
  console.log(computerChoice);
  return computerChoice > 66
    ? "rock"
    : computerChoice < 33
    ? "paper"
    : "scissors";
};

let getHumanChoice = () => {
  let humanChoice = prompt("Rock, Paper, or Scissors?", "");
  console.log(humanChoice);
  return humanChoice;
};

let playRound = (humanChoice, computerChoice) => {
  humanChoice.toLowerCase();
  return humanChoice === "rock" && computerChoice === "paper"
    ? (console.log("You lose! Paper beats rock!"), computerScore++)
    : humanChoice === "rock" && computerChoice === "scissors"
    ? (console.log("You win! Rock beats scissors!"), humanScore++)
    : humanChoice === "paper" && computerChoice === "scissors"
    ? (console.log("You lose! Scissors beats paper!"), computerScore++)
    : humanChoice === "paper" && computerChoice === "rock"
    ? (console.log("You win! Paper beats rock!"), humanScore++)
    : humanChoice === "scissor" && computerChoice === "rock"
    ? (console.log("You lose! Rock beats scissors!"), computerScore++)
    : humanChoice === "scissor" && computerChoice === "paper"
    ? (console.log("You win! Scissor beats paper!"), humanScore++)
    : console.log("It's a tie!");
};

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
console.log(
  "Human Score:" + humanScore + " | Computer Score: " + computerScore
);
