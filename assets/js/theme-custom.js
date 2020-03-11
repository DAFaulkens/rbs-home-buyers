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
});

function checkInputs() {
	// Trim white space
	const firstNameValue = firstName.value.trim();
	const lastNameValue = lastName.value.trim();
	const emailValue = email.value.trim();
	const phoneValue = phone.value.trim();

	// Check first name
	if(firstNameValue === '') {
		setErrorFor(firstName, 'First name cannot be blank.')
	} else {
		setSuccessFor(firstName);
	}

	// Check last name
	if(lastNameValue === '') {
		setErrorFor(lastName, 'Last name cannot be blank.');
	} else {
		setSuccessFor(lastName);
	}

	// Check email address
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank.');
	} else if(!isValidEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email.');
	} else {
		setSuccessFor(email);
	}

	// Check phone number
	if(phoneValue === '') {
		setErrorFor(phone, 'Phone number cannot be blank');
	} else if(!isValidPhone(phoneValue)) {
		setErrorFor(phone, 'Not a valid phone number.');
	} else {
		setSuccessFor(phone);
		formatPhone(phone);
	}
};

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
};

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
};

function isValidEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
};

function isValidPhone(phone) {
	return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(phone);
};

function formatPhone(phone) {
	const formControl = input.parentElement;
	const phoneNum = formControl.getElementById('phone');
	formControl.className = 'form-control success';
	phoneNum.input = phone;
};
