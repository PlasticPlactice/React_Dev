<?php
require_once '../db_connect.php';

// 特定のユーザー情報の取得
if(isset($_GET['id'])){
    $id = $_GET['id'];

    $sql = 'SELECT * FROM users WHERE id = :id';

    $stm = $pdo->prepare($sql);
    $stm->bindValue(':id', $id, PDO::PARAM_INT);
    $stm->execute();
    $user = $stm->fetch(PDO::FETCH_ASSOC);
}
?>