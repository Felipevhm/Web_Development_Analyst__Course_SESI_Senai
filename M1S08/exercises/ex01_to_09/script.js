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

//ex04

pElement = document.querySelector('p')

mainElement.removeChild(pElement)

//ex05

Array.from(changeLiClass).forEach(element => {
  element.style.backgroundColor = "#d082bc"
});

//ex06

let titulo = document.querySelector("h1")

titulo.classList += " font-size-48"
titulo.textContent += " Changed size on ex06"

//ex07

titulo.classList.remove("bkg-gray");

//ex08

inputElement = document.querySelector("input")

inputElement.setAttribute("placeholder", "ex08 new placeholder ") 



