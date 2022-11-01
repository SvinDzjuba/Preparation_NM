const chatBody = document.querySelector('.chat_body');
const input = document.querySelector('#input');
const send = document.querySelector('.send');

send.addEventListener('click', (e) => {
    e.preventDefault();
    getUserMessage();
});
input.addEventListener('keydown', (e) => {
    if(e.code == 'Enter') {
        e.preventDefault();
        send.click();
        getUserMessage();
    }
});

const getUserMessage = () => {
    const userInput = input.value;
    if(userInput.trim() != '') {
        renderMessages(userInput);
        chatBody.scrollTop = chatBody.scrollHeight;
    }
};

const renderMessages = (message) => {
    // Getting bot answer from db
    const botAnswer = getAssistantAnswer();

    // Rendering user message
    const userMessageElem = document.createElement('div');
    const userNode = document.createTextNode(message);
    userMessageElem.classList.add('user_message');
    userMessageElem.append(userNode);
    chatBody.append(userMessageElem);
    
    // Rendering bot answer
    const botMessageElem = document.createElement('div');
    console.log(botAnswer);
    let botNode = '';
    if(botAnswer != null && botAnswer != '') {
        botNode = document.createTextNode(botAnswer);
    } else {
        botNode = document.createTextNode("I'm just robot eblivii!");
    }
    botMessageElem.classList.add('chatbot_message');
    botMessageElem.append(botNode);
    chatBody.append(botMessageElem);
    input.value = '';
};
