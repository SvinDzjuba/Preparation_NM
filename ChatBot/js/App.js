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
    // Getting bot answer from db
    let botNode = '';
    const lowerMessage = message.toLowerCase();
    getAssistantAnswer(lowerMessage);

    const userMessageElem = document.createElement('div');
    const userNode = document.createTextNode(message);
    userMessageElem.classList.add('user_message');
    userMessageElem.appendChild(userNode);
    chatBody.append(userMessageElem);
    
    const botMessageElem = document.createElement('div');
    if(typeof responseAnswers[lowerMessage] != 'undefined') {
        botNode = document.createTextNode(responseAnswers[lowerMessage]);
    } else {
        botNode = document.createTextNode("I'm only robot eblivii!");
    }
    botMessageElem.classList.add('chatbot_message');
    botMessageElem.append(botNode);
    chatBody.append(botMessageElem);
    input.value = '';
};
