var playerOneButton = document.querySelector("#player1");
var playerTwoButton = document.querySelector("#player2");
var resetButton = document.querySelector("#reset");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("#winScore");

var scoreOne = document.querySelector("#scoreOne");
var scoreTwo = document.querySelector("#scoreTwo");

var playerOneScore = 0;
var playerTwoScore = 0;

var gameOver = false;
var winningScore = 5;
winningScoreDisplay.textContent = winningScore;

numInput.addEventListener("change", function () {

    if (numInput.value <= 0) {
        alert("Please enter positive number!");
        reset();
    }
    else {
        winningScoreDisplay.textContent = numInput.value;
        winningScore = Number(numInput.value);
        reset();
    }

});

playerOneButton.addEventListener("click", function () {
    if (!gameOver) {
        playerOneScore++;
        if (playerOneScore === winningScore) {
            scoreOne.classList.add("winner");
            gameOver = true;
        }
        scoreOne.textContent = playerOneScore;
    }
});

playerTwoButton.addEventListener("click", function () {
    if (!gameOver) {
        playerTwoScore++;
        if (playerTwoScore === winningScore) {
            scoreTwo.classList.add("winner");
            gameOver = true;
        }
        scoreTwo.textContent = playerTwoScore;
    }
});

resetButton.addEventListener("click", function () {
    reset();
});

function reset() {
    playerOneScore = 0;
    playerTwoScore = 0;
    gameOver = false;
    scoreOne.classList.remove("winner");
    scoreTwo.classList.remove("winner");
    scoreOne.textContent = playerOneScore;
    scoreTwo.textContent = playerTwoScore;
}