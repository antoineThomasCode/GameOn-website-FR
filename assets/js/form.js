// ** functions used to validate form data **// 

const formReserve = document.forms['reserve'];
var validationMessage = document.createElement('p');
const formData = document.querySelectorAll(".formData");



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
    isErrors = true; 
}
if(!isInInterval(quantity.value)){
    displayErrorMessage(quantity, 'Veuillez entrer une valeur comprise entre 0 et 99.')
}
if(!atLeastOneCheck(location)){
    isErrors = true;
    location[0].parentNode.classList.add('error--bg');
    document.getElementsByClassName("formData")[5].insertAdjacentElement('afterend', createErrorMessage('Veuillez sélctionner une ville'));
    
}
if(!checkboxChecked(cgv)){
    isErrors = true;
    document.getElementsByClassName("checkbox2-label")[0].children[0].classList.add('error--bg');
    document.getElementsByClassName("checkbox2-label")[0].insertAdjacentElement('afterend', createErrorMessage('Vous devez accepter les termes et conditions.'));
    
}
if(isErrors === true){
    return false;
} else {
    const participant = {
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