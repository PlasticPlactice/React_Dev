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

1. xamppは使用しなくてもいいです
2. 開発する前に ``` docker-compose up --build -d ```
5. mysql/init/init.sqlというファイルが作成されていますがこれはデータベースをいじりたいとき以外は触らないでください

# いろいろ変わっているので開発前に```git pull```するようにしてください
