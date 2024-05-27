let confirma = true;
let carros = [];

while (confirma) {
    let carro = {};
    carro.modelo = prompt("Digite o modelo do carro:");
    carro.marca = prompt("Digite a marca do carro:");
    carro.ano = prompt("Digite o ano do carro:");
    carro.cor = prompt("Digite a cor do carro:");
    
    carros.push(carro);
    
    confirma = confirm("Deseja cadastrar outro carro?");
}

for (let i = 0; i < carros.length; i++) {
    console.log(`Carro ${i+1}:`);
    console.log(`Modelo: ${carros[i].modelo}`);
    console.log(`Marca: ${carros[i].marca}`);
    console.log(`Ano: ${carros[i].ano}`);
    console.log(`Cor: ${carros[i].cor}`);
    console.log('-------------------------');
}
