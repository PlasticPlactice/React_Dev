<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

require_once '../db_connect.php';

// レスポンス構造を初期化
$response = [
    'status' => 'error',
    'message' => '',
];

try {
    // リクエストヘッダーからトークンを取得
    $headers = getallheaders();
    $token = $headers['Authorization'] ?? '';

    // トークンのバリデーション
    if (empty($token)) {
        throw new Exception('トークンが見つかりません', 400);
    }

    // データベース接続を確認
    if (!$db) {
        throw new Exception('データベース接続に失敗しました', 500);
    }

    // トークンを無効化するプリペアドステートメント
    $stmt = $db->prepare("UPDATE users SET login_token = NULL WHERE login_token = ?");
    
    if (!$stmt) {
        throw new Exception('ステートメントの準備に失敗しました', 500);
    }

    // パラメータをバインド
    $stmt->bind_param("s", $token);
    
    // クエリ実行
    $executeResult = $stmt->execute();
    
    if (!$executeResult) {
        throw new Exception('トークン無効化処理に失敗しました', 500);
    }

    // 影響を受けた行数を確認
    if ($stmt->affected_rows > 0) {
        // ログアウト成功
        http_response_code(200);
        $response['status'] = 'success';
        $response['message'] = 'ログアウトに成功しました';
    } else {
        // 有効なトークンが見つからない
        throw new Exception('有効なトークンが見つかりません', 404);
    }

} catch (Exception $e) {
    // エラーハンドリング
    switch ($e->getCode()) {
        case 400:
            http_response_code(400);
            break;
        case 404:
            http_response_code(404);
            break;
        default:
            http_response_code(500);
    }

    $response['status'] = 'error';
    $response['message'] = $e->getMessage();
    
    // エラーログに記録（必要に応じて実装）
    error_log('Logout Error: ' . $e->getMessage());

} finally {
    // リソースの後処理
    if (isset($stmt) && $stmt) {
        $stmt->close();
    }

    if (isset($db) && $db) {
        $db->close();
    }

    // JSONレスポンスを送信
    header('Content-Type: application/json');
    echo json_encode($response);
    exit;
}