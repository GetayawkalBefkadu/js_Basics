// This file contains the JavaScript code that adds interactivity to the web page.

// Function to handle the submission of a comment
function submitComment() {
    // Get the comment input field and its value
    const commentInput = document.getElementById('commentInput');
    const commentText = commentInput.value;

    // Check if the comment input is not empty
    if (commentText.trim() !== '') {
        // Create a new paragraph element for the comment
        const commentParagraph = document.createElement('p');
        // Set the text content of the paragraph to the comment text
        commentParagraph.textContent = commentText;

        // Get the comments section where the new comment will be added
        const commentsSection = document.getElementById('commentsSection');
        // Append the new comment paragraph to the comments section
        commentsSection.appendChild(commentParagraph);

        // Clear the comment input field after submission
        commentInput.value = '';
    } else {
        // Alert the user if the comment input is empty
        alert('Please enter a comment before submitting.');
    }
}

// Function to initialize event listeners when the DOM is fully loaded
function init() {
    // Get the submit button and add a click event listener to it
    const submitButton = document.getElementById('submitButton');
    submitButton.addEventListener('click', submitComment);
}

// Add an event listener to run the init function when the window loads
window.onload = init;