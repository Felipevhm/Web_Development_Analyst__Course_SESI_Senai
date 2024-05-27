let n = prompt("Digite um Número:")
let outputMessage

console.log('n é: ' + n )

if (n<0){
  outputMessage = 'n é um número negativo';
  
  console.log(outputMessage);
  window.alert(outputMessage);
}

  else if (n>0){
    outputMessage = 'n é um número positivo';
    
    console.log(outputMessage);
    window.alert(outputMessage);
  }

  else if (n==='0'){
    outputMessage = 'n é zero';
    
    console.log(outputMessage);
    window.alert(outputMessage);
  }
  else{
    outputMessage = 'O número digitado não é válido.';
    
    console.log(outputMessage);
    window.alert(outputMessage);
  }

