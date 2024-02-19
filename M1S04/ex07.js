let fullDate = new Date();
let h        = fullDate.getHours();
let message;

// //  05 <   dia    <= 12
// //  12 <   tarde  <= 18
// //  18 <   noite  <=  5 


if (h == null){
message ='Valor não recebido. Recarrege a página.';

console.log(message)
window.alert(message)
}

else if(5<h && h<=12){
  message = 'Bom dia!'

  console.log(message)
  window.alert(message)
}

else if(12<h && h<=18){
  message = 'Boa tarde!'

  console.log(message)
  window.alert(message)
}

else if(h<=5 || h > 18){
  message = 'Boa noite!'

  console.log(message)
  window.alert(message)
}

else{
  message = 'Hora inválida. Tente novamente.'

  console.log(message)
  window.alert(message)
}


