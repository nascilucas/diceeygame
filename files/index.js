var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var diceQueryPlayer1 = document.querySelectorAll(".playerDice")[0];
var diceImagePlayer1 = "images/dice" + randomNumber1 + ".png";
diceQueryPlayer1.setAttribute("src", diceImagePlayer1);

var randomNumber2 = Math.floor((Math.random() * 6) + 1);
var diceQueryPlayer2 = document.querySelectorAll(".playerDice")[1];
var diceImagePlayer2 = "images/dice" + randomNumber2 + ".png";
diceQueryPlayer2.setAttribute("src", diceImagePlayer2);

var titleSelector = document.querySelector(".dyn-header h1");

if (randomNumber1 === randomNumber2) {
  titleSelector.textContent = "Draw 🥱";
}
else if (randomNumber1 > randomNumber2) {
  titleSelector.textContent = "Player 1 Wins! 🥳";
}
else {
  titleSelector.textContent = "Player 2 Wins... 😤";
}
