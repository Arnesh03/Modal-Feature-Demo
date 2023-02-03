'use strict';
// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnClosemodal = document.querySelector('.close-modal');
// const btnsOpenModal = document.querySelectorAll('.show-modal');

// //Opening Modal
// const openModal = function () {
//   console.log('btn clicked');
//   modal.classList.toggle('hidden');
//   overlay.classList.toggle('hidden');
// };

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

// //Closing Modal
// const closeModal = function () {
//   modal.classList.toggle('hidden');
//   overlay.classList.toggle('hidden');
// };
// btnClosemodal.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);

// document.addEventListener('keydown', function (e) {
//   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//     closeModal();
//   }
// });

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

//Revision㊫📑

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClosemodal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
};
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}
const Closemodal = function () {
  modal.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
};
btnClosemodal.addEventListener('click', Closemodal);
overlay.addEventListener('click', Closemodal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) Closemodal();
});
