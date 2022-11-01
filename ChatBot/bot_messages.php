<?php
// Connection
$mysqli = new mysqli('localhost', '', '', 'pa_helper');
if($mysqli -> connect_error) {
    exit('Could not connect to MySQL');
}

// Getting bot message by user message
$query = 'SELECT `bot_message` FROM `assistant` WHERE user_message like ?';

// Getting values
$stmt = $mysqli -> prepare($sql);
$stmt -> bind_param('s', $_GET['q']);
$stmt -> execute();
$stmt -> store_result();
$stmt -> bind_result($bot_message);
$stmt -> fetch();
$stmt -> close();
?>