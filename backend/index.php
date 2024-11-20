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


// リクエストされたURLのパスを取得
$request = $_SERVER['REQUEST_URI'];

// クエリパラメータを取り除く
$request = parse_url($request, PHP_URL_PATH);

// ルーティングの定義
function route($pattern, $callback) {
    global $request;
    if (preg_match($pattern, $request, $matches)) {
        // 最初のマッチ全体は削除
        array_shift($matches);
        // 残りのマッチを引数にしてコールバック実行
        return $callback(...$matches);
    }
    return false;
}

// ルートの設定
$route_found = false;

// ルート: ホームページ
$route_found = $route_found || route('#^/$#', function() {
    echo "Welcome to the homepage!";
});

// ルート: 車検索ページ
$route_found = $route_found || route('#^/car/(\d+)$#', function($id) {
    echo "Product page for product ID: " . htmlspecialchars($id);
});

// ルート: 特定のユーザーのプロフィールページ (例: /user/john)
$route_found = $route_found || route('#^/user/([a-zA-Z0-9_]+)$#', function($username) {
    echo "Profile page for user: " . htmlspecialchars($username);
});

// 404エラーページ
if (!$route_found) {
    http_response_code(404);
    echo "404 Not Found";
}

?>