const body = document.body;
const menuIcon = document.querySelector(".hamburger-menu");
const menuMobile = document.querySelector(".menu-mobile");

menuIcon.addEventListener("click", (event) => {
  event.stopPropagation();

  if (menuMobile.classList.contains("hidden")) {
    menuMobile.classList.remove("hidden");
  } else {
    menuMobile.classList.add("hidden");
  }
});

body.addEventListener("click", () => {
  if (!menuMobile.classList.contains("hidden")) {
    menuMobile.classList.add("hidden");
  } else {
    return;
  }
});
