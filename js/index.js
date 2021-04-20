"use strict";

(function () {
  var guessedNumber = 15;
  alert("Hello! Let's play a game!");
  while (true) {
    var userNumber = prompt("Please guess the number", "");

    if (userNumber && +userNumber === guessedNumber) {
      alert("Bravo! You guessed the number!");
      confirm("Do you want to try again?");
      break;
    } else if (userNumber && userNumber > guessedNumber) {
      alert("The number we guessed is lower, please try again");
    } else if (userNumber && userNumber < guessedNumber) {
      alert("The number we guessed is higher, please try again");
    } else {
      alert("You should type a number. Please try again");
    }
  }
})();
alert("Good buy!");
