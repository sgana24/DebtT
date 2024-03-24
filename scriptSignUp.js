document.addEventListener("DOMContentLoaded", function() {
    const signUpForm = document.getElementById("signUpForm");

    signUpForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        // Check if error message elements exist or create them
        let nameError = document.getElementById("nameError");
        let emailError = document.getElementById("emailError");
        let passwordError = document.getElementById("passwordError");

        // Check if name input exists
        const nameInput = document.getElementById("name");
        if (!nameInput) {
            console.error("Name input not found");
            return;
        }

        if (!nameError) {
            nameError = document.createElement("span");
            nameError.id = "nameError";
            nameError.className = "error";
            nameInput.parentNode.appendChild(nameError);
        }

        // Check if email input exists
        const emailInput = document.getElementById("email");
        if (!emailInput) {
            console.error("Email input not found");
            return;
        }

        if (!emailError) {
            emailError = document.createElement("span");
            emailError.id = "emailError";
            emailError.className = "error";
            emailInput.parentNode.appendChild(emailError);
        }

        // Check if password input exists
        const passwordInput = document.getElementById("password");
        if (!passwordInput) {
            console.error("Password input not found");
            return;
        }

        if (!passwordError) {
            passwordError = document.createElement("span");
            passwordError.id = "passwordError";
            passwordError.className = "error";
            passwordInput.parentNode.appendChild(passwordError);
        }

        // Reset previous error messages
        nameError.textContent = "";
        emailError.textContent = "";
        passwordError.textContent = "";

        // Validate name, email, and password inputs
        let isValid = true;

        if (nameInput.value.trim() === "") {
            nameError.textContent = "Name is required";
            isValid = false;
        }

        if (emailInput.value.trim() === "") {
            emailError.textContent = "Email is required";
            isValid = false;
        }

        if (passwordInput.value.trim() === "") {
            passwordError.textContent = "Password is required";
            isValid = false;
        }

        // If form data is valid, perform sign-up logic and redirect
        if (isValid) {
            // Perform sign-up logic here (e.g., validate inputs, store data, etc.)
            // For demonstration purposes, assume sign-up is successful

            // Redirect to the homepage after sign-up
            window.location.href = "emailConfirmation.html"; // Replace "homePage.html" with your desired redirection URL
        }
    });
});

