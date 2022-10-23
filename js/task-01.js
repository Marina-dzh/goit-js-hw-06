const refs = {
    categories: document.querySelector('ul'),
    item:document.querySelectorAll('.item'),
}

console.log('Number of categories:', refs.item.length)

for (let i = 0; i < refs.item.length; i+=1) {
    console.log('Category: ', refs.item[i].querySelector('h2').textContent);
    console.log('Elements: ', refs.item[i].querySelectorAll('ul li').length);

}




