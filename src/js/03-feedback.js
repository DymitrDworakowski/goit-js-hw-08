import throttle from 'lodash.throttle';
const form = document.querySelector(".feedback-form");

form.addEventListener("submit", throttle(handleSubmit, 500));

function handleSubmit(event) {
    event.preventDefault();
let LOCALSTORAGE_KEY = {
    "email": form.elements.email.value,
    "message": form.elements.message.value
};
    console.log(LOCALSTORAGE_KEY);
localStorage.setItem("feedback-form-state", JSON.stringify(LOCALSTORAGE_KEY));
form.reset();
}



// localStorage.setItem(LOCALSTORAGE_KEY, form.elements.message.value );
// localStorage.setItem(LOCALSTORAGE_KEY, form.elements.email.textContent);

//   form.reset();
    
//   if (email.value === "" || massage.value === "") {
//     return console.log("Поле не може бути пустим!");
//   }

//   console.log(`Email: ${email.value}, Massage: ${massage.value}`);
//   event.currentTarget.reset();

//   elements: { username, password }
//   } = event.currentTarget;

// const settings = {
//   theme: "dark",
//   isAuthenticated: true,
//   options: [1, 2, 3],
// };

// localStorage.setItem("settings", JSON.stringify(settings));