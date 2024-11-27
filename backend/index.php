<?php
// 動的ルーティングを採用したいページ
// users{id}
// cars{id}
// /cars?maker=""
// /cars?carName=""
// /cars?region=""
// /cars?fee=""
// /favorites{id}
// /cars/ranks{id}

require_once "./database/db_connect.php";

// リクエストされたURLのパスを取得
$request = $_SERVER['REQUEST_URI'];

// クエリパラメータを取り除く
$request = parse_url($request, PHP_URL_PATH);

// ルーティングの定義
$routes = [
    '#^/$#' => function() {
        echo $_SERVER['REQUEST_URI'];
    },
    '#^/car/(\d+)$#' => function($id) {
        header("Location: car_test.php?id=$id");
        exit;
    },
    // 他のルートをここに追加
];

// ルートの設定とマッチング
$route_found = false;
foreach ($routes as $pattern => $callback) {
    if (preg_match($pattern, $request, $matches)) {
        array_shift($matches);
        $callback(...$matches);
        $route_found = true;
        break;
    }
}

// ルートが見つからない場合
if (!$route_found) {
    http_response_code(404);
    echo "404 Not Found";
}


// test
// $stmt = $pdo->prepare("SELECT * FROM users");
// $stmt->execute();
// $cars = $stmt->fetchAll(PDO::FETCH_ASSOC);

// echo "<pre>";
// var_dump($cars);
// echo "</pre>";

?>