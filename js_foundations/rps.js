/* 
rock paper scissors
*/


const options = ['rock', 'paper', 'scissors'];

let yourScore = 0;
let botScore = 0;

function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * options.length)
    let randomOption = options[randomIndex];
    return randomOption;
}

function getPlayerChoice() {
    const playerOption = prompt("rock paper or scissors").toLowerCase();
    return playerOption;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return `It's a tie. it chose ${computerSelection} and you chose ${playerSelection}. it's ${yourScore} to ${botScore}`;
    } else if ((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'scissors' && computerSelection == 'paper') || (playerSelection == 'paper' && computerSelection == 'rock')) {
        yourScore ++;
        return `you win. it chose ${computerSelection} and you chose ${playerSelection}. it's ${yourScore} to ${botScore}`;
    } else {
        botScore ++;
        return `The bot wins. it chose ${computerSelection} and you chose ${playerSelection}. it's ${yourScore} to ${botScore}`;
    }
}

function playGame() {
    while (yourScore < 5 && botScore < 5) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
    if (botScore > yourScore) {
        console.log("The bot won");
    } else {
        console.log("You win");
    }
}

playGame();

