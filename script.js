/* eslint-disable no-use-before-define */
const submit = document.querySelector("button");

// mail validation
// minimum 8 characters + valid format
const mail = document.querySelector("#mail");
const mailError = document.querySelector("#mail + span.error");

mail.addEventListener("input", checkMail);
mail.addEventListener("blur", checkMail);

function checkMail(event) {
  if (mail.checkValidity()) {
    mailError.textContent = "✓ minimum 8 characters in a valid email format";
    mailError.style.color = "green";
    mailError.className = "error";
  } else if (!event || event.type === "blur") {
    showError("email", "this is a required field");
    mailError.style.color = "red";
    mail.classList.add("invalid");
  } else if (event.type === "input") {
    showError("email", "minimum 8 characters in a valid email format");
  }
}

// zip validation depends on country selection
// use regex for country requirements
const zip = document.getElementById("zip");
zip.addEventListener("input", checkZIP);
zip.addEventListener("blur", checkZIP);
const zipError = document.querySelector("#zip + span.error");

function checkZIP(event) {
  const constraints = {
    ch: ["^(CH-)?\\d{4}$", "CH: 4 digits: e.g. CH-1950 or 1950"],
    fr: ["^(F-)?\\d{5}$", "FR: 5 digits: e.g. F-75012 or 75012"],
    de: ["^(D-)?\\d{5}$", "DE: 5 digits: e.g. D-12345 or 12345"],
    nl: [
      "^(NL-)?\\d{4}\\s*([A-RT-Z][A-Z]|S[BCE-RT-Z])$",
      "NL: 4 digits, followed by 2 letters except SA, SD and SS",
    ],
  };

  const country = document.getElementById("country").value;
  const constraint = new RegExp(constraints[country][0], "");
  const constraintGuide = constraints[country][1];

  if (constraint.test(zip.value)) {
    zipError.textContent = `✓ ${constraintGuide}`;
    zipError.style.color = "green";
    zip.setCustomValidity("");
  } else {
    zip.setCustomValidity(constraints[country][0]);
    showError("zip", constraintGuide);
    if (!event || event.type === "blur") {
      zipError.style.color = "red";
      zip.classList.add("invalid");
    }
  }
}

// password validation
const password = document.getElementById("password");
const pwConstraint = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}/;
const pwErrorLength = document.querySelector("span.error-length");
const pwLengthConstraint = /[A-Za-z\d]{8,}/;
const pwErrorUppercase = document.querySelector("span.error-uppercase");
const pwUpperConstraint = /^(?=.*[A-Z])/;
const pwErrorNum = document.querySelector("span.error-number");
const pwNumConstraint = /^(?=.*\d)/;

password.addEventListener("input", checkPW);
password.addEventListener("focus", checkPW);
password.addEventListener("blur", checkPW);

function checkPW(event) {
  password.setCustomValidity(pwConstraint);
  if (pwLengthConstraint.test(password.value)) {
    pwErrorLength.textContent = "✓ minimum of 8 letters or numbers";
    pwErrorLength.style.color = "green";
  } else {
    showError("pwLength", "minimum of 8 letters or numbers");
    if (!event || event.type === "blur") {
      pwErrorLength.style.color = "red";
    }
  }
  if (pwNumConstraint.test(password.value)) {
    pwErrorNum.textContent = "✓ minimum of 1 number";
    pwErrorNum.style.color = "green";
  } else {
    showError("pwNum", "minimum of 1 number");
    if (!event || event.type === "blur") {
      pwErrorNum.style.color = "red";
    }
  }
  if (pwUpperConstraint.test(password.value)) {
    pwErrorUppercase.textContent = "✓ minimum of 1 uppercase letter";
    pwErrorUppercase.style.color = "green";
  } else {
    showError("pwUpper", "minimum of 1 uppercase letter");
    if (!event || event.type === "blur") {
      pwErrorUppercase.style.color = "red";
      password.classList.add("invalid");
    }
  }
  if (pwConstraint.test(password.value)) {
    password.setCustomValidity("");
  }
}

// confirm password validation
const pwConfirm = document.getElementById("password-confirm");
const pwConfirmError = document.querySelector("#password-confirm + span.error");

function checkPWconfirm(event) {
  if (
    password.value === pwConfirm.value &&
    pwConstraint.test(pwConfirm.value)
  ) {
    pwConfirm.setCustomValidity("");
    pwConfirmError.textContent = "✓ passwords match";
    pwConfirmError.style.color = "green";
  } else {
    pwConfirm.setCustomValidity(password.value === pwConfirm);
    if (!event || event.type === "blur") {
      showError("confirm", "passwords should match");
      pwConfirm.classList.add("invalid");
      pwConfirmError.style.color = "red";
    } else {
      showError("confirm", "confirm your password");
    }
  }
}

pwConfirm.addEventListener("input", checkPWconfirm);
pwConfirm.addEventListener("blur", checkPWconfirm);

// submit validation
submit.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(mail.checkValidity());
  checkMail();
  console.log(zip.checkValidity());
  checkZIP();
  console.log(password.checkValidity());
  checkPW();
  console.log(pwConfirm.checkValidity());
  checkPWconfirm();
});

// multi validation error span message
function showError(element, message) {
  switch (element) {
    case "email":
      mailError.textContent = message;
      mailError.style.color = "";
      break;
    case "zip":
      zipError.textContent = message;
      zipError.style.color = "";
      break;
    case "pwLength":
      pwErrorLength.textContent = message;
      break;
    case "pwNum":
      pwErrorNum.textContent = message;
      break;
    case "pwUpper":
      pwErrorUppercase.textContent = message;
      break;
    case "confirm":
      pwConfirmError.textContent = message;
      pwConfirmError.style.color = "";
      break;
    default:
      break;
  }
}
