//import checkResult from './checkResult.js'

//export default 

function randomThrow(){
    const computerThrow = Math.floor(Math.random() * 3);
    return computerThrowValue(computerThrow);
}

function computerThrowValue(num) {
    if (num === 0) {
        return 'rock';
    }
    if (num === 1) {
        return 'paper';
    }
    if (num === 2) {
        return 'scissors';
    }
};

function checkResult(player, computer) {
    
    if (player === computer) {
        return 'draw';
    };
    if (player === 'rock' && computer == 'scissors') {
        return 'win';
    }; 
    if (player === 'paper' && computer === 'rock') {
        return 'win';
    };
    if (player === 'scissors' && computer == 'paper') {
        return 'win'; 
    } else {
        return 'lose';
    }
}


export {
    randomThrow,
    computerThrowValue,
    checkResult
}




