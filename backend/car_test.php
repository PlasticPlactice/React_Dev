<?php

// header("Access-Control-Allow-Origin: *");
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
header("Content-Type: application/json; charset=UTF-8");

require_once './database/db_connect.php';

// `id`を取得
$id = isset($_GET['id']) ? intval($_GET['id']) : null;

if ($id === null) {
    echo json_encode(["error" => "Car ID is missing."]);
    exit;
}

// データベースから車の詳細を取得
$stmt = $pdo->prepare("SELECT * FROM cars WHERE id = ?");
$stmt->execute([$id]);
$car = $stmt->fetch(PDO::FETCH_ASSOC);

if ($car) {
    echo json_encode($car, JSON_UNESCAPED_UNICODE);
} else {
    echo json_encode(["error" => "Car not found."]);
}
