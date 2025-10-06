const body = document.body;
const menuOpen = document.querySelector(".menu-hamburger");
const menuClose = document.querySelector(".menu-close");
const menuMobile = document.querySelector(".menu-mobile");
const overlay = document.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("active");
  menuMobile.classList.add("active");
  body.classList.add("menu-open");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("active");
  menuMobile.classList.remove("active");
  body.classList.remove("menu-open");
});
