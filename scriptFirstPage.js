// Wait for the page to load
document.addEventListener("DOMContentLoaded", function() {
    // Simulate a delay (e.g., 3 seconds) before redirecting to the sign-in page
    setTimeout(function() {
        // Redirect to the sign-in page
        window.location.href = "signInPage.html";
    }, 3000); // Adjust the delay time as needed (in milliseconds)
});