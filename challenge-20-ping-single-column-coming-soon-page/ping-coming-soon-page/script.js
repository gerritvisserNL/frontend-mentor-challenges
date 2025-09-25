const form = document.getElementById("email-form");
const inputWrapper = document.getElementById("input-wrapper");
const emailInput = document.getElementById("input");
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const succesMsg = document.querySelector("succes-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!emailPattern.test(emailInput.value.trim())) {
    inputWrapper.classList.add(".error");
  } else {
    succesMsg.classList.remove(".hidden");
  }
});
