const menuIcon = document.querySelector(".hamburger-menu");
const menuMobile = document.querySelector(".menu-mobile");

menuIcon.addEventListener("click", (event) => {
  if (menuMobile.classList.contains("hidden")) {
    menuMobile.classList.remove("hidden");
  } else {
    menuMobile.classList.add("hidden");
  }
});

// alternative code
// menuIcon.addEventListener("click", () => {
//   menuMobile.classList.toggle("hidden");
// });
