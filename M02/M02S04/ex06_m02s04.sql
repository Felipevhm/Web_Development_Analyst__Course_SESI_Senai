--  1. Encontre o total de itens pedidos em cada mês.
SELECT DATE_PART('month', p.data_pedido) AS month,
	sum(ip.quantidade) AS soma
FROM pedidos p
INNER JOIN itens_pedidos ip ON p.pedido_id = ip.pedido_id
GROUP BY DATE_PART('month', p.data_pedido)
ORDER BY soma DESC;

--  2. Liste os clientes que não têm pedidos associados.
SELECT c.cliente_id, c.nome, p.pedido_id
FROM clientes c
LEFT JOIN pedidos p ON c.cliente_id = p.cliente_id
WHERE p.pedido_id IS NULL

--  3. Encontre o pedido de maior valor.
SELECT pedido_id, cliente_id, data_pedido, valor
FROM pedidos
ORDER BY valor DESC
LIMIT 1;

--  4. Encontre o total de itens pedidos para cada produto.
SELECT 
    p.produto_id,
    p.nome_produto,
    SUM(ip.quantidade) AS total_itens
FROM 
    produtos p
INNER JOIN 
    itens_pedidos ip ON p.produto_id = ip.produto_id
GROUP BY 
    p.produto_id,
    p.nome_produto
ORDER BY 
    total_itens DESC;

--  5. Calcule a soma dos valores dos pedidos para cada cliente
--   que tenha feito mais de um pedido.
SELECT c.cliente_id, c.nome, SUM(valor) AS total_valor
FROM pedidos p
INNER JOIN clientes c ON c.cliente_id = p.cliente_id
GROUP BY c.cliente_id
HAVING COUNT(pedido_id) > 1;

--  6. Encontre o preço médio dos produtos em cada categoria.
SELECT categoria_id, avg(preco) from produtos
group by categoria_id;


-- 7. Encontre o cliente que fez o pedido de maior valor.
SELECT p.pedido_id, p.cliente_id, c.nome, p.valor as maior_valor
FROM pedidos p 
INNER JOIN 	clientes c ON p.cliente_id = c.cliente_id
ORDER BY valor DESC
LIMIT 1;