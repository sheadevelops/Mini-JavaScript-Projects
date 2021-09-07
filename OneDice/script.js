'use strict';

// SCORES
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

// SELECT ELEMENTS
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// STARTING CONDITIONS
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// SWITCH PLAYER
const switchPlayer = function () {
  // SET CURRENT PLAYER SCORE TO 0 AND SIWTCH PLAYERS
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// ROLLING DICE
btnRoll.addEventListener('click', function () {
  if (playing) {
    // GENERATE RANDOM DICE ROLL
    const dice = Math.trunc(Math.random() * 6) + 1;

    // DISPLACE DICE
    diceEl.classList.remove('hidden');
    diceEl.src = `images/dice-${dice}.png`;

    // CHECK FOR ROLL OF 1 / SWITPLAYER
    if (dice !== 1) {
      // ADD DICE TO CURRENT SCORE
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

// HOLD PLAYER POINTS
btnHold.addEventListener('click', function () {
  if (playing) {
    // ADD CURRENT SCORE TO ACTIVE PLAYER
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // CHECK IF PLAYER SCORE IS >= 100
    if (scores[activePlayer] >= 10) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});
