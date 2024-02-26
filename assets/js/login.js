// Get references to the login and registration forms
var loginForm = document.getElementById('login-form');
var registerForm = document.getElementById('register-form');

// Add event listener for the login form
loginForm.addEventListener('submit', function(e) {
	e.preventDefault(); // Prevent the form from submitting

	// Get references to the form elements
	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;

	// Validate the form data
	if (username === '' || password === '') {
		document.getElementById('login-error').innerHTML = 'Please enter a username and password';
	} else {
		// Submit the form
		loginForm.submit();
	}
});

// Add event listener for the registration form
registerForm.addEventListener('submit', function(e) {
	e.preventDefault(); // Prevent the form from submitting

	// Get references to the form elements
	var newUsername = document.getElementById('new-username').value;
	var newPassword = document.getElementById('new-password').value;
	var email = document.getElementById('email').value;

	// Validate the form data
	if (newUsername === '' || newPassword === '' || email === '') {
		document.getElementById('register-error').innerHTML = 'Please fill out all fields';
	} else if (newPassword.length < 8) {
		document.getElementById('register-error').innerHTML = 'Password must be at least 8 characters';
	} else {
		// Submit the form
		registerForm.submit();
	}
});