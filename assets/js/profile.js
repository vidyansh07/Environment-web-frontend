// Select the form and input elements
const form = document.querySelector('form');
const imageInput = document.querySelector('#imageInput');
const inputName = document.querySelector('#inputName');
const inputAge = document.querySelector('#inputAge');
const inputCity = document.querySelector('#inputCity');
const inputState = document.querySelector('#inputState');

// Listen for form submission
form.addEventListener('submit', (event) => {
  // Prevent default form submission behavior
  event.preventDefault();

  // Get the values from the input elements
  const image = imageInput.files[0];
  const name = inputName.value;
  const age = inputAge.value;
  const city = inputCity.value;
  const state = inputState.value;

  // Save the data to localStorage
  localStorage.setItem('image', image);
  localStorage.setItem('name', name);
  localStorage.setItem('age', age);
  localStorage.setItem('city', city);
  localStorage.setItem('state', state);

  // Display a success message
  alert('Data saved successfully!');
});
