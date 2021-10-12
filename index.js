console.log("Hello, World!")


function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    let randomResult;
    switch (randomNumber) {
        case 1:
            randomResult = "Rock";
            break;
        case 2:
            randomResult = "Paper";
            break;
        case 3:
            randomResult = "Scissors";
            break;
        default:
            break;
    }
    return randomResult;
}

function youLose(computerSelection) {
    return "Computer has " + computerSelection + ", You Lose!";
}

function youWin(computerSelection) {
    return "Computer has " + computerSelection + ", You Win!";
}


function playRound(playerSelection, computerSelection) {
    let result;
    let draw = "Draw! Computer also chose " + computerSelection + ".";
    if (playerSelection == "Rock") {
        switch (computerSelection) {
            case "Paper":
                result = youLose(computerSelection);
                break;
            case "Scissors":
                result = youWin(computerSelection);
                break;
            default: result = draw;
        }
        return result;
    }
    if (playerSelection == "Paper") {
        switch (computerSelection) {
            case "Scissors":
                result = youLose(computerSelection);
                break;
            case "Rock":
                result = youWin(computerSelection);
                break;
            default: result = draw;
        }
        return result;
    }
    if (playerSelection == "Scissors") {
        switch (computerSelection) {
            case "Rock":
                result = youLose(computerSelection);
                break;
            case "Paper":
                result = youWin(computerSelection);
                break;
            default: result = draw;
        }
        return result;
    }
    return result;
}




function game() {
    console.log("Hello, Welcome to the game of Rock, Paper, Scissors.")

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt();
        console.log("You chose " + playerSelection);
        console.log(playRound(playerSelection, computerPlay()));
    }
}

game();