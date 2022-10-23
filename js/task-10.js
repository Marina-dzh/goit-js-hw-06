
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  boxes: document.querySelector('#boxes'),
  createBtb: document.querySelector('[data-create]'),
  destroyBtb: document.querySelector('[data-destroy]'),
  input: document.querySelector('input'),
  
}

refs.createBtb.addEventListener('click', create);

refs.destroyBtb.addEventListener('click', destroy)

function create(event) {
  event.preventDefault();
  createDiv(refs.input.value);

  refs.createBtb.removeEventListener('click', create)
 
}

function createDiv(amount)
{ let arr = [];
for (let i = 0; i < amount; i += 1){
const div = document.createElement('div');
div.style.width = `${30+10*[i]}px`
div.style.height = `${30+10*[i]}px`
div.style.backgroundColor = getRandomHexColor();
arr.push(div)
  };
  boxes.append(...arr);
};
  
function destroy() {
  refs.boxes.innerHTML = ""
  refs.input.value = "";
  refs.createBtb.addEventListener('click', create);

}

