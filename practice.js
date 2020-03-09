let userInput;
userInput = prompt("What do you want to eat?");
if ( userInput === "burrito" || "Burrito" || "Burritos" ) {
    $("#response").html("Brilliant choice!");
  } else {
    $("#response").html("Don't you want a burrito?");
  }
