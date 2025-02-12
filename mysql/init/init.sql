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
    price INT,
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


INSERT INTO makers(name) VALUES('レクサス');
INSERT INTO makers(name) VALUES('トヨタ');
INSERT INTO makers(name) VALUES('ホンダ');
INSERT INTO makers(name) VALUES('日産');
INSERT INTO makers(name) VALUES('スズキ');
INSERT INTO makers(name) VALUES('ダイハツ');
INSERT INTO makers(name) VALUES('マツダ');
INSERT INTO makers(name) VALUES('スバル');
INSERT INTO makers(name) VALUES('三菱');

INSERT INTO body_types(name) VALUES('軽自動車');
INSERT INTO body_types(name) VALUES('コンパクトカー');
INSERT INTO body_types(name) VALUES('ミニバン');
INSERT INTO body_types(name) VALUES('ステーションワゴン');
INSERT INTO body_types(name) VALUES('SUV・クロカン');
INSERT INTO body_types(name) VALUES('セダン');
INSERT INTO body_types(name) VALUES('キャンピングカー');
INSERT INTO body_types(name) VALUES('クーペ');
INSERT INTO body_types(name) VALUES('ハイブリッド');
INSERT INTO body_types(name) VALUES('ハッチバック');
INSERT INTO body_types(name) VALUES('オープンカー');
INSERT INTO body_types(name) VALUES('ピックアップトラック');
INSERT INTO body_types(name) VALUES('福祉車両');
INSERT INTO body_types(name) VALUES('商用車・バン');
INSERT INTO body_types(name) VALUES('トラック');

INSERT INTO fuels(name) VALUES('レギュラー');
INSERT INTO fuels(name) VALUES('ハイオク');
INSERT INTO fuels(name) VALUES('軽油');

INSERT INTO drives(name) VALUES('4WD');
INSERT INTO drives(name) VALUES('2WD');

INSERT INTO missions(name) VALUES('MT');
INSERT INTO missions(name) VALUES('AT/CVT');
INSERT INTO missions(name) VALUES('6速MT');
INSERT INTO missions(name) VALUES('5速MT');
INSERT INTO missions(name) VALUES('フロアMTモード付6AT');
INSERT INTO missions(name) VALUES('CVT');

INSERT INTO areas(name) VALUES('北海道');
INSERT INTO areas(name) VALUES('東北');
INSERT INTO areas(name) VALUES('関東');
INSERT INTO areas(name) VALUES('関西');

INSERT INTO areas(name) VALUES('四国');
INSERT INTO areas(name) VALUES('北陸');
INSERT INTO areas(name) VALUES('甲信越');
INSERT INTO areas(name) VALUES('東海');
INSERT INTO areas(name) VALUES('中国');
INSERT INTO areas(name) VALUES('九州');
INSERT INTO areas(name) VALUES('沖縄');


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
('ジムニー', 660, '右', 4, 3, 5, 1, 1, 1, 2, 1),
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

INSERT INTO used_cars(price, model_year, milege, repair, vehicle_inspection, date, img_url, car_id, prefectures_id, user_id)
VALUES(4000000, 2024, 160000, '無', '有', 20231126, 'http://localhost:9000/images/Jimney.jpg', 1, 2, 2),
(1500000, 2018, 30000, '無', '有', '2025-02-12', 'http://localhost:9000/images/Jimney.jpg', 1, 3, 1),
(1200000, 2017, 45000, '無', '無', '2025-02-12', 'http://localhost:9000/images/Jimney.jpg', 1, 5, 2),
(1800000, 2019, 25000, '無', '有', '2025-02-12', 'http://localhost:9000/images/Jimney.jpg', 1, 8, 3),
(1000000, 2016, 60000, '有', '無', '2025-02-12', 'http://localhost:9000/images/Jimney.jpg', 1, 12, 1),
(2000000, 2020, 15000, '無', '有', '2025-02-12', 'http://localhost:9000/images/Jimney.jpg', 1, 15, 2),
(900000, 2015, 75000, '有', '無', '2025-02-12', 'http://localhost:9000/images/Jimney.jpg', 1, 20, 3),
(1600000, 2018, 40000, '無', '有', '2025-02-12', 'http://localhost:9000/images/Jimney.jpg', 1, 25, 1),
(1100000, 2016, 55000, '無', '無', '2025-02-12', 'http://localhost:9000/images/Jimney.jpg', 1, 30, 2),
(1700000, 2019, 35000, '無', '有', '2025-02-12', 'http://localhost:9000/images/Jimney.jpg', 1, 35, 3),
(950000, 2015, 70000, '有', '無', '2025-02-12', 'http://localhost:9000/images/Jimney.jpg', 1, 40, 1),
(200000, 2024, 160000, '有', '無', 20231126, 'http://localhost:9000/images/Jimney.jpg', 2, 1, 1);