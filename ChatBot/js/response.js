function getAssistantAnswer() {
    let botAnswer = '';

    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        botAnswer = this.responseText;
    }
    xhttp.open('GET', 'index.php', true);
    xhttp.send();

    return botAnswer;
};