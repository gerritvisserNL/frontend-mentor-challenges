# Frontend Mentor - Fylo dark theme landing page solution

This is a solution to the [Fylo dark theme landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/fylo-dark-theme-landing-page-5ca5f2d21e82137ec91a50fd). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

- Live Site URL: [Add live site URL here](https://www.gerritvisser.nl/frontendmentor/challenges/28-fylo-dark-theme-landing-page)

## My process

By placing inline SVGs directly in the HTML, the HTML file can become quite large. This can be avoided by storing all SVG files in an SVG sprite (.svg file).

Example:

icons.svg:
`<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
<symbol id="icon-heart" viewBox="0 0 24 24">
<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
</symbol>

  <symbol id="icon-star" viewBox="0 0 24 24">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
  </symbol>
</svg>`

html:

`<svg class="icon heart">
  <use href="icons.svg#icon-heart"></use>
</svg>`

`<svg class="icon star">
  <use href="icons.svg#icon-star"></use>
</svg>`

css:
.icon {
width: 40px;
height: 40px;
fill: red;
transition: fill 0.2s;
}

.icon.heart:hover {
fill: pink;
}

.icon.star:hover {
fill: gold;
}

✅ changes to svg
Add viewBox=""
Add <title> for screenreaders.
Use fill="currentColor" for controle over colors via CSS.

---

This code places an element at the bottom center of its parent, makes it 90% as wide as the parent, and offsets it slightly below the bottom edge:

.access {
position: absolute;
left: 50%;
bottom: 0;
transform: translate(-50%, 50%);
width: 90%;
}

---

I had to set position: static on my `.cta__button--access` because it was inheriting absolute from `.cta__button`. By making it static, I put the button back into the normal flow, so it aligns correctly next to the input in the flex container without overlapping.

---

Reminder: an ul element may not contain a div element.

---

### Built with

- Semantic HTML5 markup
- Mobile-first workflow
- CSS Flexbox & Grid

### What I learned

## Author

- Website - [Gerrit Visser](https://www.gerritvisser.nl)
- LinkedIn - [@yourusername](https://www.linkedin.com/in/gerritvissernl/)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/gerritvisserNL)
