const form = document.getElementById("email-form");
const inputWrapper = document.getElementById("input-wrapper");
const emailInput = document.getElementById("email");
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const succesMsg = document.querySelector(".succes-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!emailPattern.test(emailInput.value.trim())) {
    inputWrapper.classList.add("error");
  } else {
    succesMsg.classList.remove("hidden");
    emailInput.value = "";
  }
});

emailInput.addEventListener("input", (event) => {
  if (emailPattern.test(emailInput.value.trim())) {
    inputWrapper.classList.remove("error");
  }

  if (emailInput.value === "") {
    inputWrapper.classList.remove("error");
  }

  if (event) {
    succesMsg.classList.add("hidden");
  }
});

// classList add/remove. Een classname geef je door zonder (.) punt
// Een punt gebruik je alleen in CSS-selectors. bijv. querySelector(".succes-message");
// submitBtn.style.removeProperty("padding") werkt alleen bij inline-css.
