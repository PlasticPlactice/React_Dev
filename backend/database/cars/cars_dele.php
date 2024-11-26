<?php
require_once "../db_connect.php";

$response = [
    'status' => 'false',
    'message' => ''
];

try{
    if(isset($_GET['id'])){
        // 削除前に削除対象のデータを取得
        $id = $_GET['id'];
        $sql = "SELECT * FROM cars WHERE id = :id";
        $stm = $pdo->prepare($sql);
        $stm->bindValue(':id', $id, PDO::PARAM_INT);
        $stm->execute();
        $car = $stm->fetch(PDO::FETCH_ASSOC);
        
        // 車が存在しない場合
        if(!$car){
            throw new Exception('車情報が見つかりません');
        }
        
        $sql = "DELETE FROM cars WHERE id = :id";
        
        $stm = $pdo->prepare($sql);
        $stm->bindValue(':id', $id, PDO::PARAM_INT);
        $stm->execute();
        
        $response['status'] = true;
        $response['message'] = '車両情報を削除しました。';
    }
} catch (PDOException $e){
    // データベースエラーの場合
    $response['status'] = 'error';
    $response['message'] = 'Database error: ' . $e->getMessage();

} catch (Exception $e){
    // その他のエラーの場合
    $response['status'] = 'error';
    $response['message'] = $e->getMessage();
} finally {
    // JSONレスポンスを返す
    header('Content-Type: application/json');
    echo json_encode($response, JSON_UNESCAPED_UNICODE);
}
?>