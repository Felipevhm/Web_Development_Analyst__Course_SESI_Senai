let products = 
[
{code: 1, name:'strawberry', price: 1 },
{code: 2, name:'oat', price: 2 },
{code: 3, name:'juice', price: 1.5 }
]

let outputLabel = document.querySelector('label');

function checkPrice() {
let input = document.getElementById('input-product')

let foundElement = products.find(product => product.code === Number(input.value) || product.name === input.value);
// console.log ("foundElement é: " + foundElement)
if(foundElement){
    
    outputLabel.textContent =`Code #${foundElement.code} | ${foundElement.name}: $` + foundElement.price
    console.log (outputLabel.textContent)  
  }
else{
  outputLabel.textContent ="NOT FOUND"
  console.log ("Product not found.")
}
}

function buyProduct() {
  // Add your code here to buy the product
  alert('Product purchased!');
}