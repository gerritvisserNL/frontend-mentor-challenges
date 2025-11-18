const form = document.getElementById("email-form");
const emailInput = document.getElementById("email");
const error = document.getElementById("error");
const errorIcon = document.getElementById("error-icon");
const succes = document.getElementById("succes");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailValue = emailInput.value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(emailValue)) {
    error.style.display = "block";
    errorIcon.style.display = "block";
    emailInput.classList.add("input-error");
    succes.style.display = "none";
  } else {
    error.style.display = "none";
    errorIcon.style.display = "none";
    emailInput.classList.remove("input-error");
    succes.style.display = "block";
    emailInput.value = "";
  }
});

form.addEventListener("input", () => {
  const emailValue = emailInput.value;
  if (emailValue === "") {
    error.style.display = "none";
    errorIcon.style.display = "none";
    emailInput.classList.remove("input-error");
  }
});
