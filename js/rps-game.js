//Main game function
let playGame = () => {
  //Initialize scores
  let humanScore = 0;
  let computerScore = 0;

  //Rock, paper, scissors logic
  let playRound = (humanChoice, computerChoice) => {
    humanChoice.toLowerCase();

    const humanWinCondition =
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "scissor" && computerChoice === "paper");
    const computerWinCondition =
      (humanChoice === "rock" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "scissors") ||
      (humanChoice === "scissor" && computerChoice === "rock");

    if (humanChoice === computerChoice) {
      return console.log("It's a tie! Both picked " + humanChoice + ".");
    } else if (humanWinCondition) {
      humanScore++;
      return console.log(
        "You win! " + humanChoice + " beats " + computerChoice + "!"
      );
    } else if (computerWinCondition) {
      computerScore++;
      return console.log(
        "You lose! " + computerChoice + " beats " + humanChoice + "!"
      );
    }
  };

  //Loop up to 5 rounds
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(
      "Human Score:" + humanScore + " | Computer Score: " + computerScore
    );
  }

  //Return final score
  return humanScore > computerScore
    ? console.log(
        "You Win! Final Score - Human Score: " +
          humanScore +
          " | Computer Score: " +
          computerScore
      )
    : humanScore < computerScore
    ? console.log(
        "You Lose! Final Score - Human Score: " +
          humanScore +
          " | Computer Score: " +
          computerScore
      )
    : console.log(
        "It's a Tie! Final Score - Human Score: " +
          humanScore +
          " | Computer Score: " +
          computerScore
      );
};

//Auxillary Functions

//Generate computer answer
let getComputerChoice = () => {
  let computerChoice = Math.floor(Math.random() * 3) + 1;
  return computerChoice === 3
    ? "rock"
    : computerChoice === 2
    ? "paper"
    : "scissors";
};

//Prompt user choice
let getHumanChoice = () => {
  let humanChoice = prompt("Rock, Paper, or Scissors?", "");
  return humanChoice;
};

//Main game function call
playGame();
