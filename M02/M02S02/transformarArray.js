function transformarArray(array, transformacao) {
  return array.map((item) => {
    return transformacao(item);
  });
}

function dobrar(numero) {
  return numero * 2;
}

let numeros = [1, 2, 3, 4, 5];
console.log(transformarArray(numeros, dobrar)); // [2, 4, 6, 8, 10]
