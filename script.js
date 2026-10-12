
const chatForm = document.getElementById("chat-form");
const messageInput = document.getElementById("message-input");
const chatBox = document.getElementById("chat-box");

chatForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const message = messageInput.value.trim();

    if (message === "") {
        return;
    }

    // Create a new message element
    const messageElement = document.createElement("div");

    messageElement.classList.add("message", "sent");
    messageElement.textContent = message;

    // Display the message in the chat window
    chatBox.appendChild(messageElement);

    // Scroll to the latest message
    chatBox.scrollTop = chatBox.scrollHeight;

    // Clear the input field
    messageInput.value = "";
    messageInput.focus();
});
