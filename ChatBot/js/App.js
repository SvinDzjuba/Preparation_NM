const chatBody = document.querySelector('.chat_body');
const input = document.querySelector('#input');
const send = document.querySelector('.send');

send.addEventListener('click', (e) => {
    // e.preventDefault();
    getUserMessage();
});
input.addEventListener('keydown', (e) => {
    if(e.code == 'Enter') {
        console.log('fsdsfsdfsd');
        // e.preventDefault();
        send.click();
    }
});

const getUserMessage = () => {
    const userInput = input.value;
    console.log('xcvxcvcx');
    if(userInput.trim() != '') {
        renderMessages(userInput);
        chatBody.scrollTop = chatBody.scrollHeight;
    }
};

const renderMessages = (message) => {
    // Getting bot answer from db
    var botAnswer;
    console.log(input.value);
    const form = document.querySelector('.myForm');
    form.addEventListener('submit', event => {
        event.preventDefault();
        $.ajax({
            url: 'botAnswers.php',
            method: 'post',
            dataType: 'html',
            data: {name:event.target.msg.value},
            success: function(data){
                console.log(data);
                botAnswer = data.name;
            }
        });
    })
    // Rendering user message
    const userMessageElem = document.createElement('div');
    const userNode = document.createTextNode(message);
    userMessageElem.classList.add('user_message');
    userMessageElem.append(userNode);
    chatBody.append(userMessageElem);
    
    // Rendering bot answer
    const botMessageElem = document.createElement('div');
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