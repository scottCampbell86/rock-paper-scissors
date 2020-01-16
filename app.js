//import checkResult from './checkResult.js';
//import randomThrow from './randomThrow.js';
import { randomThrow, computerThrowValue, checkResult } from './randomThrow.js';
const button = document.getElementById('shoot-button');
//const resetButton = document.getElementById('reset-button');
const gameResults = document.getElementById('game-results');
//onsole.log(gameResults);
//const gameResults = document.getElementById('user-outcome');
//const gameResults = document.getElementById('draw-outcome');
const winsTotal = document.getElementById('win-total');
const lossTotal = document.getElementById('loss-total');
const drawTotal = document.getElementById('draw-total');


  //State declaration
let wins = 0;
let loses = 0;
let draws = 0;

  //Adds button to invoke defined functionality 
button.addEventListener("click", () => {
    console.log("click heard!")

  //this assigns the users selection to a var 
    const userChoice = document.querySelector('input:checked');
    console.log (userChoice);

  //this assigns the value of the user's selections to a var  
    const userMove = userChoice.value;
    console.log(userMove)

  //assigns the value of randomThrow to var
    const computerMove = (randomThrow())
     console.log(computerMove);
  
  //this assigns the games's outcome to a var by eval userMove and computerMove
    const outcome = checkResult(userMove, computerMove);
    console.log(outcome);
    //return outcome;
  
// function to toggle visibility of result announcement

let announceResult = () => {
  
        if (outcome === 'win') {
            gameResults.textContent = "You Win!";
            gameResults.style.visibility = 'visible';
            return;
        }  
        if (outcome === 'lose') {
            gameResults.textContent = "You Lose...";
            gameResults.style.visibility = 'visible';
            return;
        }  
        else {
            gameResults.textContent = "It's a draw, try again!";
            gameResults.style.visibility = 'visible';
            return;
        }
    
    }; 

    if (outcome === 'win') {
        wins++;
        winsTotal.textContent = wins;
        //gameResults.textContent = "You Win";
        announceResult();   
    }

    if (outcome === 'lose') {
        loses++;
        lossTotal.textContent = loses;
        //gameResults.textContent = "You lose";
        announceResult(); 
    }

    if (outcome === 'draw') {
        draws++;
        drawTotal.textContent = draws;
        //gameResults.textContent = "It's a draw";
        announceResult();
    }
});


