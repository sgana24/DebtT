// Function to show the pop-up for account details
function showPopup(title) {
    document.getElementById('popupTitle').innerText = title;
    document.getElementById('popup').style.display = 'block';
}

// Function to hide the pop-up
function hidePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Add event listener to close the pop-up when clicking outside of it
window.addEventListener('click', function(event) {
    var popup = document.getElementById('popup');
    if (event.target == popup) {
        popup.style.display = 'none';
    }
});
