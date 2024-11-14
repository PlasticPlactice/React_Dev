<?php
require_once '../db_connect.php';

if(isset($_POST['id'])){
    $id = $_POST['id'];

    $sql = 'DELETE FROM users WHERE id = :id';

    $stm = $pdo->prepare($sql);

    $stm->bindValue(':id', $id, PDO::PARAM_INT);

    // 実行結果の確認
    if($stm->execute()){
        echo "deleted successfully";
    }else{
        echo "Filed to deleted user";
    }
}
?>