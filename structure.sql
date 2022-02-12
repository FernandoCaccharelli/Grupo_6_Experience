CREATE DATABASE grupo6;

use grupo6;

CREATE TABLE usuarios(
id INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
created_at timestamp DEFAULT CURRENT_TIMESTAMP,
updated_at timestamp DEFAULT CURRENT_TIMESTAMP,
first_name VARCHAR(20) NOT NULL,
last_name VARCHAR(20) NOT NULL,
email VARCHAR(20) NOT NULL,
password VARCHAR(20) NOT NULL,
birth_date DATE,
avatar VARCHAR(100),
profile VARCHAR(10)
);

CREATE TABLE categorias(
 id INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
 created_at timestamp DEFAULT CURRENT_TIMESTAMP,
 updated_at timestamp DEFAULT CURRENT_TIMESTAMP,
 category VARCHAR(30)
);

CREATE TABLE productos(
id INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
created_at timestamp DEFAULT CURRENT_TIMESTAMP,
updated_at timestamp DEFAULT CURRENT_TIMESTAMP,
name VARCHAR(20) NOT NULL,
price INT NOT NULL,
description VARCHAR (200),
people INT,
expiration_date DATE,
image VARCHAR(100),
category_id INT UNSIGNED NOT NULL,
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
