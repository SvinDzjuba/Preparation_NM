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
    if(userInput.trim() != '') {
        renderMessageElem(userInput);
        chatBody.scrollTop = chatBody.scrollHeight;
    }
    return;
};

const renderMessageElem = (message) => {
    const userMessageElem = document.createElement('div');
    const userNode = document.createTextNode(message);
    userMessageElem.classList.add('user_message');
    userMessageElem.appendChild(userNode);
    chatBody.append(userMessageElem);
    
    const botMessageElem = document.createElement('div');
    let botNode = '';
    if(typeof responseAnswers[message] != 'undefined') {
        botNode = document.createTextNode(responseAnswers[message]);
    } else {
        botNode = document.createTextNode("I'm only robot eblivii!");
    }
    botMessageElem.classList.add('chatbot_message');
    botMessageElem.append(botNode);
    chatBody.append(botMessageElem);
    input.value = '';
};
