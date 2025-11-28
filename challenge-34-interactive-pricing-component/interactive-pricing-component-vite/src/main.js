import "./reset.css";
import "./style.css";

const toggle = document.querySelector(".card__toggle");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
});

const slider = document.querySelector(".card__slider");
const sliderBtn = document.querySelector(".card__sliderBtn");

// startposition slider
window.addEventListener("load", () => {
  const startPercent = 50;
  sliderBtn.style.left = `${startPercent}%`;
  updateBackgroundSlider(startPercent);
});

let isDragging = false;

// Mouse events
sliderBtn.addEventListener("mousedown", () => {
  isDragging = true;
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  handleMove(e.clientX);
});

// Touch events
sliderBtn.addEventListener("touchstart", (e) => {
  isDragging = true;
});

document.addEventListener("touchend", () => {
  isDragging = false;
});

document.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  handleMove(e.touches[0].clientX);
});

// Function to calculate position
const handleMove = (clientX) => {
  const rect = slider.getBoundingClientRect();
  let x = clientX - rect.left;

  // borders
  x = Math.max(0, Math.min(x, rect.width));

  // percent
  const percent = (x / rect.width) * 100;

  // sliderBtn position
  sliderBtn.style.left = `${percent}%`;

  updateBackgroundSlider(percent);
};

const updateBackgroundSlider = (percent) => {
  slider.style.background = `linear-gradient(to right,
   hsl(174, 86%, 45%) ${percent}%,
   hsl(224, 65%, 95%) ${percent}%)`;
};
