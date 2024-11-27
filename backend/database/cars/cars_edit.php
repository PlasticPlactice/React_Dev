<?php
require_once '../db_connect.php';

$response = [
    'status' => 'error',
    'message' => '',
    'data' => []
];

// 車両の編集
try{
    if(isset($_GET['id'])){
        $id = $_GET['id'];
        $sql = 'SELECT * FROM cars WHERE id = :id';
        $stm = $pdo->prepare($sql);
        $stm->bindValue(':id', $id, PDO::PARAM_INT);
        $stm->execute();
        $car = $stm->fetch(PDO::FETCH_ASSOC);
        
        // 車が存在しない場合
        if(!$car){
            throw new Exception('車情報が見つかりません');
        }

        $sql = "UPDATE cars SET
            name = :name,
            displacements = :displacements,
            handle = :handle,
            passengers = :passengers,
            doors = :doors,
            maker_id = :maker_id,
            body_id = :body_id,
            fuel_id = :fuel_id,
            drive_id = :drive_id,
            mission_id = :mission_id
            WHERE id = :id";
        
        $stm = $pdo->prepare($sql);
    
        $stm->bindValue(':id', $id, PDO::PARAM_INT);
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

        // 更新された行数を確認
        if ($stm->rowCount() > 0) {
            // 更新後のデータを取得
            $sqlSelect = "SELECT * FROM cars WHERE id = :id";
            $stmSelect = $pdo->prepare($sqlSelect);
            $stmSelect->bindValue(':id', $id, PDO::PARAM_INT);
            $stmSelect->execute();
            $updatedData = $stmSelect->fetch(PDO::FETCH_ASSOC);

            $response['status'] = 'success';
            $response['message'] = '車両情報が正常に更新されました';
            $response['data'] = $updatedData;
        } else {
            $response['status'] = 'error';
            $response['message'] = '更新対象のデータが見つかりませんでした';
        }
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