// -- > check firstname and lastname 
function nameIsCorrect(value) {
    value = value.trim();
    if(value != "" && value.length >= 2 && value != null){
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
// -- > check if participant is Legal age (18yo)
const checkAge = () => {
let yearOfBirth = document.querySelector('input[type="date"]').value.split('-')[0];
let monthOfBirth = document.querySelector('input[type="date"]').value.split('-')[1];
let dayOfBirth = document.querySelector('input[type="date"]').value.split('-')[2];
let age = 18;
let myDate = new Date();
myDate.setFullYear(yearOfBirth, monthOfBirth - 1, dayOfBirth);

let currentDate = new Date();
currentDate.setFullYear(currentDate.getFullYear() - age);
if ((currentDate - myDate) < 0 || document.getElementById('birthdate').value == "" ) {
    return false;
} 
return true;
}
// -- > check if the value is between 0 and 99
function isInInterval(value) {  
if (isNaN(value) || value < 0 || value > 99 || value == ""){
    return false;
} 
return true;
}
//function at least one radio checked
function atLeastOneCheck(input) {
for (let i = 0; i < input.length ; i++){
    if (input[i].checked){
    return true;
    }
} 
return false;  
}

// function for accepting general condition
function checkboxChecked(input) {
if (input.checked){
    return true;
} 
return false;
}



// ** function to create ERROR container and display message inside  **//
const createErrorMessage = (message) => {
    const errorMessage = document.createElement('div');
    errorMessage.className = "error";
    errorMessage.innerHTML = message;
    return errorMessage;
}
const displayErrorMessage = (input, errorMessage) => {
    input.classList.add('error--bg');
    input.insertAdjacentElement('afterend', createErrorMessage(`${errorMessage}`));
}