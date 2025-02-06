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

INSERT INTO drives(name) VALUES('4駆');
INSERT INTO drives(name) VALUES('2駆');

INSERT INTO missions(name) VALUES('MT');
INSERT INTO missions(name) VALUES('AT');

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


INSERT INTO prefectures(name) VALUES('北海道');
INSERT INTO prefectures(name) VALUES('青森県');
INSERT INTO prefectures(name) VALUES('岩手県');
INSERT INTO prefectures(name) VALUES('宮城県');
INSERT INTO prefectures(name) VALUES('秋田県');
INSERT INTO prefectures(name) VALUES('山形県');
INSERT INTO prefectures(name) VALUES('福島県');

INSERT INTO prefectures(name) VALUES('東京都');
INSERT INTO prefectures(name) VALUES('埼玉県');
INSERT INTO prefectures(name) VALUES('千葉県');
INSERT INTO prefectures(name) VALUES('神奈川県');
INSERT INTO prefectures(name) VALUES('茨城県');
INSERT INTO prefectures(name) VALUES('栃木県');
INSERT INTO prefectures(name) VALUES('群馬県');

INSERT INTO prefectures(name) VALUES('大阪府');
INSERT INTO prefectures(name) VALUES('兵庫県');
INSERT INTO prefectures(name) VALUES('京都府');
INSERT INTO prefectures(name) VALUES('滋賀県');
INSERT INTO prefectures(name) VALUES('奈良県');
INSERT INTO prefectures(name) VALUES('和歌山県');

INSERT INTO prefectures(name) VALUES('徳島県');
INSERT INTO prefectures(name) VALUES('香川県');
INSERT INTO prefectures(name) VALUES('愛媛県');
INSERT INTO prefectures(name) VALUES('高知県');

INSERT INTO prefectures(name) VALUES('新潟県');
INSERT INTO prefectures(name) VALUES('富山県');
INSERT INTO prefectures(name) VALUES('石川県');
INSERT INTO prefectures(name) VALUES('福井県');
INSERT INTO prefectures(name) VALUES('山梨県');
INSERT INTO prefectures(name) VALUES('長野県');

INSERT INTO prefectures(name) VALUES('愛知県');
INSERT INTO prefectures(name) VALUES('岐阜県');
INSERT INTO prefectures(name) VALUES('三重県');
INSERT INTO prefectures(name) VALUES('静岡県');

INSERT INTO prefectures(name) VALUES('鳥取県');
INSERT INTO prefectures(name) VALUES('島根県');
INSERT INTO prefectures(name) VALUES('岡山県');
INSERT INTO prefectures(name) VALUES('広島県');
INSERT INTO prefectures(name) VALUES('山口県');

INSERT INTO prefectures(name) VALUES('福岡県');
INSERT INTO prefectures(name) VALUES('佐賀県');
INSERT INTO prefectures(name) VALUES('熊本県');
INSERT INTO prefectures(name) VALUES('大分県');
INSERT INTO prefectures(name) VALUES('長崎県');
INSERT INTO prefectures(name) VALUES('宮崎県');
INSERT INTO prefectures(name) VALUES('鹿児島県');
INSERT INTO prefectures(name) VALUES('沖縄県');



INSERT INTO cars(name, displacements, handle, passengers, doors, maker_id, body_type_id, fuel_id, drive_id, mission_id, user_id)
                VALUES('ジムニー', 3000, '右', 4, 3, 1, 1, 1, 1, 2, 1);
INSERT INTO cars(name, displacements, handle, passengers, doors, maker_id, body_type_id, fuel_id, drive_id, mission_id, user_id)
                VALUES('アルファード', 50000, '右', 5, 5, 1, 1, 1, 1, 1, 2);
INSERT INTO used_cars(price, model_year, milege, repair, vehicle_inspection, date, img_url, car_id, prefectures_id, user_id)
                VALUES(200000, 2024, 160000, 'なし', '有', 20231126, '~~~.jpeg', 1, 1, 1);