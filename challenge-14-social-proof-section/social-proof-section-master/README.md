# Frontend Mentor - Social proof section solution

This is a solution to the [Social proof section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-proof-section-6e0qTv_bA). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

- Live Site URL: [Add live site URL here](https://www.gerritvisser.nl/frontendmentor/challenges/14-social-proof-section)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Mobile-first workflow

### What I learned

This was the first time I really used CSS Grid instead of Flexbox. I build mobile-first, using Flexbox for smaller screens. For larger screens, I switched to Grid.

What I learned is that sometimes you need to adjust your HTML when using Grid. I used grid-template-areas, which required adding extra <div> elements in my HTML for top-left, top-right, bottom-left, bottom-middle, and bottom-right. I learned how to make an area span multiple columns and how to organize the grid into rows and columns.

@media (min-width: 1440px) {
.wrapper {
display: grid;
align-items: unset; /_ reset flexbox _/
justify-items: unset; /_ reset flexbox _/
width: 1110px;
grid-template-rows: auto 1fr;
grid-template-columns: 1fr 0.5fr 0.5fr 1fr;
column-gap: 1.5rem;
row-gap: 4rem;
grid-template-areas:
"top-left top-left top-right top-right"
"bottom-left bottom-middle bottom-middle bottom-right";
}
}

A small challenge was splitting the <h1> over multiple lines, which I solved with <br />. For the text under the <h1>, I set a fixed width with max-width: 30rem;, which also allowed the text to wrap nicely across multiple lines.

## Author

- Website - [Gerrit Visser](https://www.gerritvisser.nl)
- LinkedIn - [@yourusername](https://www.linkedin.com/in/gerritvissernl/)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/gerritvisserNL)
