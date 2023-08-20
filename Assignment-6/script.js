const contactForm = document.getElementById('contact-form');
const errorMessages = document.getElementById('error-messages');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Clear the error messages
    errorMessages.innerHTML = '';

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
// if else is to check if any info is empty or not.
    if (name === '' || email === '' || message === '') {
        errorMessages.innerHTML = 'All fields are required.';
    } else if (!isValidEmail(email)) {
        errorMessages.innerHTML = 'Invalid email address.';
    } else {
        // Form submitted and use AJAX to send the form data to a server.
        alert('Form submitted successfully!');
    }
});

function isValidEmail(email) {
    // Add your email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
