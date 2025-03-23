function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value.trim();

    if (message !== "") {
        const chatMessages = document.getElementById('chat-messages');
        const newMessage = document.createElement('div');
        newMessage.classList.add('message', 'outgoing');
        newMessage.textContent = message;

        chatMessages.appendChild(newMessage);
        messageInput.value = "";
        messageInput.focus();

        // Update the map if the message contains a location
        updateMap(message);

        // Simulate a reply after a short delay
        setTimeout(sendReply, 1000);
    }
}

function sendReply() {
    const chatMessages = document.getElementById('chat-messages');
    const replyMessage = document.createElement('div');
    replyMessage.classList.add('message', 'incoming');
    replyMessage.textContent = "I received your message.";

    chatMessages.appendChild(replyMessage);
}

function updateMap(location) {
    const mapFrame = document.getElementById('map-frame');
    const baseUrl = "https://www.google.com/maps/embed/v1/place";
    const apiKey = "YOUR_GOOGLE_MAPS_API_KEY"; // Replace with your Google Maps API key

    // Encode location for URL
    const encodedLocation = encodeURIComponent(location);
    
    // Update the map iframe
    mapFrame.src = `${baseUrl}?key=${apiKey}&q=${encodedLocation}`;
}