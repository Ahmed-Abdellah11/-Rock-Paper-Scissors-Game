let userScore = 0;
let compScore = 0;
let roundResult;

const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const result_div = document.getElementById("result");
const scoreBoard = document.getElementById("Score_Board")

const choices = document.querySelectorAll(".choice");
const choiceMap = {
  rock: "Rock",
  paper: "Paper",
  scissors: "Scissors"
};

function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * 3)];
}

function win(user, comp) {
  userScore++;
  userScore_span.textContent = userScore;
  result_div.innerHTML = choiceMap[user]+' (user) Beats ' +choiceMap[comp]+' (comp). You Win!';
  roundResult = "win";
  changeColor()
}

function lose(user, comp) {
  compScore++;
  compScore_span.textContent = compScore;
  result_div.innerHTML = choiceMap[comp]+' (comp) Beats '+ choiceMap[user]+' (user). You Lose!';
  roundResult = "lose";
  changeColor()
}

function draw(user, comp) {
  result_div.innerHTML = choiceMap[user]+' Equals '+ choiceMap[comp]+' . Its a Draw.';
  roundResult = "draw";
  changeColor()
}

function changeColor(){
    if(roundResult=="win"){
        scoreBoard.style.backgroundColor = 'green';
    }
    else if(roundResult=="lose"){
        scoreBoard.style.backgroundColor = 'red';
    }
    else{
        scoreBoard.style.backgroundColor = 'blue';
    }
}

function playGame(userChoice) {
  const compChoice = getComputerChoice();

  if (userChoice === compChoice) {
    draw(userChoice, compChoice);
  } else if (
    (userChoice === "rock" && compChoice === "scissors") ||
    (userChoice === "paper" && compChoice === "rock") ||
    (userChoice === "scissors" && compChoice === "paper")
  ) {
    win(userChoice, compChoice);
  } else {
    lose(userChoice, compChoice);
  }
}

rock.addEventListener("click", function () {
  playGame("rock");
});
paper.addEventListener("click", function () {
  playGame("paper");
});
scissors.addEventListener("click", function () {
  playGame("scissors");
});
