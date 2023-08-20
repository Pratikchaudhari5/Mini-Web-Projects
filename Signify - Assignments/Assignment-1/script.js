document.addEventListener("DOMContentLoaded", function() {
    // Get a reference to the button element with the ID "emailButton"
    var emailButton = document.getElementById("emailButton");
    
    // Added event listener to the button
    emailButton.addEventListener("click", function() {
        //Shows an alert message
        alert("Preparing to open email .");
        // It opens my personal email
        window.open("mailto:pratikchaudhari9359@gmail.com");
    });
});
