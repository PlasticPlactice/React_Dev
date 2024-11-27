<?php
require_once 'db_connect.php';

// `id`を取得
$id = isset($_GET['id']) ? intval($_GET['id']) : null;

if ($id === null) {
    echo "Car ID is missing.";
    exit;
}

// データベースから車の詳細を取得
$stmt = $pdo->prepare("SELECT * FROM cars WHERE id = ?");
$stmt->execute([$id]);
$car = $stmt->fetch();

if ($car) {
    echo "Product page for product ID: " . htmlspecialchars($id) . "<br>";
    echo "name: " . htmlspecialchars($car['name']) . "<br>";
    echo "Maker: " . htmlspecialchars($car['maker']) . "<br>";
    echo "Model: " . htmlspecialchars($car['model']) . "<br>";
    echo "Year: " . htmlspecialchars($car['year']) . "<br>";
    echo "Price: $" . htmlspecialchars($car['price']) . "<br>";
} else {
    echo "Car not found.";
}
?>