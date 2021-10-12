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

console.log(computerPlay());
console.log(computerPlay());
console.log(computerPlay());
console.log(computerPlay());
console.log(computerPlay());