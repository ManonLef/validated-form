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

function showError(element) {
  switch (element) {
    case "email" :
      mailError.textContent = "\u00A0 \u00A0 minimum 8 characters in a valid email format";
      break;
    default :
      break;
    }
  }
