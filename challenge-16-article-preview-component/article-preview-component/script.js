const shareBtn = document.querySelector(".shareBtn");
const shareBtnActive = document.querySelector(".shareBtn-active");
const shareBtnActiveMobile = document.querySelector(".shareBtn-active-mobile");
const mainFooter = document.querySelector(".main-footer");
const shareMobile = document.querySelector(".share-mobile");
const shareDesktop = document.querySelector(".share-desktop");

// Media query for desktop (>= 1024px)
const mediaQuery = window.matchMedia("(min-width: 1024px)");

const handleShareClick = (isActive) => {
  if (mediaQuery.matches) {
    // Desktop behaviour
    if (isActive) {
      shareBtn.classList.add("hidden");
      shareBtnActive.classList.remove("hidden");
      shareDesktop.classList.remove("hidden");
    } else {
      shareBtn.classList.remove("hidden");
      shareBtnActive.classList.add("hidden");
      shareDesktop.classList.add("hidden");
    }
  } else {
    // Mobile behaviour
    if (isActive) {
      mainFooter.classList.add("hidden");
      shareMobile.classList.remove("hidden");
    } else {
      mainFooter.classList.remove("hidden");
      shareMobile.classList.add("hidden");
    }
  }
};

// Voeg toe aan buttons
shareBtn.addEventListener("click", () => handleShareClick(true));
shareBtnActive.addEventListener("click", () => handleShareClick(false));
shareBtnActiveMobile.addEventListener("click", () => {
  handleShareClick(false);
});
