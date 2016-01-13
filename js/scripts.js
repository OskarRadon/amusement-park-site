$(document).ready(function() {
  var height = parseInt(prompt("What is your height in inches?"));

  if (height <= 36) {
    $(".short").addClass("highlight");
  } else if(height > 36 < 60) {
    $(".avg").addClass("highlight");
  } else {
    $(".tall").addClass("highlight");
  }
});
