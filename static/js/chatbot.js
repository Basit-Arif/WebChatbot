// Reference to the chatbot window and icon
const chatWindow = document.getElementById('chatbot-window');
const chatIcon = document.getElementById('chatbot-icon');

// Show chatbot window when the icon is clicked
chatIcon.addEventListener('click', function() {
    chatWindow.style.display = 'block'; // Show the chatbot window
    chatIcon.style.display = 'none'; // Hide the chatbot icon
});

// Hide chatbot window when the close button is clicked
document.getElementById('close-chat').addEventListener('click', function() {
    chatWindow.style.display = 'none'; // Hide the chatbot window
    chatIcon.style.display = 'block'; // Show the chatbot icon
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

    fetch('/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: textEntered })
    })
    .then(response => response.json())
    .then(data => {
        addMessageToChat('Bot', data.reply, "bot-message"); // Display bot's reply
    })
    .catch(error => {
        console.log(error);
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

function toggleChatbot() {
    var chatbotWindow = document.getElementById('chatbotWindow');
    var chatbotIcon = document.querySelector('.chatbot-icon');
    
    if (chatbotWindow.classList.contains('hidden')) {
        chatbotWindow.classList.remove('hidden');
        chatbotWindow.style.display = 'block'; // Show the chatbot window
        chatbotIcon.classList.remove('bounce'); // Stop bouncing when chatbot is opened
    } else {
        chatbotWindow.classList.add('hidden');
        chatbotWindow.style.display = 'none'; // Hide the chatbot window
    }
}

// Add bounce effect after 3 seconds if the chatbot is not opened
setTimeout(function() {
    var chatbotIcon = document.querySelector('.chatbot-icon');
    chatbotIcon.classList.add('bounce');
}, 3000);