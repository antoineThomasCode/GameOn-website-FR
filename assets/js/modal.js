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
const modalBody = document.querySelector('.modal-body');
let formReserve = document.forms['reserve'];
var validationMessage = document.createElement('p');
var buttonClose = document.createElement("button");
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
//function at least one radio checked
function atLeastOneCheck(input) {
  for (var i = 0; i < input.length ; i++){
    if (input[i].checked){
      return true;
    }
  } return false;  
}

// function for accepting general condition
function checkboxChecked(input) {
  if (input.checked){
    return true;
  } return false;
}
// -- > check if at least on radio is selected 
function isOneRadioChecked(input) {
  for (var i = 0; i < input.length ; i++){
    if (input[i].checked){
      return true;
    }
  } return false;  
}


// ** function to create ERROR container and display message inside  **//
const createErrorMessage = (message) => {
  const errorMessage = document.createElement('div');
  errorMessage.className = "error";
  errorMessage.innerHTML = message;
  return errorMessage;
}
const displayErrorMessage = (input, errorMessage) => {
  isErrors = true;
  input.classList.add('error--bg');
  input.insertAdjacentElement('afterend', createErrorMessage(`${errorMessage}`));
}
//** function for dipsplay error messages or sending datas in backend **/

function validate(){
  // field values recovery
  let isErrors = false;
  let firstName = formReserve['firstName'];
  let lastName = formReserve['lastName'];
  let email = formReserve['email'];
  let age = formReserve['birthdate'];
  let quantity = formReserve['quantity'];
  let location = formReserve['location'];
  let cgv = document.getElementById("cvg");
  // delete error class 
  document.querySelectorAll('.error').forEach(error => error.remove());
  document.querySelectorAll('.error--bg').forEach(error => error.classList.remove('error--bg'));

  if(!nameIsCorrect(firstName.value)){
    displayErrorMessage(firstName, 'Veuillez entrer 2 caractères ou plus pour le prénom.')
  }
  if(!nameIsCorrect(lastName.value)){
    displayErrorMessage(lastName, 'Veuillez entrer 2 caractères ou plus pour le nom.')
  }
  if(!emailIsCorrect(email.value)){
    displayErrorMessage(email, 'Veuillez entrer une adresse mail valide.')
  }
  if(!checkAge(age.value)){
    displayErrorMessage(age, 'Vous devez avoir au moins 18 ans.')
  }
  if(!isInInterval(quantity.value)){
    displayErrorMessage(quantity, 'Veuillez entrer une valeur comprise entre 0 et 99.')
  }
  if(!atLeastOneCheck(location)){
    isErrors = true;
    location[0].parentNode.classList.add('error--bg');
    document.getElementsByClassName("formData")[5].insertAdjacentElement('afterend', createErrorMessage());
  }
  if(!checkboxChecked(cgv)){
    isErrors = true;
    document.getElementsByClassName("checkbox2-label")[0].children[0].classList.add('error--bg');
    document.getElementsByClassName("checkbox2-label")[0].insertAdjacentElement('afterend', createErrorMessage('Vous devez accepter les termes et conditions.'));
  }
  if(isErrors == true){
  
    return false;
  } else {
    let participant = {
      firstname: firstName.value,
      lastname: lastName.value,
      email: email.value,
      birthdate: age.value,
      previousparticipations : quantity.value,
      location: location.value
    };
 
    formReserve.style.display = 'none';
    modalBody.classList.add('message-sended');
    validationMessage.innerHTML='Merci, votre formulaire a bien été envoyé !';
    modalBody.append(validationMessage);
    buttonClose.classList.add('button','button:hover','button-close');
    buttonClose.innerHTML = "Fermer";
    modalBody.appendChild(buttonClose);
    buttonClose.addEventListener ("click", closeModal);
    return false;    
  }
}