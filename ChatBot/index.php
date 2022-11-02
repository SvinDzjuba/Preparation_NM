<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js" integrity="sha512-aVKKRRi/Q/YV+4mjoKBsE4x3H+BkegoM/em46NNlCqNTmUYADjBbeNefNxYV7giUp0VxICtqdrbqU7iVaeZNXA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <link rel="stylesheet" href="css/styles.css">
    <title>Chat Bot</title>
</head>

<body>
    <div id="container">
        <div class="chat_header">
            <div class="logo">
                <img src="Images/img_avatar.png" alt="bot">
            </div>
            <div class="title">Let's chat</div>
        </div>
        <div class="chat_body">Messages here</div>
        <div class="chat_input">
            <div class="input-sec">
                <form class="myForm">
                    <input type="text" id="input" placeholder="Enter message" name="msg" autocomplete="off">
                    <button type="submit" class="send">NU</button>
                </form>
            </div>
        </div>
    </div>
    <script src="js/app.js"></script>
    <script src="js/response.js"></script>
</body>

</html>