export { randomThrow, checkResult };

<<<<<<< HEAD
//export default 

function randomThrow() {
 Math.floor(Math.random() * 3);
=======
function randomThrow() {
    const num = Math.floor(Math.random() * 3);
>>>>>>> b36fab6c3495152870452d655f652cd60d97815d
    if (num === 0) {
        return 'rock';
    }
    if (num === 1) {
        return 'paper';
    }
    if (num === 2) {
        return 'scissors';
    }
<<<<<<< HEAD
};

function checkResult(player, computer) {
    
    if (player === computer) {
        return 'draw';
    }
    if (player === 'rock' && computer == 'scissors') {
        return 'win';
    }
    if (player === 'paper' && computer === 'rock') {
        return 'win';
    }
    if (player === 'scissors' && computer == 'paper') {
        return 'win'; 
    } else {
        return 'lose';
    }
}


export {
    randomThrow,
    checkResult
}




=======
}

function checkResult(player, computer) {  
    if (player === computer) return 'draw';
    if (player === 'rock' && computer === 'scissors') return 'win';
    if (player === 'paper' && computer === 'rock') return 'win';
    if (player === 'scissors' && computer === 'paper') return 'win'; 
    else return 'lose';
}
>>>>>>> b36fab6c3495152870452d655f652cd60d97815d
