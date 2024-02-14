const soma = (numA,numB)=>{
  return Number(numA) + Number(numB);
}

let numA = 1;
let numB = 3;

console.log('num A é: ' + numA);
console.log('num B é: ' + numB);
console.log(`${numA} + ${numB} == ${soma(numA,numB)}`);