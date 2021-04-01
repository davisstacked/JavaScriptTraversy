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
const UImessage = document.querySelector('.message');

// ASSIGN UI MIN AND MAX
UIminNum.textContent = min;
UImaxNum.textContent = max;

// LISTEN FOR GUESS
UIguessBtn.addEventListener('click', function () {
  let guess = parseInt(UIguessInput.value);

  // Validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  // Check if won
  if (guess === winningNum) {
    // Disable input
    UIguessInput.disabled = true;
    // Change border color
    UIguessInput.style.borderColor = 'green';
    // Set message
    setMessage(`${winningNum} is correct! YOU WIN!`, 'green');
  } else {

  }
});

// Set message
function setMessage(msg, color) {
  UImessage.style.color = color;
  UImessage.textContent = msg;
}