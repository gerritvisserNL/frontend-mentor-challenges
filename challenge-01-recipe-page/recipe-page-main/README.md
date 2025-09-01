# Frontend Mentor - Recipe page solution

This is my solution to the [Recipe page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/recipe-page-KiTsR8QQKm).
Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### Links

- Live Site URL: [Add live site URL here](https://www.gerritvisser.nl/frontendmentor/challenges/1-recipe-page)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Mobile-first workflow
- Flexbox

### What I learned

I had trouble positioning the dot in front of a <ul><li>. I solved it by using a ::before pseudo-element and centering the dot vertically with transform: translateY(-50%):

ul li::before {
content: "•";
position: absolute;
left: 0.25rem;
top: 50%;
transform: translateY(-50%);
color: var(--Stone600);
font-size: 1.25rem;
}

Instead of using CSS Grid, I practiced with <table> to build the table structure.

For the image, I wanted it to resize responsively without losing its proportions. I set the width with a calculation (calc(100% - 4rem)) and kept the aspect ratio with height: auto;. To make margin: auto; work correctly, I had to use display: block;, since an <img> is inline by default.

I improved the semantic HTML of my recipe page by replacing unnecessary <div> elements with meaningful tags like <section> and <article>. The recipe itself is now wrapped in an <article> inside <main>, since it represents standalone content. For lists with short items, such as preparation times and ingredients, I removed the extra <p> tags because <li> already provides sufficient structure. For the cooking instructions, I kept <p> inside <li> since these items contain longer sentences and explanations, making them easier to read. In the nutrition table, I decided not to use <thead> because the first column already serves as a clear label, keeping the table simple while still accessible. These changes make the code cleaner, more accessible, and easier to understand for both developers and screen readers.

## Author

- Website - [Gerrit Visser](https://www.gerritvisser.nl)
- LinkedIn - [@yourusername](https://www.linkedin.com/in/gerritvissernl/)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/gerritvisserNL)
