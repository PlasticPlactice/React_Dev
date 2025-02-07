<?php
require_once "./database/db_connect.php";

// リクエストされたURLのパスを取得
$request = $_SERVER['REQUEST_URI'];

// クエリパラメータを取得
$query = $_SERVER['QUERY_STRING'];

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
    '#^/cars$#' => function() {
        header("Location: cars_all.php");
        exit;
    },
    '#^/api/(\w+)$#' => function($endpoint) use ($query) {
        header("Location: $endpoint.php?$query");
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

if (!$route_found) {
    http_response_code(404);
    echo "404 Not Found";
}