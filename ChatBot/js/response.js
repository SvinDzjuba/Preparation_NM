const userMessage = document.querySelector('#input').value;
getAssistantAnswer(userMessage);


function getAssistantAnswer(message) {
    if(message != '') {
        const xhttp = new XMLHttpRequest();
        xhttp.onload = () => {
            message = this.bot_message;
        }
        xhttp.open('GET', 'bot_messages.php?q=' + message);
        xhttp.send();

        return message;
    }
}

const responseAnswers = {
    hello: 'Hello',
    hi: 'Hey',
    help: 'How',
    figma: 'https://www.figma.com/file/augYbb42f5d6heznwMGn0f/NOORMEISTER'
};