
const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');

const LOCALSTORAGE_KEY = "feedback-form-state";

let userData = {}

const throttleFn = throttle(handleSubmit, 500)

initForm()

form.addEventListener('submit', throttleFn)

function handleSubmit (event) {
    event.preventDefault()
  
    const formData = new FormData(form)
    formData.forEach((value, name) => { userData[name] = value })
    console.log(userData);
    event.currentTarget.reset()
    localStorage.removeItem(LOCALSTORAGE_KEY)
    userData = {}
   
}

form.addEventListener('input', handleInput)

function handleInput (event) {
    userData[event.target.name] = event.target.value
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(userData));
}

function initForm() {
    let persistedData = localStorage.getItem(LOCALSTORAGE_KEY)
    if (persistedData) {
        persistedData = JSON.parse(persistedData)
        Object.entries(persistedData).forEach(([name, value]) => {
            userData[name] = value
            form.elements[name].value = value
        })
}
}