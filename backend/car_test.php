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

    // メーカー名を取得
    $makerStmt = $pdo->prepare("SELECT name FROM makers WHERE id = ?");
    $makerStmt->execute([$car['maker_id']]);
    $maker = $makerStmt->fetch(PDO::FETCH_ASSOC);

    if ($maker) {
        $car['maker_name'] = $maker['name'];
    } else {
        $car['maker_name'] = "Unknown";
    }

    // ボディタイプ名を取得
    $bodyTypeStmt = $pdo->prepare("SELECT name FROM body_types WHERE id = ?");
    $bodyTypeStmt->execute([$car['body_type_id']]);
    $bodyType = $bodyTypeStmt->fetch(PDO::FETCH_ASSOC);

    if ($bodyType) {
        $car['body_type_name'] = $bodyType['name'];
    } else {
        $car['body_type_name'] = "Unknown";
    }

    // 燃料名を取得
    $fuelStmt = $pdo->prepare("SELECT name FROM fuels WHERE id = ?");
    $fuelStmt->execute([$car['fuel_id']]);
    $fuel = $fuelStmt->fetch(PDO::FETCH_ASSOC);

    if ($fuel) {
        $car['fuel_name'] = $fuel['name'];
    } else {
        $car['fuel_name'] = "Unknown";
    }

    // ドライブ名を取得
    $driveStmt = $pdo->prepare("SELECT name FROM drives WHERE id = ?");
    $driveStmt->execute([$car['drive_id']]);
    $drive = $driveStmt->fetch(PDO::FETCH_ASSOC);

    if ($drive) {
        $car['drive_name'] = $drive['name'];
    } else {
        $car['drive_name'] = "Unknown";
    }

    // ミッション名を取得
    $missionStmt = $pdo->prepare("SELECT name FROM missions WHERE id = ?");
    $missionStmt->execute([$car['mission_id']]);
    $mission = $missionStmt->fetch(PDO::FETCH_ASSOC);

    if ($mission) {
        $car['mission_name'] = $mission['name'];
    } else {
        $car['mission_name'] = "Unknown";
    }

    echo json_encode($car);
} catch (Exception $e) {
    echo json_encode(["error" => "Database error", "message" => $e->getMessage()]);
}