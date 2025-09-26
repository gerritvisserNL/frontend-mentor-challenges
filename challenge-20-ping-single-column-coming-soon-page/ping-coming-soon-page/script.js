const form = document.getElementById("email-form");
const inputWrapper = document.getElementById("input-wrapper");
const emailInput = document.getElementById("email");
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const succesMsg = document.querySelector(".succes-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!emailPattern.test(emailInput.value.trim()) || emailInput.value === "") {
    inputWrapper.classList.add("error");
    form.classList.add("form-error-margin-bottom");
    succesMsg.classList.remove("active");
  } else {
    form.classList.remove("form-error-margin-bottom");
    succesMsg.classList.add("active");
    emailInput.value = "";
  }
});

emailInput.addEventListener("input", (event) => {
  if (emailPattern.test(emailInput.value.trim())) {
    inputWrapper.classList.remove("error");
    form.classList.remove("form-error-margin-bottom");
  }

  if (emailInput.value === "") {
    inputWrapper.classList.remove("error");
    form.classList.remove("form-error-margin-bottom");
  }

  if (event) {
    succesMsg.classList.remove("active");
  }
});
