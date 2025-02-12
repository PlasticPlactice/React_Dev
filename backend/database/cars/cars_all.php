<?php
require_once "../db_connect.php";

$response = [
    'status' => 'error',
    'message' => '',
    'data' => []
];

// 車情報の全件取得
try{
    $sql = "SELECT * FROM used_cars";
    $stm = $pdo->prepare($sql);
    // SQL実行
    $stm->execute();
    
    $result = $stm->fetchAll(PDO::FETCH_ASSOC);

    // データが存在しない場合の処理
    if (empty($result)) {
        $response['status'] = 'success';
        $response['message'] = '車両情報が見つかりませんでした';
        $response['data'] = [];
    } else {
        $response['status'] = 'success';
        $response['message'] = '車両情報を取得しました';
        $response['data'] = $result;
    }
    
}catch (PDOException $e){
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