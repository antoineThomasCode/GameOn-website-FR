
// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeModalBtn = document.querySelectorAll(".close");
const modalBody = document.querySelector('.modal-body');
const buttonClose = document.createElement("button");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "flex";
}
// close modal event 

closeModalBtn.forEach((btn) => btn.addEventListener("click", closeModal));



