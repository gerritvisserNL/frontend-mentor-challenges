const ratingButtons = document.querySelectorAll(".rating-list button");
console.log(ratingButtons);

let selectedId = null;

ratingButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedId = button.id;
  });
});

const submitBtn = document.querySelector(".submit-btn");
const requestWrapper = document.querySelector(".request-wrapper");
const thankYouWrapper = document.querySelector(".thankyou-wrapper");
const ratingText = document.querySelector(".rating");

submitBtn.addEventListener("click", () => {
  if (selectedId !== null) {
    requestWrapper.classList.add("hidden");
    thankYouWrapper.classList.remove("hidden");
    ratingText.textContent = `You selected ${selectedId} out of 5`;
  } else {
    return;
  }
});
