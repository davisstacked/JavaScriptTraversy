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
let winningNum = getRandomNum(min, max);
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

// Play again event listener
UIgame.addEventListener('mousedown', function (e) {
  if (e.target.className === 'play-again') {
    window.location.reload();
  }
})

// LISTEN FOR GUESS
UIguessBtn.addEventListener('click', function () {
  let guess = parseInt(UIguessInput.value);

  // Validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  // Check if won
  if (guess === winningNum) {
    // Game over - won
    gameOver(true, `${winningNum} is correct, YOU WIN!`);
  } else {
    // Wrong Number
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`)
    } else {
      // Game continues - answer wrong
      // Change border color
      UIguessInput.style.borderColor = 'red';

      // Clear Input
      UIguessInput.value = '';

      // Tell user its the wrong number
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
    }
  }
});

// Game Over
function gameOver(won, msg) {

  let color;
  won === true ? color = 'green' : color = 'red';
  // Disable input
  UIguessInput.disabled = true;
  // Change border color
  UIguessInput.style.borderColor = color;
  // Change text color
  UImessage.style.color = color;
  // Set message
  setMessage(msg);
  // play again ?
  UIguessBtn.value = 'Play Again';
  UIguessBtn.className += 'play-again';
}

// Get winning number
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max-min+1) + min);
}

// Set message
function setMessage(msg, color) {
  UImessage.style.color = color;
  UImessage.textContent = msg;
}