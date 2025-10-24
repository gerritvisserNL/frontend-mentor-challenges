import "./reset.css";
import "./style.css";

// Form
const form = document.querySelector(".form");

// Input
const inputFirstName = document.getElementById("firstname");
const inputLastName = document.getElementById("lastname");
const inputEmail = document.getElementById("email");
const queryInputs = document.querySelectorAll(`input[name="query"]`);
const inputMessage = document.getElementById("message");
const inputCheckbox = document.querySelector(`input[type="checkbox"]`);

// Error
const errorFirstName = document.getElementById("error-firstname");
const errorLastName = document.getElementById("error-lastname");
const errorEmailRequired = document.getElementById("error-email-required");
const errorEmailInvalid = document.getElementById("error-email-invalid");
const errorQuery = document.getElementById("error-query");
const errorMessage = document.getElementById("error-message");
const errorConsent = document.getElementById("error-consent");

// Succes
const successMessage = document.querySelector(".success-message-box");

// Email validation
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
isValidEmail = (email) => emailPattern.test(email.trim());

// Hide all errors
const hideAllErrors = () => {
  [
    errorFirstName,
    errorLastName,
    errorEmailRequired,
    errorQuery,
    errorMessage,
    errorConsent,
  ].forEach((error) => error.classList.remove("show"));

  // Only Email error needs .hidden
  errorEmailInvalid.classList.add("hidden");
};

// Validate form
const validateForm = () => {
  let isValid = true;

  hideAllErrors();
  successMessage.classList.remove("show");

  if (inputFirstName.value.trim() === "") {
    errorFirstName.classList.add("show");
    isValid = false;
  }

  if (inputLastName.value.trim() === "") {
    errorLastName.classList.add("show");
    isValid = false;
  }

  if (inputEmail.value.trim() === "") {
    errorEmailRequired.classList.add("show");
    isValid = false;
  } else if (!isValidEmail(inputEmail.value)) {
    // hide "This field is required" first
    errorEmailRequired.classList.remove("show");
    // show invalid error message
    errorEmailInvalid.classList.remove("hidden");
    isValid = false;
  }

  const isQuerySelected = [...queryInputs].some((radio) => radio.checked);
  if (!isQuerySelected) {
    errorQuery.classList.add("show");
    isValid = false;
  }

  if (inputMessage.value.trim() === "") {
    errorMessage.classList.add("show");
    isValid = false;
  }

  if (!inputCheckbox.checked) {
    errorConsent.classList.add("show");
    isValid = false;
  }

  return isValid;
};
