let obj1 = {
  nome : 'Carlos',
  idade : 23,
  nacionalidade : 'Brasileiro' ,
  profissao : 'Carpinteiro'
}

let obj2 = {
  nome : 'Luana',
  idade : 53,
  nacionalidade : 'Chilena' ,
  profissao : 'Costureira'
}

let obj3 = {
  nome : 'Fernando',
  idade : 55,
  nacionalidade : 'Cubano' ,
  profissao : 'Médico'
}

let objetos = [obj1, obj2, obj3]

for (let i=0; i<3;i++){
  console.log(
    ` _ Objeto ${i+1}\n\n
    Nome            :    ${objetos[i].nome}
    Idade           :    ${objetos[i].idade}
    Nacionalidade   :    ${objetos[i].nacionalidade}
    Profissão       :    ${objetos[i].profissao}
    `   
    )
}