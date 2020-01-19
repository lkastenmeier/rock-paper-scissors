const choice = ["pickRock", "pickPaper", "pickScissors"];
function pickRock() {
  $("#user").html("<i class='symbol far fa-hand-rock'></i>"); //JQuery Selector
  determineOutcome("pickRock");
}
function pickPaper() {
  $("#user").html("<i class='symbol far fa-newspaper'></i>");
  determineOutcome("pickPaper");
}
function pickScissors() {
  $("#user").html("<i class='symbol far fa-hand-scissors'></i>");
  determineOutcome("pickScissors");
}
function determineOutcome(pick) {
  const userChoice = pick;
  const opponentChoice = choice[Math.floor(Math.random() * choice.length)];
  switch (opponentChoice) {
    case "pickRock":
      $("#opponent").html("<i class='symbol far fa-hand-rock'></i>");
      console.log(
        userChoice == "pickScissors"
          ? alertFail()
          : userChoice == "pickPaper"
          ? alertSuccess()
          : alertDraw()
      );
      break;
    case "pickScissors":
      $("#opponent").html("<i class='symbol far fa-hand-scissors'></i>");
      console.log(
        userChoice == "pickPaper"
          ? alertFail()
          : userChoice == "pickRock"
          ? alertSuccess()
          : alertDraw()
      );
      break;
    case "pickPaper":
      $("#opponent").html("<i class='symbol far fa-newspaper'></i>");
      console.log(
        userChoice == "pickRock"
          ? alertFail()
          : userChoice == "pickScissors"
          ? alertSuccess()
          : alertDraw()
      );
      break;
  }
}
function alertSuccess() {
  $("#result").html("<h1 class='alert alert-success'>Success!</h1>");
}
function alertFail() {
  $("#result").html("<h1 class='alert alert-danger'>Fail!</h1>");
}
function alertDraw() {
  $("#result").html("<h1 class='alert alert-dark'>Try again!</h1>");
}
