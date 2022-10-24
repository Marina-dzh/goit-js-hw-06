function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  body: document.querySelector('body'),
  changeCol: document.querySelector('.change-color'),
 colorText: document.querySelector('.color')
}

refs.changeCol.addEventListener('click', changeColor);

function changeColor() {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.colorText.textContent = refs.body.style.backgroundColor
}

