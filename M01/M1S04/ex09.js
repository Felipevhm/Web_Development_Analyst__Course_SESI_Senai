let userChoice = window.prompt(
  `
  IR 2024 - ALÍQUOTA DO IMPOSTO DE RENDA POR PRÇO BASE
  
  ----------------------------------------
  Digite a opção na qual você se enquadra:
  ----------------------------------------

  (1) | Até R\$ 2.259,20
  (2) | De R\$ 2.259,21 até R\$ 2.828,65
  (3) | De R\$ 2.828,66 até R\$ 3.751,05
  (4) | De R\$ 3.751,06 até R\$ 4.664,68
  (5) | Acima de R\$ 4.664,68
 
  `
)

userChoice = Number(userChoice)

let message;

switch (userChoice) {
  case 1:{
    message = 'Alíquota:\n ISENTO'

    console.log(message)
    alert(message)
  break;
}

  case 2:{
    message = 'Alíquota:\n 7,5%' 
    console.log(message)
    alert(message)
    break;
  }

  case 3:{
    message = 'Alíquota:\n 15%' 
    console.log(message)
    alert(message)
    break;
  }

  case 4:{
    message = 'Alíquota:\n 22,5%'
    console.log(message)
    alert(message)
    break;
  }

  case 5:{
    message = 'Alíquota:\n 27,5%' 
    console.log(message)
    alert(message)
    break;
  }

  default:{
    message = 'Opção inválida. Tente novamente.'
    console.log(message)
    alert(message)
    break;
  }



}