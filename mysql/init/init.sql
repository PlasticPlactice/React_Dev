CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(128),
    mail VARCHAR(256),
    password VARCHAR(256),
    is_admin BOOLEAN DEFAULT FALSE
);

CREATE TABLE makers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(256)
);
CREATE TABLE body_types (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(256)
);
CREATE TABLE fuels (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(256)
);
CREATE TABLE drives (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(256)
);
CREATE TABLE missions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(256)
);
CREATE TABLE areas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(256)
);
CREATE TABLE prefectures (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(256),
    area_id INT,
    FOREIGN KEY (area_id) REFERENCES areas(id)
);

CREATE TABLE cars (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(256),
    displacements INT,
    handle VARCHAR(128),
    passengers INT,
    doors INT,
    maker_id INT,
    body_type_id INT,
    fuel_id INT,
    drive_id INT,
    mission_id INT,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (maker_id) REFERENCES makers(id),
    FOREIGN KEY (body_type_id) REFERENCES body_types(id),
    FOREIGN KEY (fuel_id) REFERENCES fuels(id),
    FOREIGN KEY (drive_id) REFERENCES drives(id),
    FOREIGN KEY (mission_id) REFERENCES missions(id)
);

CREATE TABLE used_cars (
    id INT PRIMARY KEY AUTO_INCREMENT,
    car_title VARCHAR(256),
    color VARCHAR(64),
    price INT,
    price_all INT,
    model_year INT,
    milege INT,
    repair VARCHAR(128),
    vehicle_inspection VARCHAR(128),
    date DATE,
    img_url VARCHAR(256),
    car_id INT,
    prefectures_id INT,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (car_id) REFERENCES cars(id),
    FOREIGN KEY (prefectures_id) REFERENCES prefectures(id)
);

INSERT INTO users(name, mail, password, is_admin) VALUES('taro', 'taro@mail.com', 'morijyobi', 0);
INSERT INTO users(name, mail, password, is_admin) VALUES('hanako', 'hanako@mail.com', 'qwert', 1);
INSERT INTO users(name, mail, password, is_admin) VALUES('sachiko', 'sachiko@mail.com', 'password', 0);


INSERT INTO makers(name) VALUES
('レクサス'),
('トヨタ'),
('ホンダ'),
('日産'),
('スズキ'),
('ダイハツ'),
('マツダ'),
('スバル'),
('三菱');

INSERT INTO body_types(name) VALUES
('軽自動車'),
('コンパクトカー'),
('ミニバン'),
('ステーションワゴン'),
('SUV・クロカン'),
('セダン'),
('キャンピングカー'),
('クーペ'),
('ハイブリッド'),
('ハッチバック'),
('オープンカー'),
('ピックアップトラック'),
('福祉車両'),
('商用車・バン'),
('トラック');

INSERT INTO fuels(name) VALUES
('レギュラー'),
('ハイオク'),
('軽油');

INSERT INTO drives(name) VALUES
('4WD'),
('2WD');

INSERT INTO missions(name) VALUES
('MT'),
('AT/CVT'),
('6速MT'),
('5速MT'),
('フロアMTモード付6AT'),
('CVT'),
('フロア4AT'),
('フロア5MT'),
('フロアMTモード付5MT');


INSERT INTO areas(name) VALUES
('北海道'),
('東北'),
('関東'),
('関西'),
('四国'),
('北陸'),
('甲信越'),
('東海'),
('中国'),
('九州'),
('沖縄');


INSERT INTO prefectures(name, area_id) 
VALUES('北海道', 1),
('岩手県', 2),
('宮城県', 2),
('秋田県', 2),
('山形県', 2),
('福島県', 2),
('東京都', 3),
('埼玉県', 3),
('千葉県', 3),
('神奈川県', 3),
('茨木県', 3),
('栃木県', 3),
('群馬県', 3),
('大阪府', 4),
('兵庫県', 4),
('京都府', 4),
('滋賀県', 4),
('奈良県', 4),
('和歌山県', 4),
('徳島県', 5),
('香川県', 5),
('愛媛県', 5),
('高知県', 5),
('新潟県', 6),
('富山県', 6),
('石川県', 6),
('福井県', 6),
('山梨県', 6),
('長野県', 6),
('愛知県', 7),
('岐阜県', 7),
('三重県', 7),
('静岡県', 7),
('鳥取県', 8),
('島根県', 8),
('岡山県', 8),
('広島県', 8),
('山口県', 8),
('福岡県', 9),
('佐賀県', 9),
('熊本県', 9),
('大分県', 9),
('長崎県', 9),
('宮崎県', 9),
('鹿児島県', 9),
('沖縄県', 10);


