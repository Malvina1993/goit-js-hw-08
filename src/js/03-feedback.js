import throttle from "lodash.throttle";

const formEl = document.querySelector('form');

formEl.addEventListener('input', throttle(onLabelInput, 500));
autoFillForm();

formEl.addEventListener('submit', onFormSubmin);

function onLabelInput(event) {
   
    localStorage.setItem("feedback-form-state", valueEmailAndMessage(event));
};


function valueEmailAndMessage(event) {
    return (`{"email": "${event.currentTarget.elements.email.value}", "message": "${event.currentTarget.elements.message.value}"}`);
  
}

function autoFillForm() {
    if (!localStorage.getItem("feedback-form-state")) {
        return;
    };
    const formDate = JSON.parse(localStorage.getItem("feedback-form-state"));
    
    formEl.elements.email.value = formDate.email;
    formEl.elements.message.value = formDate.message;

}

function onFormSubmin(event) {
    event.preventDefault();

    if ((event.currentTarget.elements.email.value === '') || (event.currentTarget.elements.message.value === '')) {
        
        alert('Заповніть дані форми');
        return;
        
    };
    console.log(JSON.parse(localStorage.getItem("feedback-form-state")));

    localStorage.removeItem("feedback-form-state");
    event.currentTarget.elements.email.value = '';
    event.currentTarget.elements.message.value = '';
}

