'use strict';

// SCORE
let score = 20;

// CREATE OUR SUPER SECRET NUMBER
const secretNumber = Math.trunc(Math.random() * 20) + 1;

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
