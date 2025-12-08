# Frontend Mentor - Coding bootcamp testimonials slider solution

This is a solution to the [Coding bootcamp testimonials slider challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/coding-bootcamp-testimonials-slider-4FNyLA8JL). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

- Live Site URL: [https://www.gerritvisser.nl/frontendmentor/challenges/35-coding-bootcamp-testimonials-slider]

## My process

### Built with

- Semantic HTML5 markup
- Mobile-first workflow
- CSS Flexbox & Grid

### What I learned

In this challenge, my main focus was the JavaScript functionality rather than pixel-perfect design.

---

I built a slider using JavaScript and learned a lot by going through the code step by step.

- I selected the container that holds all slides using `document.querySelector(".slider__track")`.

- I converted its children into an array with Array.from(track.children) so I could easily work with each slide individually—this was new to me.

- I selected all the “next” and “previous” buttons using document.querySelectorAll to make navigation possible.

- I created a currentIndex variable to track the active slide. Using it in combination with modulo arithmetic to wrap around the slider was a clever technique I hadn’t seen before.

- I defined the showSlide function, which moves the slider using track.style.transform = translateX(...) based on currentIndex.

- I added click event listeners to the buttons to call showSlide with the next or previous index.

At first, I used ChatGPT to write the code because I was stuck. Then I went through it line by line until I fully understood it. Finally, I deleted the original code and rewrote it myself, which helped me internalize the logic and practice DOM manipulation, event handling, and slider mechanics.

## Author

- Website - [Gerrit Visser](https://www.gerritvisser.nl)
- LinkedIn - [@gerritvissernl](https://www.linkedin.com/in/gerritvissernl/)
- GitHub - [@gerritvisserNL](https://www.github.com/gerritvisserNL)