INSERT INTO cars(name, displacements, handle, passengers, doors, maker_id, body_type_id, fuel_id, drive_id, mission_id, user_id) VALUES
('ジムニー', 660, '右', 4, 3, 5, 5, 1, 1, 7, 1),
('ジムニー', 660, '右', 4, 3, 5, 5, 1, 1, 8, 1),
('ジムニー', 660, '右', 4, 3, 5, 5, 1, 1, 9, 1),
('アルファード', 1500, '右', 5, 5, 1, 1, 1, 1, 1, 2),
('プリウス', 1800, '右', 5, 5, 2, 9, 1, 2, 2, 1),
('カローラ', 1500, '右', 5, 4, 2, 6, 1, 2, 2, 2),
('クラウン', 2500, '右', 5, 4, 2, 6, 2, 2, 2, 3),
('フィット', 1500, '右', 5, 5, 3, 2, 1, 2, 2, 1),
('フリード', 1500, '右', 7, 5, 3, 3, 1, 2, 2, 2),
('シビック', 2000, '右', 5, 4, 3, 10, 2, 2, 1, 3),
('ノート', 1200, '右', 5, 5, 4, 2, 1, 2, 2, 1),
('セレナ', 2000, '右', 8, 5, 4, 3, 1, 2, 2, 2),
('エクストレイル', 2000, '右', 5, 5, 4, 5, 1, 1, 2, 1),
('スイフト', 1200, '右', 5, 5, 5, 2, 1, 2, 2, 2),
('ソリオ', 1200, '右', 5, 5, 5, 2, 1, 2, 2, 3),
('ワゴンR', 660, '右', 4, 5, 5, 1, 1, 2, 2, 1),
('ハスラー', 660, '右', 4, 5, 5, 1, 1, 2, 2, 2),
('CX-5', 2200, '右', 5, 5, 7, 5, 3, 1, 2, 1),
('ロードスター', 2000, '右', 2, 2, 7, 11, 2, 2, 1, 3),
('デリカD:5', 2200, '右', 8, 5, 9, 3, 3, 1, 2, 1),
('アウトランダー', 2400, '右', 7, 5, 9, 5, 3, 1, 2, 2),
('フォレスター', 2000, '右', 5, 5, 8, 5, 3, 1, 2, 3),
('レガシィ', 2500, '右', 5, 4, 8, 4, 2, 2, 2, 1),
('インプレッサ', 2000, '右', 5, 4, 8, 10, 2, 2, 1, 2);

INSERT INTO used_cars(car_title, color, price, price_all, model_year, milege, repair, vehicle_inspection, date, img_url, car_id, prefectures_id, user_id) VALUES
("ジムニー 660 XG 4WD ターボ 4WD AT ナビ フルセグTV Bカメラ", "白", 668000, 758000, 2017, 113000, 'なし', '車検整備付', '2025-02-12', 'http://localhost:9000/images/Jimney.jpg', 1, 3, 1),
("ジムニー 660 XG 4WD ターボ 4WD AT ナビ フルセグTV Bカメラ", "黒M", 1448000, 1498000, 2018, 6000, 'なし', '車検整備付', 20231126, 'http://localhost:9000/images/Jimney02.jpg', 1, 2, 2),
("ジムニー 660 ランドベンチャー 4WD 三菱認定保証　フルセグナビ　バックカメラ", "黒", 1230000, 1282000, 2017, 43000, 'なし', '2026(R08)年06月', '2025-02-12', 'http://localhost:9000/images/Jimney03.jpg', 1, 5, 2),
("ジムニー 660 XC 4WD ターボ セーフティサポート ETC 禁煙車", "薄黄M", 2070000, 2149000, 2023, 10000, 'なし', '2026(R08)年07月', '2025-02-12', 'http://localhost:9000/images/Jimney04.jpg', 1, 8, 3),
("ジムニー 660 XC 4WD 2トーンカラー SDナビ　1オーナー　禁煙", "薄茶", 1743000, 1849000, 2019, 45000, 'なし', '車検整備付', '2025-02-12', 'http://localhost:9000/images/Jimney05.jpg', 1, 12, 1),
("ジムニー 660 XC 4WD 4WD 衝突軽減 LED ターボ スマートキー×2", "灰", 2240000, 2298000, 2024, 81, 'なし', '2027(R09)年11月', '2025-02-12', 'http://localhost:9000/images/Jimney06.jpg', 1, 15, 2),
("ジムニー 660 XC 4WD スズキセーフティサポート シートヒーター", "薄茶M", 2124000, 2159000, 2023, 7000, 'なし', '2026(R08)年03月', '2025-02-12', 'http://localhost:9000/images/Jimney07.jpg', 1, 20, 3),
("ジムニー 660 XG 4WD 社外ディスプレイオーディオ ETC", "黒真珠", 1405000, 1469000, 2020, 67000, 'なし', '2025(R07)年04月', '2025-02-12', 'http://localhost:9000/images/Jimney08.jpg', 2, 25, 1),
("ジムニー 660 XG 4WD 衝突軽減 カーオーディオ ターボ キーレス", "白", 2019000, 2078000, 2024, 742, 'なし', '車検整備付', '2025-02-12', 'http://localhost:9000/images/Jimney09.jpg', 1, 30, 2),
("ジムニー 660 XC 4WD 衝突軽減装置 禁煙 ディスプレイオーディオ", "緑", 2072000, 2149000, 2023, 17000, 'なし', '2026(R08)年03月', '2025-02-12', 'http://localhost:9000/images/Jimney10.jpg', 1, 35, 3),
("ジムニー 660 XC 4WD デュアルセンサーブレーキサポート", "白", 2356000, 2398000, 2024, 75, 'なし', '2027(R09)年03月', '2025-02-12', 'http://localhost:9000/images/Jimney11.jpg', 1, 40, 1),
("ジムニー 660 ランドベンチャー 4WD 社外ナビ BT TV 純正AW ルーフキャリア", "銀", 1298000, 1348000, 2018, 69000, 'なし', '2025(R07)年03月', 20231126, 'http://localhost:9000/images/Jimney12.jpg', 3, 1, 1);
