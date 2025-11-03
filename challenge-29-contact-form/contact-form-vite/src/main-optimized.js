import "./reset.css";
import "./style.css";

// Elements
const form = document.querySelector("form");
const successMessage = document.querySelector(".success-message-box");

// Inputs
const inputs = {
  firstName: document.querySelector("#firstname"),
  lastName: document.querySelector("#lastname"),
  email: document.querySelector("#email"),
  query: document.querySelectorAll('input[name="query"]'),
  message: document.querySelector("#message"),
  checkbox: document.querySelector('input[type="checkbox"]'),
};

// Errors
const errors = {
  firstName: document.querySelector("#error-firstname"),
  lastName: document.querySelector("#error-lastname"),
  emailRequired: document.querySelector("#error-email-required"),
  emailInvalid: document.querySelector("#error-email-invalid"),
  query: document.querySelector("#error-query"),
  message: document.querySelector("#error-message"),
  checkbox: document.querySelector("#error-checkbox"),
};

// Email validation
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const isValidEmail = (email) => emailPattern.test(email.trim());

// Hide all errors
const hideAllErrors = () => {
  Object.values(errors).forEach((error) => error.classList.remove("show"));
  errors.emailInvalid.classList.add("hidden");
};

// Generic function to hide error on input/change
const hideErrorOnInput = (input, error, conditionFn) => {
  const eventType =
    input.type === "checkbox" || input.type === "radio" ? "change" : "input";
  input.addEventListener(eventType, () => {
    if (conditionFn()) error.classList.remove("show");
  });
};

// Attach listeners
hideErrorOnInput(
  inputs.firstName,
  errors.firstName,
  () => inputs.firstName.value.trim() !== ""
);
hideErrorOnInput(
  inputs.lastName,
  errors.lastName,
  () => inputs.lastName.value.trim() !== ""
);
hideErrorOnInput(
  inputs.message,
  errors.message,
  () => inputs.message.value.trim() !== ""
);
hideErrorOnInput(
  inputs.checkbox,
  errors.checkbox,
  () => inputs.checkbox.checked
);

// Radio inputs (query)
inputs.query.forEach((radio) =>
  radio.addEventListener("change", () => errors.query.classList.remove("show"))
);

// Email live validation
inputs.email.addEventListener("input", () => {
  const email = inputs.email.value.trim();

  if (email === "") {
    errors.emailInvalid.classList.add("hidden");
  } else if (isValidEmail(email)) {
    errors.emailRequired.classList.remove("show");
    errors.emailInvalid.classList.add("hidden");
  } else {
    errors.emailRequired.classList.remove("show");
    errors.emailInvalid.classList.remove("hidden");
  }
});

// Validate form
const validateForm = () => {
  let isValid = true;
  hideAllErrors();
  successMessage.classList.add("hidden");

  const checks = [
    {
      condition: inputs.firstName.value.trim() === "",
      error: errors.firstName,
    },
    { condition: inputs.lastName.value.trim() === "", error: errors.lastName },
    { condition: inputs.message.value.trim() === "", error: errors.message },
    { condition: !inputs.checkbox.checked, error: errors.checkbox },
    {
      condition: ![...inputs.query].some((r) => r.checked),
      error: errors.query,
    },
  ];

  checks.forEach(({ condition, error }) => {
    if (condition) {
      error.classList.add("show");
      isValid = false;
    }
  });

  const email = inputs.email.value.trim();
  if (email === "") {
    errors.emailRequired.classList.add("show");
    isValid = false;
  } else if (!isValidEmail(email)) {
    errors.emailRequired.classList.remove("show");
    errors.emailInvalid.classList.remove("hidden");
    isValid = false;
  }

  return isValid;
};

// Show success
const showSuccess = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  successMessage.classList.remove("hidden");
  form.reset();

  setTimeout(() => successMessage.classList.add("hidden"), 4000);
};

// Submit form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validateForm()) showSuccess();
});
