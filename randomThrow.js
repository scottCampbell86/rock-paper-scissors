export { randomThrow, checkResult };

function randomThrow() {
    const num = Math.floor(Math.random() * 3);
    if (num === 0) {
        return 'rock';
    }
    if (num === 1) {
        return 'paper';
    }
    if (num === 2) {
        return 'scissors';
    }
}

function checkResult(player, computer) {  
    if (player === computer) return 'draw';
    if (player === 'rock' && computer === 'scissors') return 'win';
    if (player === 'paper' && computer === 'rock') return 'win';
    if (player === 'scissors' && computer === 'paper') return 'win'; 
    else return 'lose';
}