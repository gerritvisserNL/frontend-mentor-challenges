import "./reset.css";
import "./style.css";

const toggle = document.querySelector(".card__toggle");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
});

const slider = document.querySelector(".card__slider");
const sliderBtn = document.querySelector(".card__sliderBtn");

// Startposition slider
window.addEventListener("load", () => {
  const startPercent = 50;
  sliderBtn.style.left = `${startPercent}%`;
  updateSliderBackground(startPercent);
});

let isDragging = false;

sliderBtn.addEventListener("mousedown", () => {
  isDragging = true;
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  const rect = slider.getBoundingClientRect();
  let x = e.clientX - rect.left; // position inside slider

  // keep between borders
  x = Math.max(0, Math.min(x, rect.width));

  // calculate percentage
  const percent = (x / rect.width) * 100;

  // move button
  sliderBtn.style.left = `${percent}%`;

  updateSliderBackground(percent);
});

// Function to color the background
const updateSliderBackground = (percent) => {
  slider.style.background = `
    linear-gradient(
      to right,
      hsl(174, 86%, 45%) ${percent}%,
      hsl(224, 65%, 95%) ${percent}%
    )
  `;
};
