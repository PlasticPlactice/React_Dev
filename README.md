# GitHubに入ったら

1. cloneする
2. ターミナルを開いて ```npx create-next-app .``` を打つ
3. 選択肢はApp RouterとTurbopack以外yesでEnter
4. いろいろいじる前にdocker desktop をひらいて ```docker-compose up --build -d``` のコマンドを打つ
5. frontendファイルを実行するときは ```npm run dev``` も打つ

# 開発上のルール

1. 絶対main,masterでプッシュしない！
2. できるだけ自分の作業をissueで管理、報告する
3. できるだけプルリクは他人にレビューしてもらう
4. コミットは細かく何回も

# 注意

1. xamppを使用しなくても動作する
2. データベースは操作方法がめんどいので要相談
3. 開発する前に ``` docker-compose up --build -d ``` を打つ(打たないと動かない)
4. 多分大丈夫だけど一応授業の終わりにdocker desktopからコンテナを停止する
5. /minio.dataフォルダはgitでバージョン管理しない方がいいみたいなので最新のバージョンでできないようにしました
6. mysql/init/init.sqlというファイルが作成されていますがこれはデータベースをいじりたいとき以外は触らないでください
   - ### DBへの接続の仕方
   - dockerが動いていることを確認してターミナルで```docker exec -it mysql mysql -u root -p```を打つ
   - パスワードを求められるので```morijyobi```と入力
   - 接続できれば一番左の名前のところが```mysql >```に変わります
   - ```show databases;```でcarがあることを確認
   - あったら```use car;``` -> ```show tables;```でテーブル一覧が見れます
   - カラムを確認したい場合は```show columns from {テーブル名};```で確認ができます

# いろいろ変わっているので開発前に```git pull```するようにしてください
