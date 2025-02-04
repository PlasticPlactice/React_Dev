<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-CSRF-Token");
header("Content-Type: application/json; charset=UTF-8");

require_once "./database/db_connect.php";

$id = $_GET['id'] ?? null;
if (!$id || $id <= 0) {
    echo json_encode(["error" => "IDの値が間違っています"]);
    exit;
}

try {
    $stmt = $pdo->prepare("SELECT * FROM cars WHERE id = ?");
    $stmt->execute([$id]);
    $car = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$car) {
        echo json_encode(["error" => "Car not found", "id" => $id]);
        exit;
    }

    echo json_encode($car);
} catch (Exception $e) {
    echo json_encode(["error" => "Database error", "message" => $e->getMessage()]);
}
