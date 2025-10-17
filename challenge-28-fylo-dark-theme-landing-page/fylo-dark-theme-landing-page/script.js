const form = document.querySelector("form");
const emailInput = document.querySelector(".access__input");
const errorMsg = document.querySelector(".access__error");
const successMsg = document.querySelector(".access__success");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailValue = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(emailValue)) {
    errorMsg.classList.remove("hidden");
  } else {
    errorMsg.classList.add("hidden");
    successMsg.classList.remove("hidden");

    // empty input field
    emailInput.value = "";

    // remove successMsg after 3 sec.
    setTimeout(() => {
      successMsg.classList.add("hidden");
    }, 3000);
  }
});
