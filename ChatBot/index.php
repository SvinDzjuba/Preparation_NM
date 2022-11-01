<?php
include_once 'index.html';

// Connection
$database = new mysqli('localhost', 'root', '', 'pa_helper');
if ($database -> connect_error) {
    die("Connection failed: " . $database -> connect_error);
}

// Getting bot message by user message
if(isset($_POST['msg'])) {
    $message = strtolower($_POST['msg']);
    $query = "SELECT `bot_message` FROM `assistant` WHERE `user_message` like '".$message."'";
    $result = $database -> query($query);
    if($row = $result -> fetch_assoc()) {
        $answer = $row['bot_message'];
        echo $answer;
    }
} else {
    echo null;
}

// Close connection
$database -> close();
?>