// ex 01

let changeBckg = document.getElementById('foo')

changeBckg.style.background = '#467997'

//ex 02

let changeLiClass = document.getElementsByClassName('li-group')

Array.from(changeLiClass).forEach(element => {
  element.textContent = "This text was changed on ex02"
});

//ex03

let mainElement = document.querySelector("main")

ex03Button = document.createElement('button')
ex03Button.textContent = "Button Created on ex03"
ex03Button.style.cssText ="width: 200px; height: 50px"

mainElement.appendChild(ex03Button)



