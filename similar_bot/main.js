$(document).ready(function () {
    $("#myform").submit(function (e) { 
        e.preventDefault();
        $.ajax({
            type: "post",
            url: "index.php",
            data: {name:e.target.send.value}, //получение всех стран
            dataType: "html",
            success: function (response) {
                console.log(response)
            }
        });
    });
});