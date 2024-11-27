document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const button = document.getElementById('submitButton');
    console.log('Form loaded');

    button.addEventListener('submit', function(event) {
        event.preventDefault();
        console.log('Form submitted');
        // Clear previous errors
        clearErrors();

        // Get form values
        const firstName = document.getElementById('first_name').value.trim();
        const lastName = document.getElementById('last_name').value.trim();
        const email = document.getElementById('emailField').value.trim();
        const subject = document.getElementById('subjectField').value.trim();
        const message = document.getElementById('messageField').value.trim();

        let isValid = true;

        // Validate first name
        if (firstName === '') {
            document.getElementById('firstNameError').textContent = 'First name is required.';
            isValid = false;
        }

        // Validate last name
        if (lastName === '') {
            document.getElementById('lastNameError').textContent = 'Last name is required.';
            isValid = false;
        }

        // Validate email
        if (email === '') {
            document.getElementById('emailError').textContent = 'Email is required.';
            isValid = false;
        } else if (!validateEmail(email)) {
            document.getElementById('emailError').textContent = 'Please enter a valid email address.';
            isValid = false;
        }

        // Validate subject
        if (subject === '') {
            document.getElementById('subjectError').textContent = 'Subject is required.';
            isValid = false;
        }

        // Validate message
        if (message === '') {
            document.getElementById('messageError').textContent = 'Message is required.';
            isValid = false;
        }

        if (isValid) {
            // Prepare data to send
            const formData = new FormData();
            formData.append('firstName', firstName);
            formData.append('lastName', lastName);
            formData.append('email', email);
            formData.append('subject', subject);
            formData.append('message', message);

            // Send data using fetch
            fetch('submit_contact.php', {
                method: 'POST',
                body: formData,
            })
            .then(response => response.json())
            .then(data => {
                // Handle response data
                if (data.success) {
                    showSuccessModal(data.message);
                    form.reset();
                } else {
                    // Handle server-side validation errors
                    if (data.errors) {
                        displayServerErrors(data.errors);
                    } else {
                        alert('An error occurred. Please try again later.');
                    }
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred. Please try again later.');
            });
        }
    });

    // Email validation function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Function to clear error messages
    function clearErrors() {
        const errorSpans = document.querySelectorAll('.error');
        errorSpans.forEach(span => {
            span.textContent = '';
        });
    }

    // Function to display success modal
    function showSuccessModal(message) {
        const modal = document.getElementById('successModal');
        const modalMessage = document.getElementById('modalMessage');
        const closeBtn = modal.querySelector('.close');

        modalMessage.textContent = message;
        modal.style.display = 'block';

        closeBtn.onclick = function() {
            modal.style.display = 'none';
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        }
    }

    // Function to display server-side errors
    function displayServerErrors(errors) {
        if (errors.firstName) {
            document.getElementById('firstNameError').textContent = errors.firstName;
        }
        if (errors.lastName) {
            document.getElementById('lastNameError').textContent = errors.lastName;
        }
        if (errors.email) {
            document.getElementById('emailError').textContent = errors.email;
        }
        if (errors.subject) {
            document.getElementById('subjectError').textContent = errors.subject;
        }
        if (errors.message) {
            document.getElementById('messageError').textContent = errors.message;
        }
    }
});
