let playerOne = "rock";
let computer = "scissors";

switch (playerOne) {
  case computer:
    console.log("Tie Game!");
    break;

  case "rock":
    if (computer === "paper") {
      console.log("computer wins");
    } else {
      console.log("playerOne Wins!");
    }
    break;
  case "paper":
    if (computer === "scissors") {
      console.log("computer wins");
    } else {
      console.log("playerOne Wins!");
    }
    break;
  default:
    if (computer === "rock") {
      console.log("computer wins!");
    } else {
      console.log("playerOne wins!");
    }
}

switch (Math.floor(Math.random() * 5 + 1)) {
  case 1:
    console.log(1);
    break;

  case 2:
    console.log(2);
    break;

  case 3:
    console.log(3);
    break;

  default:
    console.log("no match");
}
