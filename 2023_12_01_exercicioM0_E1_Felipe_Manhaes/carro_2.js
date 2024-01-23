const prompt = require(`prompt-sync`)();
let carros = [];
while (true) {
    let carro = {};
    carro.id = Number(carros.length+1);
    carro.modelo = prompt(`Digite o modelo do carro ${Number(carros.length)+1}: `);
    carro.marca = prompt(`Digite a marca do carro: ${Number(carros.length)+1}: `);
    carro.ano = prompt(`Digite o ano do carro: ${Number(carros.length)+1}: `);
    carro.cor = prompt(`Digite a cor do carro: ${Number(carros.length)+1}: `);
    carro.placa = prompt(`Digite a placa do carro: ${Number(carros.length)+1}: `);

    carros.push(carro);
    
    let confirma = prompt(`Deseja cadastrar outro carro? (s/n) `);
    if (confirma.toLowerCase() !== `s`) {
        break;
    }
    console.log(``);
}

console.log(carros);
