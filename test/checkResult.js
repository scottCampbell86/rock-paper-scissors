export default function checkResult(player, computer) {
    
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