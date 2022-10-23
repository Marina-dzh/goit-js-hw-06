
let counterValue = {
    value: 0,
    increment() {
        this.value += 1
    },
    decrement() {
        this.value -= 1
    },
};


const up = document.querySelector('button[data-action="increment"]');
const down = document.querySelector('button[data-action="decrement"]');
const value = document.querySelector('#value');

up.addEventListener('click', function () {
    counterValue.increment();
    value.textContent = counterValue.value;
    console.log(counterValue.value)
});

down.addEventListener('click', function () {
    counterValue.decrement();
    value.textContent = counterValue.value;
    console.log(value.textContent)
})