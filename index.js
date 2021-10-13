console.log("Hello, World!")

let score = 0;
let roundCount = 1;

const buttons = Array.from(document.getElementsByClassName("btn-play"));

let results = Array.from(document.getElementsByClassName("result"));
let resultText = results[0];

// you chose line
let youChose = document.querySelector('#you-chose');
//shows what round
let round = document.querySelector('.round');
//shows score
const scoreElement = document.querySelector('.score');

const retryBtnContainer = document.querySelector('.btn-rty-container');

function setClickListener(e) {
    let playerChoice = this.id
    const computersChoice = computerPlay();
    youChose.innerHTML = "You Chose " + playerChoice;

    result = playRound(playerChoice, computersChoice);
    resultText.innerHTML = result;
    
    scoreElement.innerHTML = "Score: " + score;

    buttons.forEach(button => button.disabled = true);
    displayRetryButton();
    if (roundCount == 3) displayGameOver();
}

buttons.forEach(button => button.addEventListener('click', setClickListener))


function displayRetryButton() {
    const button = document.createElement('button');
    button.className = 'btn';
    button.id = 'btn-retry';
    if (roundCount != 3) {
        button.innerText = 'Retry?'
    } else button.innerText = "Play Again?"
    retryBtnContainer.appendChild(button);

    button.addEventListener('click', function() {
        if (roundCount == 3) {
            roundCount = 0;
            score = 0;
            scoreElement.innerText = "Score: " + score;
        }

        roundCount++;        
        round.innerHTML = "Round: " + roundCount;
        buttons.forEach(btn => btn.disabled = false);
        retryBtnContainer.removeChild(button);
        removeGameOver();

    });
}

let gameOverElement;
function displayGameOver() {
    gameOverElement = document.createElement('h1');
    gameOverElement.id = 'game-over';
    gameOverElement.innerText = "Game Over!"
    document.querySelector('#g-div').appendChild(gameOverElement);
}

function removeGameOver() {
    console.log("Remove Child Function");
    document.querySelector('#g-div').removeChild(gameOverElement);
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