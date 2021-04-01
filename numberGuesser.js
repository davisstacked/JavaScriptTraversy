/* GAME FUNCTION: 
- Player must guess number between a min and a max.
- Player gets a certain amount of guesses.
- Notify player of guesses remaining.
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// GAME VALUES
let min = 1;
let max = 10;
let winningNum = 2;
let guessesLeft = 3;

// UI ELEMENTS
const UIgame = document.getElementById('game');
const UIminNum = document.querySelector('.min-num');
const UImaxNum = document.querySelector('.max-num');
const UIguessBtn = document.querySelector('#guess-btn');
const UIguessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');

// ASSIGN UI MIN AND MAX
minNum.textContent = min;
maxNum.textContent = max;