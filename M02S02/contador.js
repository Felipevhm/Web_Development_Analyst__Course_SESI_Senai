function contador() {
  let count = 0;
  return function () {
    return (count += 1);
  };
}

console.log("\nContador 1:");
let contador1 = contador();
console.log(contador1()); // 1
console.log(contador1()); // 2
console.log(contador1()); // 3

console.log("Contador 2:");
let contador2 = contador();
console.log(contador2()); // 1
console.log(contador2()); // 2
