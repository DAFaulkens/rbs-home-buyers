// File for your custom JavaScript

console.log('Success! Your website loaded all required js files');

const form = document.getElementById('form');
const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
    
    console.log(`Last name: ${lastName.value}`);
    console.log(`Email: ${email.value}`);
    console.log(`Phone: ${phone.value}`);
});

function checkInputs() {
    // Trim white space
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();

    // Check first name
    if(firstNameValue === '') {
        setErrorFor(firstName, 'Oops, first name cannot be blank.')
        console.log(`First name: Oops, first name cannot be blank.`);
    } else {
        setSuccessFor(firstName);
        console.log(`First name: ${firstName.value}`); 
    }

    // Check last name
    if(lastNameValue === '') {
        setErrorFor(lastName, 'Oops, last name cannot be blank.');
        console.log('Oops, last name cannot be blank.');
    } else {
        setSuccessFor(lastName);
    }

    // Check email address
    if(emailValue === '') {
        setErrorFor(email, 'Oops, email cannot be blank.');
    } else if(!isEmail(emailValue)) {
        setErrorFor(email, 'Oops, not a valid email.');
        console.log('Oops, not a valid email.');
    } else {
        setSuccessFor(email);
    }

    // Check phone number 
};

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
};

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success ';
};

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    console.log(`Email valid: ${isEmail(email)}`);
};

function isPhone(phone) {

};

