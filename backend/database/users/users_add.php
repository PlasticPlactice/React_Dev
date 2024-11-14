<?php
require_once '../db_connect.php';

// ユーザーの追加
if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['password'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    
    $sql = "INSERT INTO car (name, email, password) VALUES(:name, :email, :password)";

    $stm = $pdo->prepare($sql);

    $stm->bindValue(':name', $name, PDO::PARAM_STR);
    $stm->bindValue(':email', $email, PDO::PARAM_STR);
    $stm->bindValue(':password', $password, PDO::PARAM_STR);
    // SQLの実行
    $stm->execute();
}
?>