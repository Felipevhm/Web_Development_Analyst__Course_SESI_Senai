function parOuImpar(){

  let n =  window.prompt('digite aqui um número:')
  n = Number(n);

  let halfNIsInteger = Number.isInteger(n/2);

  let message = halfNIsInteger ? 'par' : 'ímpar';

  window.alert( n + ' é um número ' + message + '.');

}

parOuImpar();