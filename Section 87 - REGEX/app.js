// Form Blur Event Listeners
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName() {
  const name = document.getElementById('name');
  const re = /^[a-zA-Z]{2, 10}$/; // this is looking for a word with upper or lowercase letters between 2-10 characters long

  if (!re.test(name.value)) {
    name.classList.add('is-invalid');
  } else {
    name.classList.add('is-invalid');
  }
};

function validateZip() {

};

function validateEmail() {
  const name = document.getElementById('name');
  const re = /^[a-zA-Z]{2, 10}$/; // this is looking for a word with upper or lowercase letters between 2-10 characters long

  if (!re.test(name.value)) {
    name.classList.add('is-invalid');
  } else {
    name.classList.add('is-invalid');
  }
};

function validatePhone() {

};
