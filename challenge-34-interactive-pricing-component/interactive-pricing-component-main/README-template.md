# Frontend Mentor - Interactive pricing component solution

This is a solution to the [Interactive pricing component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### Links

- Live Site URL: [Add live site URL here](https://www.gerritvisser.nl/frontendmentor/challenges/34-interactive-pricing-component)

## My process

### Built with

- Semantic HTML5 markup
- Mobile-first workflow
- CSS Flexbox & Grid

### What I learned

In this challenge, my main focus was the JavaScript functionality rather than pixel-perfect design.

---

document.addEventListener("mousemove", (e) => {
if (!isDragging) return;

const rect = slider.getBoundingClientRect();
let x = e.clientX - rect.left; // position inside slider

// keep between borders
x = Math.max(0, Math.min(x, rect.width));

// calculate percentage
const percent = (x / rect.width) \* 100;

// move button
sliderBtn.style.left = `${percent}%`;
});

--
const rect = slider.getBoundingClientRect();
This retrieves all information about the slider’s position and size.

rect contains among other things:
rect.left: the distance from the slider to the left side of the screen
rect.width: the width of the slider
--
let x = e.clientX - rect.left;
e.clientX is the horizontal mouse position on the screen.
By subtracting rect.left, you get the mouse position inside the slider itself.

Example:
The slider starts at 300px from the left
The mouse is at 450px
450 minus 300 equals 150px inside the slider
--
x = Math.max(0, Math.min(x, rect.width));
This ensures that x can never fall outside the slider.

Math.min(x, rect.width) prevents x from becoming larger than the slider’s width
Math.max(0, ...) prevents x from becoming smaller than 0
--
const percent = (x / rect.width) \* 100;
You now have a value in pixels, but the button uses left: xx%.
By dividing x by rect.width you get a value between 0 and 1.
Multiplying by 100 turns it into a percentage.
--
sliderBtn.style.left = `${percent}%`;
This places the button at the correct position based on the percentage.

## Author

- Website - [Gerrit Visser](https://www.gerritvisser.nl)
- LinkedIn - [@yourusername](https://www.linkedin.com/in/gerritvissernl/)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/gerritvisserNL)
