/*Given a user choice, and a random throw for the computer, we will need to know the game result (from the user's perspective): "win", "lose", or "draw"


TDD a checkResult function that:
    Has two parameters: player and computer
        Returns one of the following values:
            draw - the throws are identical
            win - the player's throw beats the computer throw
            lose - the computer's throw beats the player's throw
    Write one test at a time, each test can address one of the nine possible outcomes. */
  

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