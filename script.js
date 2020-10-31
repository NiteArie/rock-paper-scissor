function computerPlay() {
    let randomIndex = Math.floor(Math.random() * 3);
    let choices = ["Rock", "Paper", "Scissors"];

    return choices[randomIndex];
}

function formatChoice(text) {
    return text.slice(0, 1).toUpperCase() + text.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    let player = formatChoice(playerSelection);
    let computer = formatChoice(computerSelection);
    let winner = 0;

    if ( player == "Rock") {
        if ( computer == "Paper") {
            winner = 1;
        } else if ( computer == "Scissors" ) {
            winner = 2;
        }
    } else if ( player == "Paper") {
        if ( computer == "Rock") {
            winner = 1;
        } else if ( computer == "Scissors") {
            winner = 2;
        }
    } else if ( player == "Scissors" ) {
        if ( computer == "Rock" ) {
            winner = 2;
        } else if ( computer == "Paper" ) {
            winner = 1;
        }
    }

    return {
        player,
        computer,
        winner,
    }
    
}

function showWinner(result) {

    let resultText = document.querySelector(".result span");
    let playerScore = document.querySelector(".scores__player__score");
    let machineScore = document.querySelector(".scores__machine__score");

    if ( result.winner == 0) {
        resultText.textContent = "Draw!!! +0 xxxx2".toUpperCase();
    } else if ( result.winner == 1 ) {
        resultText.textContent = "Player Win!!! +1".toUpperCase();
        playerScore.textContent = Number(playerScore.textContent) + 1;
    } else {
        resultText.textContent = "Machine Win!!! +1".toUpperCase();
        machineScore.textContent = Number(machineScore.textContent) + 1;
    }
}

function toggleChoices(enable) {
    let choices = document.querySelectorAll("div.choices__selection");
    for ( let i = 0; i < choices.length; i++ ) {
        if (enable) {
            choices[i].style.cursor = "pointer";
        } else {
            choices[i].style.cursor = "not-allowed";
            choices[i].removeEventListener("click", playGame);
        }
    }
}

function playGame(event) {

    let div;
    if (event.target.nodeName == "I") {
        div = event.target.parentElement;
    } else {
        div = event.target;
    }

    let player = formatChoice(div.getAttribute('data-selection'));
    let computer = computerPlay();
    let computerSelection = document.querySelector(`.choices__selection[data-selection="${computer.toLowerCase()}"]`);

    div.classList.add("player");        
    computerSelection.classList.add("computer");

    let result = playRound(player, computer);

    showWinner(result);

    tryAgain.style.display = "inline";

    toggleChoices(false);
}

function initGame() {
    let choices = document.querySelectorAll("div.choices__selection");

    for ( let i = 0; i < choices.length; i++ ) {
        choices[i].addEventListener("click", playGame)
    }
}

function resetGame(event) {
    let choices = document.querySelectorAll("div.choices__selection");

    for ( let i = 0; i < choices.length; i++ ) {
        if (choices[i].classList.contains("player") || choices[i].classList.contains("computer")) {
            choices[i].classList.remove("player", "computer");
        }
    }

    initGame();
    toggleChoices(true);
}

let tryAgain = document.querySelector(".result button");

tryAgain.addEventListener("click", resetGame)

initGame();
