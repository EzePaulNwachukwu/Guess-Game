const randomnumb = document.querySelector("h2:first-of-type");
const inputguess = document.querySelector("input");
const showscore = document.querySelector("h2:nth-last-of-type(2) span");
const message = document.querySelector("h2:last-of-type");
const checkNumber = document.querySelector("button");
const bodi = document.querySelector("body");
const restart = document.querySelector("button#restart");
const main = document.querySelector(".container");
let score = 10;

let refresh = function () {
  location.reload();
};
restart.addEventListener("click", function (e) {
  e.preventDefault();
  refresh();
});
checkNumber.addEventListener("click", function (e) {
  let unknownNumber = Math.trunc(Math.random() * 10) + 1;
  let guess = Number(inputguess.value);
  showscore.textContent = score;
  randomnumb.textContent = `computer guessed ${unknownNumber}`;
  let displayMessage = function (newMessage) {
    message.textContent = newMessage;
  };

  e.preventDefault();
  if (!guess) {
    displayMessage("No Number");
  } else if (unknownNumber === guess) {
    score += 5;
    displayMessage("correct number");
    message.style.backgroundColor = "green";
    message.style.color = "white";


    if (score >= 20) {
      displayMessage("you won!!!!");
      bodi.style.backgroundColor = "green";
      message.style.color = "green";
      setTimeout(() => {
        refresh();
      }, 1000 * 3);
    }
  } else if (unknownNumber !== guess) {
    score -= 1;
    displayMessage("wrong Number");
    message.style.backgroundColor = "red"
    message.style.color = "white";

    if (score < 2) {
      displayMessage("lose game");
      bodi.style.backgroundColor = "red";
      message.style.color = "white";
      setTimeout(() => {
        refresh();
      }, 1000 * 3);
    }
  } else {
    displayMessage("cheching.....");
  }
  inputguess.value = " ";
  // restartgame

  if (score <= 0 || score > 25) {
    refresh();
  }
});
