CREATE DATABASE grupo6;

use grupo6;

CREATE TABLE usuarios(
id INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
created_at timestamp DEFAULT CURRENT_TIMESTAMP,
updated_at timestamp DEFAULT CURRENT_TIMESTAMP,
name VARCHAR(255) NOT NULL,
lastName VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL,
password VARCHAR(255) NOT NULL,
birthdate DATE,
avatar VARCHAR(255),
profile VARCHAR(255)
);

CREATE TABLE categorias(
 id INT(10) UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
 created_at timestamp DEFAULT CURRENT_TIMESTAMP,
 updated_at timestamp DEFAULT CURRENT_TIMESTAMP,
 category VARCHAR(255)
);

CREATE TABLE productos(
id INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
created_at timestamp DEFAULT CURRENT_TIMESTAMP,
updated_at timestamp DEFAULT CURRENT_TIMESTAMP,
name VARCHAR(255) NOT NULL,
price INT NOT NULL,
description VARCHAR (500),
people INT,
expiration_date DATE,
image VARCHAR(255),
category_id INT UNSIGNED,
FOREIGN KEY (category_id) REFERENCES categorias (id)
);

CREATE TABLE carritos(
id INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY ,
created_at timestamp DEFAULT CURRENT_TIMESTAMP,
updated_at timestamp DEFAULT CURRENT_TIMESTAMP,
quantity DECIMAL ,
total_price INT,
users_id INT UNSIGNED NOT NULL,
FOREIGN KEY (users_id) REFERENCES usuarios (id)
);

CREATE TABLE carritos_productos(
id INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
created_at timestamp DEFAULT CURRENT_TIMESTAMP,
updated_at timestamp DEFAULT CURRENT_TIMESTAMP,
product_id INT UNSIGNED NOT NULL,
basket_id INT UNSIGNED NOT NULL,
FOREIGN KEY (product_id) REFERENCES productos(id),
FOREIGN KEY (basket_id) REFERENCES carritos(id)
);