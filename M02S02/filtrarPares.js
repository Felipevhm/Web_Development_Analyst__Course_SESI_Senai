let array = [1,2,3,4,5,6,7,8,9,10]

function filtrarPares (array) {
   return array.filter((number)=>{
      return number%2===0
   })
};

const newArray = filtrarPares(array)
console.log(newArray)
//module.exports = filtrarPares;