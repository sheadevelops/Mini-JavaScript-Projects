'use strict';

// SCORE
let score = 20;

// HIGHSCORE
let highscore = 0;
document.querySelector('.highscore').textContent = highscore;

// CREATE OUR SUPER SECRET NUMBER
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// GET CHECK CLASS ELEMENT ADD CLICK EVENT
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // NO GUESS DETECTED
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';

    // PLAYER WON!
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // UPDATE HIGHSCORE
    if(score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }

    // PLAYER GUESSES HIGH
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '☝ Too High';
      score--;
      document.querySelector('.score').textContent = score;

      // PLAYER LOST
    } else {
      document.querySelector('.message').textContent = '😢 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }

    // PLAYER GUESSES LOW
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '👇 Too Low';
      score--;
      document.querySelector('.score').textContent = score;

      // PLAYER LOST
    } else {
      document.querySelector('.message').textContent = '😢 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// RESET THE GAME
document.querySelector('.again').addEventListener('click', function () {
  // SET SCORE BACK TO 20
  score = 20;
  document.querySelector('.score').textContent = score;

  // RESET MESSAGE
  document.querySelector('.message').textContent = 'Start guessing...';

  // CLEAR PLAYER GUESS
  document.querySelector('.guess').value = '';

  // NEW SECRET NUMBER
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // REVERT WINNING CSS CHANGES
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

  // HIDE NEW SECRET NUMBER
  document.querySelector('.number').textContent = '?';
});
