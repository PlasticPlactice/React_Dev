<?php
require_once "../db_connect.php";

$response = [
    'status' => 'error',
    'message' => '',
    'data' => null
];

// 特定のIDの車情報を取得
try {
    // IDが指定されているか確認
    if (!isset($_GET['area_id'])) {
        throw new Exception('IDが指定されていません');
    }

    $area_id = $_GET['area_id'];

    $sql = "SELECT * FROM cars WHERE area_id = :area_id";
    $stm = $pdo->prepare($sql);
    $stm->bindValue(':area_id', $area_id, PDO::PARAM_INT);
    
    // SQL実行
    $stm->execute();
    
    $results = $stm->fetch(PDO::FETCH_ASSOC);

    // データが存在しない場合の処理
    if (!$result) {
        $response['status'] = 'error';
        $response['message'] = '車両情報が見つかりませんでした';
    } else {
        $response['status'] = 'success';
        $response['message'] = '車両情報を取得しました';
        $response['data'] = $results;
    }
    
} catch (PDOException $e) {
    // データベースエラーの場合
    $response['status'] = 'error';
    $response['message'] = 'Database error: ' . $e->getMessage();
    
} catch (Exception $e) {
    // その他のエラーの場合
    $response['status'] = 'error';
    $response['message'] = $e->getMessage();

} finally {
    // JSONレスポンスを返す
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($response, JSON_UNESCAPED_UNICODE);
}
?>