'use strict';

// GETTING THEM QUERIES FOR THE MODAL
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// OPEN THE MODAL
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// CLOSE THE MODAL
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// WALKTHROUGH BUTTONS FOR THE MODAL TO ADD A CLICK LISTENER TO OPEN THE MODAL
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

// CLOSE THE MODAL
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('.hidden')) {
    closeModal();
  }
});
