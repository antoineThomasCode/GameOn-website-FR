// navigation for Responsive display
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalBtn = document.querySelectorAll(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// close modal event 

closeModalBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// close modal form 
function closeModal() {
  modalbg.style.display = "none";
}

// ** functions used to validate form data **// 

// -- > check firstname and lastname 
function nameIsCorrect(value) {
  value = value.trim();
    if(value != "" && value.length > 2 && value != null){
      return true;
    }
      return false;
}
// -- > ckeck if the valuse of email input is correct 
function emailIsCorrect(value){
  const regEmail = new RegExp('^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$','i');

  if (regEmail.test(value)){    
    return true;
  } 
    return false;
}
// -- > check if participant have Legal age (18yo)
const checkAge = () => {
  let yearOfBirth = document.querySelector('input[type="date"]').value.split('-')[0];
  let monthOfBirth = document.querySelector('input[type="date"]').value.split('-')[1];
  let dayOfBirth = document.querySelector('input[type="date"]').value.split('-')[2];
  let age = 18;
  let myDate = new Date();
  myDate.setFullYear(yearOfBirth, monthOfBirth - 1, dayOfBirth);

  var currentDate = new Date();
  currentDate.setFullYear(currentDate.getFullYear() - age);
  if ((currentDate - myDate) < 0 || document.getElementById('birthdate').value == "" ) {
    return false;
  } return true;
}
// -- > check if the value is between 0 and 99
function isInInterval(value) {  
  if (isNaN(value) || value < 0 || value > 99 || value == ""){
    return false;
  } return true;
}
// -- > check if at least on radio is selected 
function isOneRadioChecked(input) {
  for (var i = 0; i < input.length ; i++){
    if (input[i].checked){
      return true;
    }
  } return false;  
}
// --> controll if a radio is checked 
function isChecked(input){
  if (input.checked){
    return true;
  } return false;
}

// ** function to create ERROR container and display message inside  **//
const createErrorContainer = (message) => {
  const errorMessage = document.createElement('div');
  errorMessage.className = "error";
  errorMessage.innerHTML = message;
  return errorMessage;
}

