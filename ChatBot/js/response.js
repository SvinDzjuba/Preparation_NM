$(document).ready(function() {
    $('#myForm').submit(function(e) {
        e.preventDefault();
        if($('#input').val().trim() != '') {
            getUserMessage();
            $.ajax({
                type: "post",
                url: "botAnswer.php",
                data: {answer: e.target.msg.value},
                dataType: "html",
                success: function (response) {
                    renderBotAnswer(response);
                },
            });
        }
    });
});