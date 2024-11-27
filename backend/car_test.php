<?php
require_once './database/db_connect.php';

// `id`を取得
$id = isset($_GET['id']) ? intval($_GET['id']) : null;

if ($id === null) {
    echo "Car ID is missing.";
    exit;
}

// データベースから車の詳細を取得
$stmt = $pdo->prepare("SELECT name FROM cars WHERE id = ?");
$stmt->execute([$id]);
$car = $stmt->fetch(PDO::FETCH_ASSOC);

if ($car) {
    echo $_SERVER['REQUEST_URI'];
    echo "<br>";
    echo "ID: " . htmlspecialchars($id) . "<br>";
    echo $car["name"];
} else {
    echo "Car not found.";
}
?>