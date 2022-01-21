var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var diceQueryPlayer1 = document.querySelector(".player1");

var randomNumber2 = Math.floor((Math.random() * 6) + 1);
var diceQueryPlayer2 = document.querySelector(".player2");

var titleSelector = document.querySelector(".dyn-header h1");

switch (randomNumber1) {
  case 1:
    diceQueryPlayer1.setAttribute("src", "images/dice1.png");
    break;
  case 2:
    diceQueryPlayer1.setAttribute("src", "images/dice2.png");
    break;
  case 3:
    diceQueryPlayer1.setAttribute("src", "images/dice3.png");
    break;
  case 4:
    diceQueryPlayer1.setAttribute("src", "images/dice4.png");
    break;
  case 5:
    diceQueryPlayer1.setAttribute("src", "images/dice5.png");
    break;
  case 6:
    diceQueryPlayer1.setAttribute("src", "images/dice6.png");
    break;
}

switch (randomNumber2) {
  case 1:
    diceQueryPlayer2.setAttribute("src", "images/dice1.png");
    break;
  case 2:
    diceQueryPlayer2.setAttribute("src", "images/dice2.png");
    break;
  case 3:
    diceQueryPlayer2.setAttribute("src", "images/dice3.png");
    break;
  case 4:
    diceQueryPlayer2.setAttribute("src", "images/dice4.png");
    break;
  case 5:
    diceQueryPlayer2.setAttribute("src", "images/dice5.png");
    break;
  case 6:
    diceQueryPlayer2.setAttribute("src", "images/dice6.png");
    break;
}

if (randomNumber1 === randomNumber2) {
  titleSelector.textContent = "Draw 🥱";
}
else if (randomNumber1 > randomNumber2) {
  titleSelector.textContent = "Player 1 Wins! 🥳";
}
else {
  titleSelector.textContent = "Player 2 Wins... 😤";
}
