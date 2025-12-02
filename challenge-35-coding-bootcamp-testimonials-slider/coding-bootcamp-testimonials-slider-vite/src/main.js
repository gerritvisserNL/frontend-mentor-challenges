import "./reset.css";
import "./style.css";

const track = document.querySelector(".slider__track");
const slides = Array.from(track.children);
const nextBtns = document.querySelectorAll(".slider__button--next");
const prevBtns = document.querySelectorAll(".slider__button--prev");

let currentIndex = 0;

// Make each slide take 100% of the container width
slides.forEach((slide) => (slide.style.minWidth = "100%"));

// Function to show a specific slide
const showSlide = (index) => {
  // Wrap around if index is out of bounds
  currentIndex = (index + slides.length) % slides.length;

  // Move the track to show the current slide
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
};

// Add click events to all "next" buttons
nextBtns.forEach((btn) =>
  btn.addEventListener("click", () => showSlide(currentIndex + 1))
);

// Add click events to all "prev" buttons
prevBtns.forEach((btn) =>
  btn.addEventListener("click", () => showSlide(currentIndex - 1))
);
