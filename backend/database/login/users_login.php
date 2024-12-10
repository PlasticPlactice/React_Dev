<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

require_once '../db_connect.php';



// POSTデータの受信
$data = json_decode(file_get_contents('php://input'), true);

$email = $data['email'] ?? '';
$password = $data['password'] ?? '';

// 入力バリデーション
if (empty($email) || empty($password)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'メールアドレスとパスワードを入力してください'
    ]);
    exit;
}

// ユーザー検索
$stmt = $db->prepare("SELECT * FROM users WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();
$user = $result->fetch_assoc();

// パスワード検証
if ($user && password_verify($password, $user['password'])) {
    // ログイン成功
    $token = bin2hex(random_bytes(32)); // セキュアなトークン生成
    
    // トークンをデータベースに保存
    $updateStmt = $db->prepare("UPDATE users SET login_token = ? WHERE id = ?");
    $updateStmt->bind_param("si", $token, $user['id']);
    $updateStmt->execute();

    http_response_code(200);
    echo json_encode([
        'success' => true,
        'token' => $token,
        'user' => [
            'id' => $user['id'],
            'email' => $user['email']
        ]
    ]);
} else {
    // ログイン失敗
    http_response_code(401);
    echo json_encode([
        'success' => false,
        'message' => 'メールアドレスまたはパスワードが違います'
    ]);
}

$stmt->close();
$db->close();