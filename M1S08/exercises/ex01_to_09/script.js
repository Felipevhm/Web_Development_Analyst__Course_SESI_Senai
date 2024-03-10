// ex 01

let changeBckg = document.getElementById('foo')

changeBckg.style.background = '#467997'

//ex 02

let changeLiClass = document.getElementsByClassName('li-group')

Array.from(changeLiClass).forEach(element => {
  element.textContent = "This text was changed on ex02"
});