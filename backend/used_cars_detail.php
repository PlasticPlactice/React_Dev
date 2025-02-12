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
    $stmt = $pdo->prepare("SELECT * FROM used_cars WHERE id = ?");
    $stmt->execute([$id]);
    $usedCar = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$usedCar) {
        echo json_encode(["error" => "Used car not found", "id" => $id]);
        exit;
    }

    // 車の名前を取得
    // 車の名前とメーカーIDを取得
    $carStmt = $pdo->prepare("SELECT name, maker_id, mission_id, body_type_id, displacements FROM cars WHERE id = ?");
    $carStmt->execute([$usedCar['car_id']]);
    $car = $carStmt->fetch(PDO::FETCH_ASSOC);

    if ($car) {
        $usedCar['car_name'] = $car['name'];
        $makerId = $car['maker_id'];
        $missionId = $car['mission_id'];
        $bodytypeId = $car['body_type_id'];
        $usedCar['displacements'] = $car['displacements'];
    } else {
        $usedCar['car_name'] = "Unknown";
        $makerId = null;
        $usedCar['mission_id'] = null;
        $bodytypeId = null;
        $usedCar['displacements'] = null;
    }

    // メーカー名を取得
    if ($makerId !== null) {
        $makerStmt = $pdo->prepare("SELECT name FROM makers WHERE id = ?");
        $makerStmt->execute([$makerId]);
        $maker = $makerStmt->fetch(PDO::FETCH_ASSOC);

        if ($maker) {
            $usedCar['maker_name'] = $maker['name'];
        } else {
            $usedCar['maker_name'] = "Unknown";
        }
    } else {
        $usedCar['maker_name'] = "Unknown";
    }

    if ($missionId !== null) {
        // ミッション名を取得
        $missionStmt = $pdo->prepare("SELECT name FROM missions WHERE id = ?");
        $missionStmt->execute([$missionId]);
        $mission = $missionStmt->fetch(PDO::FETCH_ASSOC);

        if ($mission) {
            $usedCar['mission_name'] = $mission['name'];
        } else {
            $usedCar['mission_name'] = "Unknown";
        }
    } else {
        $usedCar['mission_name'] = "Unknown";
    }

    if ($bodytypeId !== null) {
        $bodytypeStmt = $pdo->prepare("SELECT name FROM body_types WHERE id = ?");
        $bodytypeStmt->execute([$bodytypeId]);
        $bodytype = $bodytypeStmt->fetch(PDO::FETCH_ASSOC);

        if ($bodytype) {
            $usedCar['body_type_name'] = $bodytype['name'];
        } else {
            $usedCar['body_type_name'] = "Unknown";
        }
    }

    // 都道府県名を取得
    $prefectureStmt = $pdo->prepare("SELECT name FROM prefectures WHERE id = ?");
    $prefectureStmt->execute([$usedCar['prefectures_id']]);
    $prefecture = $prefectureStmt->fetch(PDO::FETCH_ASSOC);

    if ($prefecture) {
        $usedCar['prefecture_name'] = $prefecture['name'];
    } else {
        $usedCar['prefecture_name'] = "Unknown";
    }

    // ユーザー名を取得
    $userStmt = $pdo->prepare("SELECT name FROM users WHERE id = ?");
    $userStmt->execute([$usedCar['user_id']]);
    $user = $userStmt->fetch(PDO::FETCH_ASSOC);

    if ($user) {
        $usedCar['user_name'] = $user['name'];
    } else {
        $usedCar['user_name'] = "Unknown";
    }


    echo json_encode($usedCar);
} catch (Exception $e) {
    echo json_encode(["error" => "Database error", "message" => $e->getMessage()]);
}