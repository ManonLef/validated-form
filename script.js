/* eslint-disable no-use-before-define */
const submit = document.querySelector("button");

// mail validation
// minimum 8 characters
const mail = document.querySelector("#mail");
const mailError = document.querySelector("#mail + span.error");

mail.addEventListener("input", checkMail);

mail.addEventListener("blur", () => {
  if (!mail.checkValidity()) {
    showError("email", "this is a required field");
  }
});

function checkMail() {
  if (mail.checkValidity()) {
    mailError.textContent = "✓ minimum 8 characters in a valid email format";
    mailError.style.color = "green";
    mailError.className = "error";
  } else {
    showError("email", "minimum 8 characters in a valid email format");
  }
}

// zip validation depends on country selection
const zip = document.getElementById("zip");
zip.addEventListener("input", checkZIP);
const zipError = document.querySelector("#zip + span.error");

function checkZIP() {
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
  }
}

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
      pwErrorLength.style.color = "";
      break;
    case "pwNum":
      pwErrorNum.textContent = message;
      pwErrorNum.style.color = "";
      break;
    case "pwUpper":
      pwErrorUppercase.textContent = message;
      pwErrorUppercase.style.color = "";
      break;
    case "confirm":
      pwConfirmError.textContent = message;
      pwConfirmError.style.color = "";
      break;
    default:
      break;
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

function checkPW() {
  password.setCustomValidity(pwConstraint);
  if (pwLengthConstraint.test(password.value)) {
    pwErrorLength.textContent = "✓ minimum of 8 letters or numbers";
    pwErrorLength.style.color = "green";
  } else {
    showError("pwLength", "minimum of 8 letters or numbers");
  }
  if (pwNumConstraint.test(password.value)) {
    pwErrorNum.textContent = "✓ minimum of 1 number";
    pwErrorNum.style.color = "green";
  } else {
    showError("pwNum", "minimum of 1 number");
  }
  if (pwUpperConstraint.test(password.value)) {
    pwErrorUppercase.textContent = "✓ minimum of 1 uppercase letter";
    pwErrorUppercase.style.color = "green";
  } else {
    showError("pwUpper", "minimum of 1 uppercase letter");
  }
  if (pwConstraint.test(password.value)) {
    console.log("match pattern");
    password.setCustomValidity("");
  }
  checkPWconfirm();
}

// confirm email validation
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
    if (event.type === "blur") {
      showError("confirm", "passwords should match");
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
  checkMail();
  checkZIP();
  checkPW();
  checkPWconfirm();
});
