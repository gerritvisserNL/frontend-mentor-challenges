import "./reset.css";
import "./style.css";

const body = document.querySelector("body");
const menuOpenBtn = document.querySelector(".header__toggle");
const menuCloseBtn = document.querySelector(".nav__close");
const overlay = document.querySelector(".overlay");
const nav = document.querySelector(".nav");
const navItemHasDropdown = document.querySelectorAll(
  ".nav__item--has-dropdown"
);

// Toggle menu
menuOpenBtn.addEventListener("click", () => {
  overlay.classList.add("visible");
  nav.classList.add("open");
  body.classList.add("nav-open");
});

menuCloseBtn.addEventListener("click", () => {
  overlay.classList.remove("visible");
  nav.classList.remove("open");
  body.classList.remove("nav-open");
});

// Toggle menu dropdown
navItemHasDropdown.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.querySelector("ul.hidden")) {
      item.querySelector("ul").classList.remove("hidden");

      // flip arrow
      item.querySelector(".nav__arrow--down").classList.add("hidden");
      item.querySelector(".nav__arrow--up").classList.remove("hidden");
    } else {
      item.querySelector("ul").classList.add("hidden");

      // flip arrow
      item.querySelector(".nav__arrow--down").classList.remove("hidden");
      item.querySelector(".nav__arrow--up").classList.add("hidden");
    }
  });
});
