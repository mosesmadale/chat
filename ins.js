const socket = io('http://localhost:3000');
const messageForm = document.querySelector('#send-container');
const messageInput = document.querySelector('#message-input');
const messageContainer = document.querySelector('#message-container');

socket.on('chat-message', (data) => {
    appendMessages(data);
})
messageForm.addEventListener('submit', e => {
    e.preventDefault();
    const message = messageInput.value;
    socket.emit('send-chat-message', message);
    messageInput.value = '';
})

function appendMessages(message) {
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageContainer.append(messageElement);
}