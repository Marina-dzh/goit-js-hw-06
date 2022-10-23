const refs = {
    sizeController: document.querySelector('#font-size-control'),
    text: document.querySelector('#text')
}

refs.sizeController.addEventListener('input', changeFontSize)

function changeFontSize() {
   
    refs.text.style.fontSize = `${Number(refs.sizeController.value)}px` 

}
