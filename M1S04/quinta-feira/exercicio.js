// https://gist.github.com/yanestevesufjf/bc3e3de5f3980545dc12375d48a5da2a


let produtos = [

  {
    name      :'arroz',
    reference : '4444',
    price     : 3.99
  }
  ,
  
{
  name      :'feijao',
  reference : '8888',
  price     : 5.99
}
,
{
  name      :'batata-pacote',
  reference : '9999',
  price     : 10.99
}
];
function consultaPreco(userQuery){ 
  switch (userQuery) {

    case '4':
    case 'arroz': {
    return `o preço do(a) ${produtos[0].name} é R\$ ${produtos[0].price}`
    
    }

    case '8':
    case 'feijao': {
      return `o preço do(a) ${produtos[1].name} é R\$ ${produtos[1].price}`
      }
    
    case '9':
    case 'batata-pacote': {
      return `o preço do(a) ${produtos[2].name} é R\$ ${produtos[2].price}`
    }

    default:{
      return 'item não identificado'
    }
  }
}
function updateh4(event){
  h4Output = document.getElementById('h4-output')
  inputText = document.getElementById('input-text');

  console.log('Código digitado: ' + inputText.value)

  let preco = consultaPreco(inputText.value);
  
  console.log('Consulta preco: ' + preco);
  h4Output.innerText = preco;

}





