// Reference to the chatbot window and icon
const chatWindow = document.getElementById('chatbot-window');
const chatIcon = document.getElementById('chatbot-icon');

// Show chatbot window when the icon is clicked
chatIcon.addEventListener('click', function() {
    chatWindow.classList.remove('hidden'); // Remove hidden class
    chatWindow.classList.add('visible'); // Add visible class for transition
    chatIcon.style.display = 'none'; // Hide the chatbot icon
});

// Hide chatbot window when the close button is clicked
document.getElementById('close-chat').addEventListener('click', function() {
    chatWindow.classList.remove('visible'); // Remove visible class
    setTimeout(() => {
        chatWindow.classList.add('hidden'); // Add hidden class after transition
        chatIcon.style.display = 'block'; // Show the chatbot icon
    }, 300); // Timeout must match the transition duration
});

// Reference to the send button and chat messages area
const sendButton = document.getElementById('send-message-btn');
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input-text');

// Add event listener for the Enter key
chatInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent default form submission behavior
        sendMessage(); // Call the sendMessage function
    }
});

// Add event listener to the send button
sendButton.addEventListener('click', sendMessage);



function sendMessage() {
    const inputField = document.getElementById("chat-input-text");
    const textEntered = inputField.value.trim();

    if (textEntered === "") {
        alert("Please enter a message before sending."); // Alert if input is empty
        return; // Exit the function
    }

    addMessageToChat("You", textEntered, "user-message"); // Add user message to chat
    inputField.value = ''; // Clear the input field
    disableSendButton(); // Disable the send button

    fetch('/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: textEntered })
    })
    .then(response => response.json())
    .then(data => {
        addMessageToChat('Bot', data.reply, "bot-message"); // Display bot's reply
        enableSendButton(); // Re-enable the send button
    })
    .catch(error => {
        console.log(error);
        enableSendButton(); // Ensure the send button is re-enabled even on error
    });
}

// Function to add messages to chat with sender type
function addMessageToChat(sender, message, messageType) {
    const messageElement = document.createElement('div');
    messageElement.classList.add(messageType); // Add user or bot class
    messageElement.textContent = message; // Set message text
    chatMessages.appendChild(messageElement); // Append to chat
    chatMessages.scrollTop = chatMessages.scrollHeight; // Auto scroll to latest message
}

// Functions to enable/disable send button
function disableSendButton() {
    sendButton.disabled = true; // Disable the send button
}

function enableSendButton() {
    sendButton.disabled = false; // Enable the send button
}

