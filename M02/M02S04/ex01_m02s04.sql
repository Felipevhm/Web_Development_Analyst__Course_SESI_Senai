CREATE TABLE categorias (
    categoria_id SERIAL PRIMARY KEY,
    nome_categoria VARCHAR(50) NOT NULL
);


ALTER TABLE produtos ADD COLUMN categoria_id INT;

ALTER TABLE produtos
ADD CONSTRAINT fk_categoria
FOREIGN KEY (categoria_id) REFERENCES categorias(categoria_id);

ALTER TABLE produtos DROP CONSTRAINT fk_categoria;

DROP TABLE categorias
