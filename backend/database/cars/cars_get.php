<?php
require_once "../db_connect.php";

// 特定の車の情報を取得
if(isset($_GET['id'])){
    $id = $_GET['id'];

    $sql = "SELECT * FROM cars WHERE id = :id";

    try{
        $stm = $pdo->prepare($sql);
        $stm->bindValue(':id', $id, PDO::PARAM_INT);
        $stm->execute();
        $car = $stm->fetch(PDO::FETCH_ASSOC);

        if($car){
            // JSONヘッダーを設定
            // これから渡すデータがJSON形式であることを示す
            header('Content-Type: application/json');
            echo json_encode($car);
        } else {
            // データが見つからない場合
            http_response_code(404);
            echo json_encode(['error' => '車が見つかりません(;_;)']);
        }
    }catch (PDOException $e){
        // IDが指定されてない場合
        http_response_code(400);
        echo json_encode(['error' => 'IDを入れてください']);
    }
}
?>