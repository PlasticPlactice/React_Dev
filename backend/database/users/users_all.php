<?php
require_once '../db_connect.php';

// ユーザー情報の全件取得
$sql = "SELECT * FROM users";
$stm = $pdo->prepare($sql);
// SQLを実行
$stm->execute();

// ユーザー情報の全件取得
$result = $stm->fetchAll(PDO::FETCH_ASSOC);
foreach($result as $res){
    echo 'ID:'.$res['id'].'name'.$res['name'].'email'.$res['email']."<br>";
}
?>