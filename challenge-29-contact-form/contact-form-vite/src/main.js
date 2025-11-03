import "./reset.css";
import "./style.css";

// Form
const form = document.querySelector("form");

// Inputs
const inputFirstName = document.querySelector("#firstname");
const inputLastName = document.querySelector("#lastname");
const inputEmail = document.querySelector("#email");
const queryInputs = document.querySelectorAll('input[name="query"]');
const inputMessage = document.querySelector("#message");
const inputCheckbox = document.querySelector('input[type="checkbox"]');

// Errors
const errorFirstName = document.querySelector("#error-firstname");
const errorLastName = document.querySelector("#error-lastname");
const errorEmailRequired = document.querySelector("#error-email-required");
const errorEmailInvalid = document.querySelector("#error-email-invalid");
const errorQuery = document.querySelector("#error-query");
const errorMessage = document.querySelector("#error-message");
const errorCheckbox = document.querySelector("#error-checkbox");

// Success
const successMessage = document.querySelector(".success-message-box");

// Email validation
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const isValidEmail = (email) => emailPattern.test(email.trim());

const hideAllErrors = () => {
  [
    errorFirstName,
    errorLastName,
    errorEmailRequired,
    errorQuery,
    errorMessage,
    errorCheckbox,
  ].forEach((error) => error.classList.remove("show"));

  // Only error-email-invalid needs .hidden
  errorEmailInvalid.classList.add("hidden");
};

// hide error on input
inputFirstName.addEventListener("input", () => {
  if (inputFirstName.value.trim() !== "") {
    errorFirstName.classList.remove("show");
  }
});

inputLastName.addEventListener("input", () => {
  if (inputLastName.value.trim() !== "") {
    errorLastName.classList.remove("show");
  }
});

inputEmail.addEventListener("input", () => {
  const email = inputEmail.value.trim();

  if (email === "") {
    errorEmailInvalid.classList.add("hidden");
  } else if (isValidEmail(email)) {
    errorEmailRequired.classList.remove("show");
    errorEmailInvalid.classList.add("hidden");
  } else {
    errorEmailRequired.classList.remove("show");
    errorEmailInvalid.classList.remove("hidden");
  }
});

inputMessage.addEventListener("input", () => {
  if (inputMessage.value.trim() !== "") {
    errorMessage.classList.remove("show");
  }
});

queryInputs.forEach((radio) => {
  radio.addEventListener("change", () => {
    errorQuery.classList.remove("show");
  });
});

inputCheckbox.addEventListener("change", () => {
  if (inputCheckbox.checked) {
    errorCheckbox.classList.remove("show");
  }
});

// Validate form
const validateForm = () => {
  let isValid = true;

  hideAllErrors();
  successMessage.classList.add("hidden");

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
    errorCheckbox.classList.add("show");
    isValid = false;
  }

  return isValid;
};

// Show Success Message
const showSuccess = () => {
  // Scroll to top
  window.scrollTo({ top: 0, behavior: "smooth" });

  successMessage.classList.remove("hidden");
  form.reset();

  setTimeout(() => {
    successMessage.classList.add("hidden");
  }, 4000);
};

// Send Form
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formIsValid = validateForm();

  if (formIsValid) showSuccess();
});
