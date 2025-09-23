const form = document.getElementById("claim-form");

const firstNameInput = document.getElementById("firstname");
const firstNameWrapper = document.getElementById("firstname-wrapper");

const lastNameInput = document.getElementById("lastname");
const lastNameWrapper = document.getElementById("lastname-wrapper");

const emailInput = document.getElementById("email");
const emailWrapper = document.getElementById("email-wrapper");

const passwordInput = document.getElementById("password");
const passwordWrapper = document.getElementById("password-wrapper");

const error = document.getElementById("error");
const errorIcon = document.getElementById("error-icon");
const succesMsg = document.querySelector(".succes-message");

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Form validation
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let hasError = false;

  if (firstNameInput.value.trim() === "") {
    firstNameWrapper.classList.add("error");
    hasError = true;
  } else {
    firstNameWrapper.classList.remove("error");
  }

  if (lastNameInput.value.trim() === "") {
    lastNameWrapper.classList.add("error");
    hasError = true;
  } else {
    lastNameWrapper.classList.remove("error");
  }

  if (!emailPattern.test(emailInput.value.trim())) {
    emailWrapper.classList.add("error");
    hasError = true;
  } else {
    emailWrapper.classList.remove("error");
  }

  if (passwordInput.value.trim() === "") {
    passwordWrapper.classList.add("error");
    hasError = true;
  } else {
    passwordWrapper.classList.remove("error");
  }

  if (!hasError) {
    succesMsg.style.display = "block";
    form.reset();
  } else {
    succesMsg.style.display = "none";
  }
});

/* remove error-message when input is not empty */
firstNameInput.addEventListener("input", () => {
  if (firstNameInput.value.trim() !== "") {
    firstNameWrapper.classList.remove("error");
  }
});

lastNameInput.addEventListener("input", () => {
  if (lastNameInput.value.trim() !== "") {
    lastNameWrapper.classList.remove("error");
  }
});

emailInput.addEventListener("input", () => {
  if (emailPattern.test(emailInput.value.trim())) {
    emailWrapper.classList.remove("error");
  }
});

passwordInput.addEventListener("input", () => {
  if (passwordInput.value.trim() !== "") {
    passwordWrapper.classList.remove("error");
  }
});
