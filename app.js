<<<<<<< HEAD
//import checkResult from './checkResult.js';
//import randomThrow from './randomThrow.js';
import { randomThrow, checkResult } from './randomThrow.js';
=======
import { randomThrow, checkResult } from './randomThrow.js';

>>>>>>> b36fab6c3495152870452d655f652cd60d97815d
const button = document.getElementById('shoot-button');
const resetButton = document.getElementById('reset-button');
const gameResults = document.getElementById('game-results');
const winsTotal = document.getElementById('win-total');
const lossTotal = document.getElementById('loss-total');
const drawTotal = document.getElementById('draw-total');


//State declaration
let wins = 0;
let loses = 0;
let draws = 0;

function playGame() {
  console.log("click heard!")

  //this assigns the users selection to a var 
    const userChoice = document.querySelector('input:checked');

  //this assigns the value of the user's selections to a var  
    const userMove = userChoice.value;

  //assigns the value of randomThrow to var
    const computerMove = (randomThrow());
  
  //this assigns the games's outcome to a var by eval userMove and computerMove
    const outcome = checkResult(userMove, computerMove);
  
// function to toggle visibility of result announcement

    let announceResult = () => {
        if (outcome === 'win') gameResults.textContent = 'You Win!';
        else if (outcome === 'lose') gameResults.textContent = 'You Lose...';
        else gameResults.textContent = 'It\'s a draw, try again!';
        gameResults.style.display = 'inherit';
    }; 

    if (outcome === 'win') {
        wins++;
        winsTotal.textContent = wins;
    } else if (outcome === 'lose') {
        loses++;
        lossTotal.textContent = loses;
    } else {
        draws++;
        drawTotal.textContent = draws;
    }
    announceResult();
}

//Adds button to invoke defined functionality 
button.addEventListener('click', playGame);

resetButton.addEventListener('click', () => {
    console.log('click heard!');
    wins = 0;
    loses = 0;
    draws = 0;
    winsTotal.textContent = wins;
    lossTotal.textContent = loses;
    drawTotal.textContent = draws;
<<<<<<< HEAD
    gameResults.style.visibility = 'hidden';

=======
    gameResults.style.display = 'none';
>>>>>>> b36fab6c3495152870452d655f652cd60d97815d
});

