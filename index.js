$(function() {});
const choice = ["pickRock", "pickPaper", "pickScissors"];
function pickRock() {
  $("#user").html("<i class='symbol far fa-hand-rock'></i>");
  determineOutcome();
}
function pickPaper() {
  $("#user").html("<i class='symbol far fa-newspaper'></i>");
  determineOutcome();
}
function pickScissors() {
  $("#user").html("<i class='symbol far fa-hand-scissors'></i>");
  determineOutcome();
}
function determineOutcome() {
  const userChoice = arguments.callee.caller.name; //sets userChoice to name of the function that called determineOutcome
  const opponentChoice = choice[Math.floor(Math.random() * 3)];
  switch (opponentChoice) {
    case "pickRock":
      $("#opponent").html("<i class='symbol far fa-hand-rock'></i>"); //JQuery Selector
      console.log(
        userChoice == "pickScissors"
          ? alertFail()
          : userChoice == "pickPaper"
          ? alertSuccess()
          : alertDraw()
      );
      break;
    case "pickScissors":
      $("#opponent").html("<i class='symbol far fa-hand-scissors'></i>"); //JQuery Selector
      console.log(
        userChoice == "pickPaper"
          ? alertFail()
          : userChoice == "pickRock"
          ? alertSuccess()
          : alertDraw()
      );
      break;
    case "pickPaper":
      $("#opponent").html("<i class='symbol far fa-newspaper'></i>"); //JQuery Selector
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
  $("#result").html("<h1 class='alert alert-success'>Success!</h1>"); //JQuery Selector
}
function alertFail() {
  $("#result").html("<h1 class='alert alert-danger'>Fail!</h1>"); //JQuery Selector
}
function alertDraw() {
  $("#result").html("<h1 class='alert alert-dark'>Try again!</h1>"); //JQuery Selector
}
