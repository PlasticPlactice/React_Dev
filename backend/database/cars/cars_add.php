<?php
require_once '../db_connect.php';

$response = [
    'status' => 'error',
    'message' => ''
];

// 車の登録
try{
    if(isset($_POST['name']) && isset($_POST['displacements']) && isset($_POST['handle']) && 
        isset($_POST['passengers']) && isset($_POST['doors']) && isset($_POST['maker_id']) && isset($_POST['body_id']) && 
        isset($_POST['fuel_id']) && isset($_POST['drive_id']) && isset($_POST['mission_id'])){
    
        $name = $_POST['name'];                    //車両の名前
        $displacements = $_POST['displacements'];  //排気量
        $handle = $_POST['handle'];                //ハンドル位置
        $passengers = $_POST['passengers'];        //乗車人数
        $doors = $_POST['doors'];                  //ドア数
        $maker_id = $_POST['maker_id'];            //メーカー
        $body_id = $_POST['body_id'];              //ボディタイプ
        $fuel_id = $_POST['fuel_id'];              //油種
        $drive_id = $_POST['drive_id'];            //駆動方式
        $mission_id = $_POST['mission_id'];        //トランスミッション
    
        $sql = "INSERT INTO cars (
            name, displacements, handle, passengers, doors, maker_id, body_id, fuel_id, drive_id, mission_id
        ) VALUES (
            :name, :displacements, :handle, :passengers, :doors, :maker_id, :body_id, :fuel_id, :drive_id, :mission_id
        )";
    
        $stm = $pdo->prepare($sql);
    
        $stm->bindValue(':name', $name, PDO::PARAM_STR);
        $stm->bindValue(':displacements', $displacements, PDO::PARAM_INT);
        $stm->bindValue(':handle', $handle, PDO::PARAM_STR);
        $stm->bindValue(':passengers', $passengers, PDO::PARAM_INT);
        $stm->bindValue(':doors', $doors, PDO::PARAM_INT);
        $stm->bindValue(':maker_id', $maker_id, PDO::PARAM_INT);
        $stm->bindValue(':body_id', $body_id, PDO::PARAM_INT);
        $stm->bindValue(':fuel_id', $fuel_id, PDO::PARAM_INT);
        $stm->bindValue(':drive_id', $drive_id, PDO::PARAM_INT);
        $stm->bindValue(':mission_id', $mission_id, PDO::PARAM_INT);
    
        // SQLの実行
        $stm->execute();

        // 成功時のレスポンス
        $response['status'] = 'success';
        $response['message'] = '車両情報が正常に登録されました';
        
    }else{
        throw new Exception("必須な項目が入力されていません");
    }
    
} catch (PDOException $e){
    // データベースエラーの場合
    $response['status'] = 'error';
    $response['message'] = 'Database error: ' . $e->getMessage();
    
} catch (Exception $e){
    // その他のエラーの場合
    $response['status'] = 'error';
    $response['message'] = $e->getMessage();
} finally {
    // JSONレスポンスを返す
    header('Content-Type: application/json');
    echo json_encode($response, JSON_UNESCAPED_UNICODE);
}

?>