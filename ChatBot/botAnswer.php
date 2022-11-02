<?php 
// Connection
$database = new mysqli('localhost', 'root', '', 'pa_helper');
if ($database -> connect_error) {
    die("Connection failed: " . $database -> connect_error);
}

// Getting bot answer by user message
$message = strtolower($_POST['answer']);
$query = "SELECT `bot_message` FROM `assistant` WHERE `user_message` LIKE '".$message."'";
try {
    $result = $database -> query($query);
    if($result -> num_rows > 0) {
        if($row = $result -> fetch_assoc()) {
            echo $row['bot_message'];
        }
    } else {
        echo null;
    }
} catch (\Throwable $th) {
    echo null;
}


// Close connection
$database -> close();
?>