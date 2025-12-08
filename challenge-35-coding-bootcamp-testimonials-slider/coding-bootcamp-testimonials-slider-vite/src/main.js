import "./reset.css";
import "./style.css";

const track = document.querySelector(".slider__track");
const slides = Array.from(track.children);
const btnPrev = document.querySelectorAll(".slider__button--prev");
const btnNext = document.querySelectorAll(".slider__button--next");

let currentIndex = 0;

const showSlide = (index) => {
  currentIndex = (index + slides.length) % slides.length;

  track.style.transform = `translateX(-${currentIndex * 100}%)`;
};

btnNext.forEach((btn) =>
  btn.addEventListener("click", () => {
    showSlide(currentIndex + 1);
  })
);

btnPrev.forEach((btn) =>
  btn.addEventListener("click", () => showSlide(currentIndex - 1))
);
