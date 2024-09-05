let pessoas = [
   { nome: 'Alice', idade: 17 },
   { nome: 'Bob', idade: 22 },
   { nome: 'Charlie', idade: 16 },
   { nome: 'David', idade: 19 }
   ];

function filtrarAdultos (array) {
   return array.filter((person)=>{
      return person.idade>=18
   })
};

const adults = filtrarAdultos(pessoas)
console.log(adults)
//module.exports = filtrarPares;