<?php
require_once "../db_connect.php";

$response = [
    'status' => 'false',
    'message' => '',
    'data' => null,
];

try{
    // 車名が指定されているか確認
    if($_GET['name']){
        throw new Exception('車名を選択してください');
    }

    $name = $_GET['name'];

    $sql = "SELECT * FROM cars WHERE name = :name";
    $stm = $pdo->prepare($sql);
    $stm->bindValue(':name', $name, PDO::PARAM_STR);

    // SQLの実行
    $stm->execute();

    $result = $stm->fetchAll(PDO::FETCH_ASSOC);

    // データが存在しない場合の処理
    if (!$result) {
        $response['status'] = 'error';
        $response['message'] = '車両情報が見つかりませんでした';
    } else {
        $response['status'] = 'success';
        $response['message'] = '車両情報を取得しました';
        $response['data'] = $result;
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