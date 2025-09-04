// select all FAQ buttons
const faqButtons = document.querySelectorAll(".faq button");

faqButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const answerId = button.getAttribute("aria-controls");
    const answer = document.getElementById(answerId);

    // Toggle hidden attribute
    const isHidden = answer.hasAttribute("hidden");
    if (isHidden) {
      answer.removeAttribute("hidden");
      button.setAttribute("aria-expanded", true);
      // Change icon to minus
      button.querySelector("img").src = "./assets/images/icon-minus.svg";
    } else {
      answer.setAttribute("hidden", "");
      button.setAttribute("aria-expanded", "false");
      // Change icon to plus
      button.querySelector("img").src = "./assets/images/icon-plus.svg";
    }
  });
});
