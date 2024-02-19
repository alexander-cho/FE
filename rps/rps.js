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

function playRound(playerSelection, computerSelection) {
    let result;
    if (playerSelection == computerSelection) {
        result = `It's a tie. you chose ${playerSelection} and it chose ${computerSelection}. it's ${yourScore} to ${botScore}`;
    } else if ((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'scissors' && computerSelection == 'paper') || (playerSelection == 'paper' && computerSelection == 'rock')) {
        yourScore ++;
        result = `you win. you chose ${playerSelection} and it chose ${computerSelection}. it's ${yourScore} to ${botScore}`;
    } else {
        botScore ++;
        result = `The bot wins. you chose ${playerSelection} and it chose ${computerSelection}. it's ${yourScore} to ${botScore}`;
    }
    // create a paragraph element to display result
    const resultParagraph = document.createElement('p');
    resultParagraph.textContent = result;
    document.body.appendChild(resultParagraph);
    if (botScore == 5 || yourScore == 5) {
        let winner;
        if (botScore == 5) {
            winner = "The bot";
        } else {
            winner = "You";
        }
        const gameWinningParagraph = document.createElement('p');
        gameWinningParagraph.textContent = `${winner} won`;
        gameWinningParagraph.style.color = 'red';
        document.body.appendChild(gameWinningParagraph);
        // Disable the buttons to prevent further clicks
        buttons.forEach(button => button.disabled = true);
    }
}

const rockButton = document.createElement('button');
rockButton.textContent = "Rock";
document.body.appendChild(rockButton);
const paperButton = document.createElement('button');
paperButton.textContent = "Paper";
document.body.appendChild(paperButton);
const scissorsButton = document.createElement('button');
scissorsButton.textContent = "Scissors";
document.body.appendChild(scissorsButton);

const buttons = document.querySelectorAll('button')
buttons.forEach(function(currentButton){
    currentButton.addEventListener('click', () => {
        const playerSelection = currentButton.textContent.toLowerCase();
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    });
});

const results = document.createElement('div');
results.classList.add('results');
results.textContent = "Results and scoring:";

document.body.appendChild(results);

