
$(document).ready(function() {
  var myWords = ["Rock", "Paper", "Your Mom"];

  $("#changeWordBtn").on("click", function() {
    var myRandomNumber = Math.floor(Math.random() * myWords.length);
    $("h1").html(function() {
      $(this).html(myWords[myRandomNumber]);

    });
  });
});