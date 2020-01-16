import checkResult from './checkResult.js';
import randomThrow from './randomThrow.js';

//this is assigned to the play button
const button = document.getElementById('shoot-button');

//this is assigned to the reset game button
const resetButton = document.getElementById('reset-button');

//this will report who won
const reportWinner = document.getElementById('report-winner');

//this will report that the outcome was a draw
const reportDraw = document.getElementById('report-draw');

//these will be manipulated text content
const userWins = document.getElementById('user-wins');
const computerWins = document.getElementById('computer-wins');

let wins = 0;
let loses = 0;
let draws = 0;

