const signUpBtn = document.querySelector('.btn-sign-up');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmPassowrdInput = document.querySelector('#confirmPassword');
const error = document.querySelectorAll('.error');
const allInputs = document.querySelectorAll('input')

function showError(id, message) {
    error[id].style.display = 'block';
    error[id].textContent = message;
    allInputs[id].style.borderBottom = '1px solid var(--error-color)';
}

function hideError(id) {
    error[id].style.display = 'none';
    allInputs[id].style.borderBottom = '1px solid var(--accent-color)';
}

function validateName() {
    const nameRegx = /^[A-Za-z ]+$/;
    if (nameInput.value === '') {
        showError('0', 'Name is required.');
    } else if (!nameInput.value.match(nameRegx)) {
        showError('0', 'Name should only contain alphabets.');
    } else if (nameInput.value.length < 3) {
        showError('0', 'Name length should be greater than 3 letters.');
    } else if (nameInput.value.length > 35) {
        showError('0', 'Name length should be less than 35 letters.');
    } else {
        hideError('0');
    }
}

function validateEmail() {
    const emailRegx = /^\S+@\S+\.\S+$/;
    if (emailInput.value === '') {
        showError('1', 'Email is required.')
    } else if (!emailInput.value.match(emailRegx)) {
        showError('1', 'Please enter a valid email.')
    } else {
        hideError('1')
    }
}

function validatePassword() {
    const passwordRegx = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()?])[A-Za-z\d!@#$%^&*()?]{8,}$/;
    console.log(passwordInput.value)
    if (passwordInput.value === '') {
        showError('2', 'Passowrd is required.')
    } else if (!passwordInput.value.match(passwordRegx)) {
        showError('2', 'Password needs min 8 chars with a number, uppercase, lowercase, and special character.')
    } else if (passwordInput.value !== confirmPassowrdInput.value) {
        showError('2', 'Passowrds do not match.')
        showError('3', 'Passowrds do not match.')
    } else {
        hideError('2');
        hideError('3')
    }
}

function validate() {
    event.preventDefault();
    validateName();
    validateEmail();
    validatePassword();
}

signUpBtn.addEventListener('click', validate)