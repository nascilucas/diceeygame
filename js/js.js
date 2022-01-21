function checkNumber(randomNumber, diceQueryPlayer){
  switch (randomNumber) {
    case 1:
      diceQueryPlayer.setAttribute("src", "images/dice1.png");
      break;
    case 2:
      diceQueryPlayer.setAttribute("src", "images/dice2.png");
      break;
    case 3:
      diceQueryPlayer.setAttribute("src", "images/dice3.png");
      break;
    case 4:
      diceQueryPlayer.setAttribute("src", "images/dice4.png");
      break;
    case 5:
      diceQueryPlayer.setAttribute("src", "images/dice5.png");
      break;
    case 6:
      diceQueryPlayer.setAttribute("src", "images/dice6.png");
      break;
  }
}

function checkResult(randomNumber1, randomNumber2){

  if (randomNumber1 === randomNumber2) {
    titleSelector.textContent = "Draw 🥱";
  }else if (randomNumber1 > randomNumber2) {
    titleSelector.textContent = "Player 1 Wins! 🥳";
  }else if (randomNumber1 < randomNumber2) {
    titleSelector.textContent = "Player 2 Wins! 😤";
  }else{
    titleSelector.textContent = "";    
  }
}

var randomNumber1 = 0;
var diceQueryPlayer1 = document.querySelector(".player1");

var randomNumber2 = 0;
var diceQueryPlayer2 = document.querySelector(".player2");

var titleSelector = document.querySelector(".dyn-header h1");

function play(){
  var randomNumber1 = Math.floor((Math.random() * 6) + 1);
  var randomNumber2 = Math.floor((Math.random() * 6) + 1);
  checkNumber(randomNumber1, diceQueryPlayer1);
  checkNumber(randomNumber2, diceQueryPlayer2);
  checkResult(randomNumber1, randomNumber2);
}




