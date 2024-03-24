document.addEventListener("DOMContentLoaded", function() {
    const signInForm = document.getElementById("signInForm");

    signInForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        // Check if error message elements exist or create them
        let emailError = document.getElementById("emailError");
        let passwordError = document.getElementById("passwordError");

        if (!emailError) {
            emailError = document.createElement("span");
            emailError.id = "emailError";
            emailError.className = "error";
            document.getElementById("email").parentNode.appendChild(emailError);
        }

        if (!passwordError) {
            passwordError = document.createElement("span");
            passwordError.id = "passwordError";
            passwordError.className = "error";
            document.getElementById("password").parentNode.appendChild(passwordError);
        }

        // Reset previous error messages
        emailError.textContent = "";
        passwordError.textContent = "";

        // Validate email and password inputs
        let isValid = true;
        const emailInput = document.getElementById("email");
        const passwordInput = document.getElementById("password");

        if (emailInput.value.trim() === "") {
            emailError.textContent = "Email is required";
            isValid = false;
        }

        if (passwordInput.value.trim() === "") {
            passwordError.textContent = "Password is required";
            isValid = false;
        }

        // If form data is valid, perform sign-in logic and redirect
        if (isValid) {
            // Perform sign-in logic here (e.g., validate credentials)
            // For demonstration purposes, assume sign-in is successful

            // Redirect to the homepage after sign-in
            window.location.href = "homePage.html"; // Replace "index.html" with your homepage URL
        }
    });
});
