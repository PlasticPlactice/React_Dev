<?php
// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
// header("Access-Control-Allow-Headers: Content-Type, Authorization");
// header("Content-Type: application/json; charset=UTF-8");

// require_once './database/db_connect.php';

// // `id`を取得
// $id = isset($_GET['id']) ? intval($_GET['id']) : null;

// if ($id === null) {
//     echo json_encode(["error" => "Car ID is missing."]);
//     exit;
// }

// // データベースから車の詳細を取得
// $stmt = $pdo->prepare("SELECT * FROM cars WHERE id = ?");
// $stmt->execute([$id]);
// $car = $stmt->fetch(PDO::FETCH_ASSOC);

// if ($car) {
//     echo json_encode($car, JSON_UNESCAPED_UNICODE);
// } else {
//     echo json_encode(["error" => "Car not found."]);
// }


header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-CSRF-Token");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

require_once './database/db_connect.php';

// `id`を取得
$id = isset($_GET['id']) ? intval($_GET['id']) : null;

if ($id === null) {
    echo json_encode(["error" => "Car ID is missing."]);
    exit;
}

try {
    // データベースから車の詳細を取得
    $stmt = $pdo->prepare("SELECT * FROM cars WHERE id = ?");
    $stmt->execute([$id]);
    $car = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($car) {
        echo json_encode($car, JSON_UNESCAPED_UNICODE);
    } else {
        echo json_encode(["error" => "Car not found."]);
    }
} catch (Exception $e) {
    error_log("Error fetching car data: " . $e->getMessage());
    echo json_encode(["error" => "Internal Server Error"]);
}