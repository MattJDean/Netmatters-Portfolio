// formValidation.js

// Validation function
function validateForm(firstNameId, lastNameId, emailId, subjectId, messageId, errorPrefix) {
    
    // Get form values
    const firstName = document.getElementById(firstNameId).value.trim();
    const lastName = document.getElementById(lastNameId).value.trim();
    const email = document.getElementById(emailId).value.trim();
    const subject = document.getElementById(subjectId).value.trim();
    const message = document.getElementById(messageId).value.trim();
  
    // Set default values for error messages
    let isValid = true;
    const errorMessages = {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
    };
  
    // Regex patterns for validation
    const namePattern = /^[A-Za-z]{2,}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const subjectPattern = /^[A-Za-z0-9.,!?:; ]{3,}$/;
    const messagePattern = /^.{10,}$/;
  
    // Validation logic
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
  
    // Display error messages
    document.getElementById(errorPrefix + 'firstNameError').textContent = errorMessages.firstName;
    document.getElementById(errorPrefix + 'lastNameError').textContent = errorMessages.lastName;
    document.getElementById(errorPrefix + 'emailError').textContent = errorMessages.email;
    document.getElementById(errorPrefix + 'subjectError').textContent = errorMessages.subject;
    document.getElementById(errorPrefix + 'messageError').textContent = errorMessages.message;
  
    return isValid;
  }
  
  // Event listener for xs version of form
  document.querySelector('.form__submit--xs').addEventListener('click', function (e) {
    console.log('XS Form button clicked');
    e.preventDefault(); // Prevent form submission
    const isValid = validateForm('firstNameXs', 'lastNameXs', 'emailXs', 'subjectXs', 'messageXs', 'Xs');
    if (isValid) {
      alert('Submitted successfully.');
      document.getElementById('contactFormXs').reset(); // Clear the form after successful submit
    }
  });
  
  // Event listener for >768px version of form
  document.querySelector('.form__submit--md').addEventListener('click', function (e) {
    console.log('MD Form button clicked');
    e.preventDefault(); // Prevent form submission
    const isValid = validateForm('firstName', 'lastName', 'email', 'subject', 'message', 'md');
    if (isValid) {
      alert('Submitted successfully.');
      document.getElementById('contactFormMd').reset();  // Clear the form after successful submit
    }
  });
  