// formValidation.js

// Validation function
function validateForm(first_name, last_name, email, subject, message, errorPrefix) {
  const firstName = document.getElementById(first_name).value.trim();
  const lastName = document.getElementById(last_name).value.trim();
  const email = document.getElementById(email).value.trim();
  const subject = document.getElementById(subject).value.trim();
  const message = document.getElementById(message).value.trim();

  let isValid = true;
  const errorMessages = {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
  };

  const namePattern = /^[A-Za-z]{2,}$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const subjectPattern = /^[A-Za-z0-9.,!?:; ]{3,}$/;
  const messagePattern = /^.{10,}$/;

  if (!namePattern.test(firstName)) {
      errorMessages.firstName = 'First name must be at least 2 characters long and contain only letters.';
      isValid = false;
  }
  if (!namePattern.test(lastName)) {
      errorMessages.lastName = 'Last name must be at least 2 characters long and contain only letters.';
      isValid = false;
  }
  if (!emailPattern.test(email)) {
      errorMessages.email = 'Please enter a valid email address.';
      isValid = false;
  }
  if (!subjectPattern.test(subject)) {
      errorMessages.subject = 'Subject must be at least 3 characters long and contain only letters, numbers, and punctuation.';
      isValid = false;
  }
  if (!messagePattern.test(message)) {
      errorMessages.message = 'Message must be at least 10 characters long.';
      isValid = false;
  }

  document.getElementById(errorPrefix + 'firstNameError').textContent = errorMessages.firstName;
  document.getElementById(errorPrefix + 'lastNameError').textContent = errorMessages.lastName;
  document.getElementById(errorPrefix + 'emailError').textContent = errorMessages.email;
  document.getElementById(errorPrefix + 'subjectError').textContent = errorMessages.subject;
  document.getElementById(errorPrefix + 'messageError').textContent = errorMessages.message;

  return isValid;
}

// Show Modal
function showModal(message, success) {
  const modal = document.getElementById('successModal');
  const modalMessage = document.getElementById('modalMessage');
  modalMessage.innerText = message;

  // Style based on success or failure
  modalMessage.style.color = success ? 'green' : 'red';
  modal.style.display = 'flex';

  // Automatically close modal after 3 seconds
  setTimeout(() => {
      modal.style.display = 'none';
  }, 3000);
}

// Close modal when the 'x' button is clicked
document.querySelector('.modal .close').addEventListener('click', function () {
  document.getElementById('successModal').style.display = 'none';
});

// Intercept form submission for xs version
document.getElementById('contactFormXs').addEventListener('submit', async function (e) {
  e.preventDefault(); // Prevent default form submission
  const formData = new FormData(this);

  try {
      const response = await fetch('submit_contact.php', { method: 'POST', body: formData });
      const result = await response.json();
      showModal(result.message, result.success);

      if (result.success) {
          this.reset(); // Clear the form on success
      }
  } catch (error) {
      showModal('An error occurred. Please try again.', false);
  }
});

// Intercept form submission for md version
document.getElementById('contactFormMd').addEventListener('submit', async function (e) {
  e.preventDefault(); // Prevent default form submission
  const formData = new FormData(this);

  try {
      const response = await fetch('submit_contact.php', { method: 'POST', body: formData });
      const result = await response.json();
      showModal(result.message, result.success);

      if (result.success) {
          this.reset(); // Clear the form on success
      }
  } catch (error) {
      showModal('An error occurred. Please try again.', false);
  }
});
