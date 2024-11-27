<?php
require_once "../db_connect.php";

$response = [
    'status' => 'error',
    'message' => '',
    'data' => null
];

try{
    // メーカーIDが指定されているか確認
    if($_GET['maker_id']){
        throw new Exception("メーカーを選択してください");
    }
    $maker_id = $_GET['maker_id'];

    $sql = "SELECT * FROM cars WHERE maker_id = :maker_id";
    $stm = $pdo->prepare($sql);
    $stm->bindValue(':maker_id', $maker_id, PDO::PARAM_INT);

    // SQLの実行
    $stm->execute();

    $result = $stm->fetch(PDO::FETCH_ASSOC);

    // データが存在しない場合の処理
    if (!$result) {
        $response['status'] = 'error';
        $response['message'] = '車両情報が見つかりませんでした';
    } else {
        $response['status'] = 'success';
        $response['message'] = '車両情報を取得しました';
        $response['data'] = $result;
    }
}catch (PDOException $e) {
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