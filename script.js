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
    if ( player == "Rock") {
        if ( computer == "Paper") {
            return `You Lose! ${computer} beats ${player}`;
        } else if ( computer == "Scissors" ) {
            return `You Win! ${player} beats ${computer}`;
        }
        return `Draw`;
    } else if ( player == "Paper") {
        if ( computer == "Rock") {
            return `You Win! ${player} beats ${computer}`;
        } else if ( computer == "Scissors") {
            return `You Lose! ${computer} beats ${player}`;
        }
        return `Draw`;
    } else if ( player == "Scissors" ) {
        if ( computer == "Rock" ) {
            return `You Lose! ${computer} beats ${player}`;
        } else if ( computer == "Paper" ) {
            return `You Win! ${player} beats ${computer}`;
        }
        return `Draw`;
    }
}

console.log(playRound("rock", computerPlay()));