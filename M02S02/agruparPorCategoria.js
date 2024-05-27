let produtos = [
  { categoria: "eletrônicos", preco: 99.99 },
  { categoria: "livros", preco: 19.99 },
  { categoria: "eletrônicos", preco: 199.99 },
  { categoria: "livros", preco: 29.99 },
  { categoria: "roupas", preco: 49.99 },
];

function agruparPorCategoria() {
  return produtos.reduce((acc, cur) => {
    acc[cur.categoria] = (acc[cur.categoria] || 0) + cur.preco;
    return acc;
  }, {});
}
let output = agruparPorCategoria(produtos)
console.log(output)

//module.exports = agruparPorCategoria;

