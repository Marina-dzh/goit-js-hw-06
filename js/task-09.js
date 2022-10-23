function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  body: document.querySelector('body'),
 changeCol : document.querySelector('.change-color') 
}

refs.changeCol.addEventListener('click', changeColor);

function changeColor() {
  refs.body.style.backgroundColor=getRandomHexColor()
}

