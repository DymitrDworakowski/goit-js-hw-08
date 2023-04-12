// import throttle from 'lodash.throttle';
// const form = document.querySelector(".feedback-form");

// form.addEventListener("submit", throttle(handleSubmit, 500));

// function handleSubmit(event) {
//     event.preventDefault();
// let LOCALSTORAGE_KEY = {
//     "email": form.elements.email.value,
//     "message": form.elements.message.value
// };
//     console.log(LOCALSTORAGE_KEY);
// localStorage.setItem("feedback-form-state", JSON.stringify(LOCALSTORAGE_KEY));
// form.reset();
// }

import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const feedback = JSON.parse(localStorage.getItem("feedback-form-state")) || {};

form.elements.email.value = feedback.email || "";
form.elements.message.value = feedback.message || "";

form.addEventListener("input",throttle(event => {
    const LOCALSTORAGE_KEY = {
    email: form.elements.email.value,
    message: form.elements.message.value
    };
    localStorage.setItem("feedback-form-state", JSON.stringify(LOCALSTORAGE_KEY));
}, 500)
);

form.addEventListener("submit", event => {
event.preventDefault();
const LOCALSTORAGE_KEY = {
    email: "",
    message: ""
};
localStorage.setItem("feedback-form-state", JSON.stringify(LOCALSTORAGE_KEY));
console.log({
    email: form.elements.email.value,
    message: form.elements.message.value
});
form.reset();
});