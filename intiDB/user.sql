-- Language: sql:8.0.24
use scaler;


DROP TABLE IF EXISTS User;


CREATE TABLE User (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(20) NOT NULL,
    password VARCHAR(20) NOT NULL,
    email VARCHAR(20) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    address VARCHAR(20) NOT NULL,
    role VARCHAR(20) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    is_delete INT DEFAULT 0
);




INSERT INTO User (name, password, email, phone, address, role) VALUES ('admin', 'admin', 'test@email.com',
    '123456789', 'test address', 'admin');




desc User;