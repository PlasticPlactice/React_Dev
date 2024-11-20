-- CREATE DATABASE IF NOT EXISTS car;
-- USE car;

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
    FOREIGN KEY (maker_id) REFERENCES makers(id),
    FOREIGN KEY (body_type_id) REFERENCES body_types(id),
    FOREIGN KEY (fuel_id) REFERENCES fuels(id),
    FOREIGN KEY (drive_id) REFERENCES drives(id),
    FOREIGN KEY (mission_id) REFERENCES missions(id)
);

CREATE TABLE used_cars (
    id INT PRIMARY KEY AUTO_INCREMENT,
    car_id INT,
    price INT,
    model_year INT,
    milege INT,
    repair VARCHAR(128),
    vehicle_inspection VARCHAR(128),
    date DATE,
    img_url VARCHAR(256),
    prefectures_id INT,
    FOREIGN KEY (car_id) REFERENCES cars(id),
    FOREIGN KEY (prefectures_id) REFERENCES prefectures(id)
);
