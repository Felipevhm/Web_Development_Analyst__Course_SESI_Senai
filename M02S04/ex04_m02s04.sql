-- 1)
select * from clientes where nome like 'A%';

-- 2)
SELECT 
    c.cliente_id,
    c.nome,
    SUM(p.valor) AS valor_total_pedidos
FROM 
    clientes c
INNER JOIN 
    pedidos p ON c.cliente_id = p.cliente_id
GROUP BY 
    c.cliente_id, c.nome;

-- 3) 
SELECT 
    cidade,
    AVG(idade) AS media_idade_por_cidade
FROM 
    clientes 

GROUP BY 
    cidade;


