<!-- いじらないで！！！！！！！！！！！！！！！！！！！ -->

<?php
//PHPからMySQLデータベースサーバーへの接続

//ユーザー名
$user = "root";
//パスワード
$pass = "morijyobi";
//データベース名
$database = "car";
//サーバー名
$server = "mysql";

//接続するための情報を組み立てる（DSN文字列）
$dsn = "mysql:host={$server};dbname={$database};charset=utf8";

//PDOを使ってmysqlへ接続する
try {
    //PDOクラスのインスタンスを作成してDBに接続する
    $pdo = new PDO($dsn, $user, $pass);
    //プリペアドステートメントのエミュレーションを無効化
    $pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
    //例外をスローする
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "データベースに接続しました";
} catch(Exception $e) {
    echo "データベース接続エラー";
    echo $e->getMessage();
}