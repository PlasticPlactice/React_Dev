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

INSERT INTO makers(name) VALUES('suzuki');
INSERT INTO makers(name) VALUES('toyota');
INSERT INTO makers(name) VALUES('honda');
INSERT INTO makers(name) VALUES('nissan');
INSERT INTO makers(name) VALUES('mitsubishi');

INSERT INTO body_types(name) VALUES('軽自動車');
INSERT INTO body_types(name) VALUES('ミニバン');
INSERT INTO body_types(name) VALUES('セダン');
INSERT INTO body_types(name) VALUES('ハッチバック');
INSERT INTO body_types(name) VALUES('クーペ');

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
INSERT INTO areas(name) VALUES('中国');
INSERT INTO areas(name) VALUES('四国');
INSERT INTO areas(name) VALUES('九州');

INSERT INTO prefectures(name) VALUES('北海道');
INSERT INTO prefectures(name) VALUES('岩手');
INSERT INTO prefectures(name) VALUES('東京');
INSERT INTO prefectures(name) VALUES('大阪');
INSERT INTO prefectures(name) VALUES('鳥取');
INSERT INTO prefectures(name) VALUES('香川');
INSERT INTO prefectures(name) VALUES('熊本');

INSERT INTO cars(name, displacements, handle, passengers, doors, maker_id, body_type_id, fuel_id, drive_id, mission_id, user_id)
                VALUES('ジムニー', 3000, '右', 4, 1, 1, 1, 1, 1, 1, 1);
INSERT INTO cars(name, displacements, handle, passengers, doors, maker_id, body_type_id, fuel_id, drive_id, mission_id, user_id)
                VALUES('アルファード', 50000, '右', 5, 1, 1, 1, 1, 1, 1, 2);
INSERT INTO used_cars(price, model_year, milege, repair, vehicle_inspection, date, img_url, car_id, prefectures_id, user_id)
                VALUES(200000, 2024, 160000, 'なし', '有', 20231126, '~~~.jpeg', 1, 1, 1);