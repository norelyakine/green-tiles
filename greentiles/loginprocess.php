<?php
session_start();
include "db_connect.php";

if(isset($_POST['email']) && isset($_POST['password'])){

    function validate($data){
        $date = trim($data);
        $data = stripslashes($date);
        $data = htmlspecialchars($data);
        return data;
    }
}

$login_email = validate($_POST['email']);
$login_password = validate($_POST['password']);

if(empty($email)){
    header("Location: index.php?erro=Email is required");
}

?>