
$(document).ready(function() {
  var userChoice;
  var computerChoice;
  var userScore = 0;
  var computerScore = 0;
  var roundCounter = 1;
  var computerOptions = [
    "Rock",
    "Paper",
    "Your Mom"
  ]

  $(".btn-primary").on("click", function(){
      userChoice = this.id;
      computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];
      if(userChoice === computerChoice) {
        alert("TIE MUTHAFUCKA")

      } else if (userChoice === "Rock" && computerChoice === "Your Mom") {
        alert("YOU WIN DICKBAG")
      }
      console.log(userChoice, computerChoice);
    });





});
