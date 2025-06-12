let getComputerChoice = () => {
  let computerChoice = Math.floor(Math.random() * 100) + 1;
  console.log(computerChoice);
  return computerChoice > 66
    ? "Rock"
    : computerChoice < 33
    ? "Paper"
    : "Scissors";
};

console.log(getComputerChoice());
