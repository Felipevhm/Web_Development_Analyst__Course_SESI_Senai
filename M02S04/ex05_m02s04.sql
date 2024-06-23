-- 1)
SELECT c.cliente_id,c.nome, c.cidade, c.idade, 
	p.pedido_id, p.cliente_id, p.data_pedido, p.valor
FROM clientes c
INNER JOIN pedidos p ON c.cliente_id = p.cliente_id;

-- 2)
SELECT c.cliente_id,c.nome, c.cidade, c.idade, 
	p.pedido_id, p.cliente_id, p.data_pedido, p.valor
FROM clientes c
LEFT JOIN pedidos p ON c.cliente_id = p.cliente_id;

-- 3)
SELECT 
    p.produto_id,
    p.nome_produto AS nome_produto,
    ip.item_id,
    ip.quantidade,
    p.preco
FROM 
    produtos p
RIGHT JOIN 
    itens_pedidos ip ON p.produto_id = ip.produto_id;

-- 4)
SELECT 
    cliente_id,
    nome,
    cidade
FROM 
    clientes
WHERE 
    cidade = 'São Paulo'

UNION

SELECT 
    cliente_id,
    nome,
    cidade
FROM 
    clientes
WHERE 
    cidade = 'Rio de Janeiro';