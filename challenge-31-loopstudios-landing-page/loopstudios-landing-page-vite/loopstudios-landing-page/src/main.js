import "./reset.css";
import "./style.css";

const openBtn = document.querySelector(".header__toggle-icon");
const closeBtn = document.querySelector(".header__nav-close");
const menu = document.querySelector(".header__nav-mobile");

openBtn.addEventListener("click", () => {
  menu.classList.add("header__nav-mobile--active");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("header__nav-mobile--active");
});
