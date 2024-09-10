// formValidation.js

// Validation function
function validateForm(firstNameId, lastNameId, emailId, subjectId, messageId, errorPrefix) {
    
    // Get form values from the input fields by their IDs and trim any extra spaces
    const firstName = document.getElementById(firstNameId).value.trim();
    const lastName = document.getElementById(lastNameId).value.trim();
    const email = document.getElementById(emailId).value.trim();
    const subject = document.getElementById(subjectId).value.trim();
    const message = document.getElementById(messageId).value.trim();
  
    // Initialise form validation status and default error messages
    let isValid = true;
    const errorMessages = {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
    };
  
    // Define regex patterns for validation: 

    // - Name should contain only letters and be at least 2 characters long
    // - Email should follow standard email format
    // - Subject should be at least 3 characters long with letters, numbers, and punctuation
    // - Message should be at least 10 characters long
    const namePattern = /^[A-Za-z]{2,}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const subjectPattern = /^[A-Za-z0-9.,!?:; ]{3,}$/;
    const messagePattern = /^.{10,}$/;
  
    // Validate first name
    if (!namePattern.test(firstName)) {
      errorMessages.firstName = 'First name must be at least 2 characters long and contain only letters.';
      isValid = false;
    }

    // Validate last name
    if (!namePattern.test(lastName)) {
      errorMessages.lastName = 'Last name must be at least 2 characters long and contain only letters.';
      isValid = false; // Set form validity to false if validation fails
    }

    // Validate email
    if (!emailPattern.test(email)) {
      errorMessages.email = 'Please enter a valid email address.';
      isValid = false;
    }

    // Validate subject
    if (!subjectPattern.test(subject)) {
      errorMessages.subject = 'Subject must be at least 3 characters long and contain only letters, numbers, and punctuation.';
      isValid = false;
    }

    // Validate message
    if (!messagePattern.test(message)) {
      errorMessages.message = 'Message must be at least 10 characters long.';
      isValid = false;
    }
  
    // Display the error messages by updating the text content of corresponding error elements
    document.getElementById(errorPrefix + 'firstNameError').textContent = errorMessages.firstName;
    document.getElementById(errorPrefix + 'lastNameError').textContent = errorMessages.lastName;
    document.getElementById(errorPrefix + 'emailError').textContent = errorMessages.email;
    document.getElementById(errorPrefix + 'subjectError').textContent = errorMessages.subject;
    document.getElementById(errorPrefix + 'messageError').textContent = errorMessages.message;
  
    // Return true if the form is valid, otherwise return false
    return isValid;
  }
  
  // Event listener for xs version of form (small screens)
  document.querySelector('.form__submit--xs').addEventListener('click', function (e) {
    console.log('XS Form button clicked'); // Log button click for debugging
    e.preventDefault(); // Prevent default form submission

    // Call the validation function with the form field IDs for xs version
    const isValid = validateForm('firstNameXs', 'lastNameXs', 'emailXs', 'subjectXs', 'messageXs', 'Xs');

    // If form is valid, show an alert and reset the form fields
    if (isValid) {
      alert('Submitted successfully.');
      document.getElementById('contactFormXs').reset(); // Clear the form after successful submit
    }
  });
  
  // Event listener for md version of form (larger screens)
  document.querySelector('.form__submit--md').addEventListener('click', function (e) {
    console.log('MD Form button clicked');// Log button click for debug
    e.preventDefault(); // Prevent default form submission

    // Call the validation function with the form field IDs for md version
    const isValid = validateForm('firstName', 'lastName', 'email', 'subject', 'message', 'md');

    // If form is valid, show an alert and reset the form fields
    if (isValid) {
      alert('Submitted successfully.');
      document.getElementById('contactFormMd').reset();  // Clear the form after successful submit
    }
  });
  