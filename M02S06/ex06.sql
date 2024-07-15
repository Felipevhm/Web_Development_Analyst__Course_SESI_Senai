-- Criação da tabela orders
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    client_id INTEGER NOT NULL,
    total DECIMAL(10, 2) NOT NULL,
    address TEXT NOT NULL,
    observations TEXT,
    FOREIGN KEY (client_id) REFERENCES clients(id)
);

-- Criação da tabela orders_items
CREATE TABLE orders_items (
    id SERIAL PRIMARY KEY,
    order_id INTEGER NOT NULL,
    product_id INTEGER NOT NULL,
    amount INTEGER NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);
