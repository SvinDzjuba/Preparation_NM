<?php 
// Connection
$database = new mysqli('localhost', 'root', '', 'pa_helper');
if ($database -> connect_error) {
    die("Connection failed: " . $database -> connect_error);
}
// Getting bot message by user message
if(isset($_POST['msg'])) {
    $message = strtolower($_POST['msg']);
    $query = "SELECT `bot_message` FROM `assistant` WHERE `user_message` like '".$message."'";
    $result = $database -> executeRun($query);

} else {
    echo null;
}

// Close connection
$database -> close();
?>