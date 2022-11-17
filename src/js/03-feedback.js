import Throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', Throttle(onForm, 500));
form.addEventListener('submit', onSubmitButton);

dataFromLocalStorage();
let feedbackForm = {};
function onForm(event) {
   
    const { name, value } = event.target;
    feedbackForm[name] = value;
    localStorage.setItem('feedback-form-state', JSON.stringify(feedbackForm));
};

function onSubmitButton(event) {
    event.preventDefault();
    console.log(feedbackForm);
    form.reset();
    localStorage.removeItem('feedback-form-state');
    
};

function dataFromLocalStorage() {
    const dataLocalStorage = JSON.parse(localStorage.getItem('feedback-form-state'));
      if (dataLocalStorage) {
          Object.entries(dataLocalStorage).forEach(([name,value]) =>{ 
            form.elements[name].value = value;})
       
    };

};
