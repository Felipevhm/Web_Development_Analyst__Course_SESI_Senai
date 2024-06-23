-- Para responder às suas consultas, vou supor que você tenha as 
-- seguintes tabelas no seu banco de dados:

-- - clientes (cliente_id, nome, cidade)
-- - pedidos (pedido_id, cliente_id, data_pedido, valor_total)
-- - itens_pedido (item_pedido_id, pedido_id, produto_id, quantidade, valor)
-- - produtos (produto_id, nome, categoria_id, preco)
-- - categorias (categoria_id, nome)

--  1. Encontre o total de itens pedidos em cada mês.


SELECT 
    DATE_TRUNC('month', p.data_pedido) AS mes,
    SUM(ip.quantidade) AS total_itens
FROM 
    pedidos p
JOIN 
    itens_pedido ip ON p.pedido_id = ip.pedido_id
GROUP BY 
    DATE_TRUNC('month', p.data_pedido)
ORDER BY 
    mes;


--  2. Liste os clientes que não têm pedidos associados.


SELECT 
    c.cliente_id,
    c.nome
FROM 
    clientes c
LEFT JOIN 
    pedidos p ON c.cliente_id = p.cliente_id
WHERE 
    p.pedido_id IS NULL;


--  3. Encontre o pedido de maior valor.


SELECT 
    pedido_id,
    valor_total
FROM 
    pedidos
ORDER BY 
    valor_total DESC
LIMIT 1;


--  4. Encontre o total de itens pedidos para cada produto.


SELECT 
    p.produto_id,
    p.nome,
    SUM(ip.quantidade) AS total_itens
FROM 
    produtos p
JOIN 
    itens_pedido ip ON p.produto_id = ip.produto_id
GROUP BY 
    p.produto_id,
    p.nome
ORDER BY 
    total_itens DESC;


--  5. Calcule a soma dos valores dos pedidos para cada cliente
--   que tenha feito mais de um pedido.


SELECT 
    c.cliente_id,
    c.nome,
    SUM(p.valor_total) AS valor_total_pedidos
FROM 
    clientes c
JOIN 
    pedidos p ON c.cliente_id = p.cliente_id
GROUP BY 
    c.cliente_id,
    c.nome
HAVING 
    COUNT(p.pedido_id) > 1;


--  6. Encontre o preço médio dos produtos em cada categoria.


SELECT 
    c.nome AS categoria,
    AVG(p.preco) AS preco_medio
FROM 
    categorias c
JOIN 
    produtos p ON c.categoria_id = p.categoria_id
GROUP BY 
    c.nome
ORDER BY 
    c.nome;


-- 7. Encontre o cliente que fez o pedido de maior valor.


SELECT 
    c.cliente_id,
    c.nome,
    p.pedido_id,
    p.valor_total
FROM 
    clientes c
JOIN 
    pedidos p ON c.cliente_id = p.cliente_id
ORDER BY 
    p.valor_total DESC
LIMIT 1;


-- Essas consultas SQL cobrem os requisitos especificados, retornando 
-- os resultados desejados com base nas relações entre as tabelas fornecidas.
--  Certifique-se de adaptar os nomes das tabelas e colunas se forem diferentes
--   no seu banco de dados real.