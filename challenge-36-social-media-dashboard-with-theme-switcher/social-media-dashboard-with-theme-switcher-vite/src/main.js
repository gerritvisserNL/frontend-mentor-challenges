import "./reset.css";
import "./style.css";

const body = document.body;
const toggleBtn = document.querySelector(".header__theme-toggle");

const toggleTheme = () => {
  body.dataset.theme = body.dataset.theme === "light" ? "dark" : "light";
};

toggleBtn.addEventListener("click", toggleTheme);
