let products = 
[
{code: 1, name:'strawberry', price: 1 },
{code: 2, name:'oat', price: 2 },
{code: 3, name:'juice', price: 1.5 }
]

boughtProducts = []


let outputLabel = document.querySelector('label');
let input = document.getElementById('input-product')

function checkPrice() {
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
let foundElement = products.find(product => product.code === Number(input.value) || product.name === input.value);
let tempArray = []

if (foundElement) {
  boughtProducts.push(foundElement)
  boughtProducts.forEach(object => 
    {
    tempArray.push(`{${object.name}, \$${object.price}}`)
    }
  )
  alert(`Product purchased!\n\n ${tempArray}`);
  }
  else{
    alert(`Product Not Found.\n\n`)
  }
  //ex 05
let totalText = document.querySelector('p')
totalText.textContent ="Total: \$" + String(calculateTotal(boughtProducts))

// ex06
let itemsCount = document.querySelector('#items-count')
let objectsCount = 0
boughtProducts.forEach(object =>{
    objectsCount += 1
})
itemsCount.textContent = "Items: " + objectsCount

}

function checkCart() {

  let total = calculateTotal(boughtProducts)


  if (total === 0){
    alert(`The cart is empty`)
  }
  else{
    alert(`The total is \$${total}`)
  }

}

function calculateTotal(boughtProducts) {
  let total = 0
  boughtProducts.forEach(object =>{
    total += object.price
  })

  return total

}