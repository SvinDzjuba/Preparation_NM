const chatBody = document.querySelector('.chat_body');
const input = document.querySelector('#input');
const send = document.querySelector('.send');

send.addEventListener('click', () => renderUserMessage());
input.addEventListener('keydown', (e) => {
    if(e.code == 'Enter') {
        renderUserMessage();
    }
});

const renderUserMessage = () => {
    const userInput = input.value;
    renderMessageElem(userInput);
    chatBody.scrollTop = chatBody.scrollHeight;
};

const renderMessageElem = (message) => {
    const messageElem = document.createElement('div');
    const txtNode = document.createTextNode(message);
    messageElem.classList.add('user_message');
    messageElem.appendChild(txtNode);
    chatBody.append(messageElem);
    input.value = '';
};