
const refs = {
    form: document.querySelector('.login-form')
}
refs.form.addEventListener('submit', submitForm);

function submitForm(event) {
    event.preventDefault();
    const {
        email,
        password
    } = event.currentTarget.elements;
    if (email.value == 0 || password.value == 0) {
        alert ('Всі поля повинні бути заповнені!')
    } else {
    
     const data = {
        email : email.value,
        password :password.value
    }
    console.log(data)
    }
event.currentTarget.reset()
}

// console.log(`Email: ${email.value}, Password:${password.value}`);