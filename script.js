/* eslint-disable no-use-before-define */
const form = document.querySelector("form");
const submit = document.querySelector("button");

submit.addEventListener("click", (event) => {
  event.preventDefault()
})

// test function, delete when done
if (!form.checkValidity()) {
  const button = document.querySelector("button");
  button.style.color = "red";
}

// mail validation
// minimum 8 characters
const mail = document.querySelector("#mail");
const mailError = document.querySelector("#mail + span.error");

mail.addEventListener("input", () => {
  if (mail.checkValidity()) {
    mailError.textContent = "✓ minimum 8 characters in a valid email format";
    mailError.style.color = "green"
    mailError.className = "error";
  } else {
    showError("email");
  }
});

mail.addEventListener("blur", () => {
  if (!mail.checkValidity()) {
    mail.style.border = "2px solid red"
    showError("email")
  }
})


// multi validation error span message
function showError(element) {
  switch (element) {
    case "email" :
      mailError.textContent = "minimum 8 characters in a valid email format";
      break;
    default :
      break;
    }
  }

