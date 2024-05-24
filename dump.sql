CREATE DATABASE IF NOT EXISTS myapp;
USE myapp;

CREATE TABLE IF NOT EXISTS produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    descricao TEXT,
    imagem_url VARCHAR(255),
    preco DECIMAL(10, 2) NOT NULL
);

INSERT INTO produtos (nome, descricao, imagem_url, preco) VALUES
('Coca-Cola', 'Refrigerante de cola carbonatado mundialmente famoso.', 'https://imgbb.com/1c1y1c1.jpg', 4.99),
('Pepsi', 'Refrigerante de cola popular, concorrente direto da Coca-Cola.', 'https://imgbb.com/2c2y2c2.jpg', 4.89),
('Heineken', 'Cerveja lager pálida holandesa amplamente consumida.', 'https://imgbb.com/3c3y3c3.jpg', 9.99),
('Jack Daniel`s', 'Whisky americano do Tennessee, conhecido por seu sabor suave.', 'https://imgbb.com/4c4y4c4.jpg', 49.99),
('Absolut Vodka', 'Vodka sueca de alta qualidade, famosa por sua pureza.', 'https://imgbb.com/5c5y5c5.jpg', 39.99),
('Red Bull', 'Bebida energética que aumenta o desempenho e a concentração.', 'https://imgbb.com/6c6y6c6.jpg', 2.99),
('Corona', 'Cerveja lager mexicana comumente servida com uma fatia de limão.', 'https://imgbb.com/7c7y7c7.jpg', 10.99),
('Ypioca', 'Cachaça brasileira tradicional feita a partir de cana-de-açúcar.', 'https://imgbb.com/8c8y8c8.jpg', 19.99),
('Guaraná Antarctica', 'Refrigerante brasileiro feito a partir do fruto do guaraná.', 'https://imgbb.com/9c9y9c9.jpg', 3.99),
('Monster Energy', 'Bebida energética que fornece energia instantânea.', 'https://imgbb.com/0c0y0c0.jpg', 3.49);

-- docker exec -i database mariadb -u root -pr00t myapp < dump.sql

-- DELETE FROM produtos
-- WHERE id IN (
--   SELECT id FROM (
--     SELECT id FROM produtos ORDER BY id LIMIT 10, 20
--   ) AS subquery
-- );
