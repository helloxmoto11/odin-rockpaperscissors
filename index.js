console.log("Hello, World!")

let score = 0;
let roundCount = 1;

const buttons = Array.from(document.getElementsByClassName("btn-play"));

let results = Array.from(document.getElementsByClassName("result"));
let resultText = results[0];

let youChose = document.querySelector('#you-chose');
let round = document.querySelector('.round');



const scoreElement = document.querySelector('.score');

const retryBtnContainer = document.querySelector('.btn-rty-container');

const retryButton = document.querySelector('#btn-retry');


function setClickListener(e) {
    let playerPlay = this.id
    const computersPlay = computerPlay();
    youChose.innerHTML = "You Chose " + playerPlay;

    result = playRound(playerPlay, computersPlay);
    resultText.innerHTML = result;
    
    scoreElement.innerHTML = "Score: " + score;
    console.log(score);
    buttons.forEach(button => button.disabled = true);
    displayRetryButton();
}

buttons.forEach(button => button.addEventListener('click', setClickListener))


function displayRetryButton() {
    const button = document.createElement('button');
    button.className = 'btn';
    button.id = 'btn-retry';
    button.innerText = 'Play Again?'
    retryBtnContainer.appendChild(button);

    button.addEventListener('click', function() {
        roundCount++;
        round.innerHTML = "Round: " + roundCount;
        buttons.forEach(btn => btn.disabled = false);
        retryBtnContainer.removeChild(button);
    });
}


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
    score++;
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
    console.log("Hello, Welcome to the game of Rock, Paper, Scissors.");
}

game();