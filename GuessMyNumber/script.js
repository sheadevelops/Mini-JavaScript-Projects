'use strict';

// SCORE
let score = 20;

// DRY FUNCTIONS
const updateText = function (selector, message) {
  document.querySelector(selector).textContent = message;
};

// HIGHSCORE
let highscore = 0;

// CREATE OUR SUPER SECRET NUMBER
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// GET CHECK CLASS ELEMENT ADD CLICK EVENT
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // NO GUESS DETECTED
  if (!guess) {
    updateText('.message', '⛔ No number!');

    // PLAYER WON!
  } else if (guess === secretNumber) {
    updateText('.number', secretNumber);
    updateText('.message', '🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // UPDATE HIGHSCORE
    if (score > highscore) {
      highscore = score;
      updateText('.highscore', highscore);
    }

    // GUESS IS NOT CORRECT
  } else if (guess !== secretNumber) {
    if (score > 1) {
      updateText(
        '.message',
        guess > secretNumber ? '☝ Too High' : '👇 Too Low'
      );
      score--;
      updateText('.score',score);

      // PLAYER LOST
    } else {
      updateText('.message', '😢 You lost the game!');
      updateText('.score', 0);
    }
  }
});

// RESET THE GAME
document.querySelector('.again').addEventListener('click', function () {
  // SET SCORE BACK TO 20
  score = 20;
  updateText('.score', score);

  // RESET MESSAGE
  updateText('.message', 'Start guessing...');

  // CLEAR PLAYER GUESS
  document.querySelector('.guess').value = '';

  // NEW SECRET NUMBER
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // REVERT WINNING CSS CHANGES
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

  // HIDE NEW SECRET NUMBER
  updateText('.number', '?');
});
