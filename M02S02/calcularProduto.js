function calcularProduto(array) {
  return array.reduce((acc, cur) => {
    return acc * Number(cur);
  }, 1);
}

let numeros = [1, 2, 3, 4, 5];
console.log(calcularProduto(numeros)); // 120
