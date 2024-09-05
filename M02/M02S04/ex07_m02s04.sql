-- 1) Encontre a média de idade dos clientes
-- que têm pedidos com valor total superior a 300,00.
SELECT AVG(c.idade) AS media_idade
FROM clientes c
JOIN (
    SELECT p.cliente_id
    FROM pedidos p
    GROUP BY p.cliente_id
    HAVING SUM(p.valor) > 300.00
) subquery ON c.cliente_id = subquery.cliente_id;

-- 2)Liste todos os produtos que foram pedidos mais de uma vez.
SELECT p.nome_produto as produto_pedido_mais_de_uma_vez,p.produto_id,p.preco
FROM produtos p
WHERE p.produto_id IN (
    SELECT ip.produto_id
    FROM itens_pedidos ip
    GROUP BY ip.produto_id HAVING COUNT(*) > 1
);
