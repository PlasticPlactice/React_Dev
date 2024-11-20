<?php
require_once "../db_connect.php";

// 車情報の全件取得
try{
    $sql = "SELECT * FROM cars";
    $stm = $pdo->prepare($sql);
    // SQL実行
    $stm->execute();
    
    $result = $stm->fetchAll(PDO::FETCH_ASSOC);

    // 配列を作成し、json形式でデータをフロントエンドに渡す
    echo json_encode([
        'status' => 'success',
        'data' => $cars
    ]);
}catch (PDOException $e){
    // エラーの場合
    http_response_code(500);
    echo json_encode([
        'status' => 'error',
        'message' => 'Database error: ' . $e->getMessage()
    ]);
}
?>