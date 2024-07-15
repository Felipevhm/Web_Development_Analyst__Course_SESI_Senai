-- Criando a tabela categories
-- CREATE TABLE categories (
--     id SERIAL PRIMARY KEY,
--     name VARCHAR(150) NOT NULL
-- );

-- -- Inserindo 10 categorias de produtos eletrônicos
-- INSERT INTO categories (name) VALUES
-- ('TV'),
-- ('Computador'),
-- ('Notebook'),
-- ('Celular'),
-- ('Impressora'),
-- ('Brinquedo'),
-- ('Tablets'),
-- ('Ar-Condicionado'),
-- ('Microondas'),
-- ('Chuveiro');


-- Criar a tabela products
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
	price NUMERIC(10, 2) NOT NULL,
    amount VARCHAR(150) UNIQUE DEFAULT '0',
    color VARCHAR(50),
    voltage VARCHAR(3) CHECK (voltage IN ('110', '220')),
    description TEXT,
    category_id INTEGER NOT NULL,
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

