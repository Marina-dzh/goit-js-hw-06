const refs = {
    input: document.querySelector('#validation-input')
    
}
refs.input.addEventListener('blur', checkValid)

console.log(refs.input.value.length)
console.log(refs.input.dataset.length)

function checkValid() {
    console.log(refs.input.value.length);
    if (refs.input.value.length == refs.input.dataset.length) {
        refs.input.classList.add('valid');
        refs.input.classList.remove('invalid')
    } else {
        refs.input.classList.remove('valid');
        refs.input.classList.add('invalid')
        
    }
 }