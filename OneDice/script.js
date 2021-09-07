'use strict';

// SCORES
let currentScore = 0;
let player1Score = 0;
let player2Score = 0;

// SELECT ELEMENTS
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

// ROLLING DICE
btnRoll.addEventListener('click', function () {

    // GENERATE RANDOM DICE ROLL
    const dice = Math.trunc(Math.random() * 6) + 1;

    // DISPLACE DICE
    diceEl.classList.remove('hidden');
    diceEl.src = `images/dice-${dice}.png`;

    // CHECK FOR ROLL OF 1 / SWITPLAYER
    if(dice !== 1) {
        
        // ADD DICE TO CURRENT SCORE
        currentScore += dice;
        current0El.textContent = currentScore; // CHANGE LATER
    } else {
        // SWITCH TO NEXT PLAYER
    }
});