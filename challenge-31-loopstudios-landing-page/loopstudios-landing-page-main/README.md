# Frontend Mentor - Loopstudios landing page solution

This is a solution to the [Loopstudios landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

- Live Site URL: [Add live site URL here](https://www.gerritvisser.nl/frontendmentor/challenges/31-loopstudios-landing-page)

## My process

### Built with

- Semantic HTML5 markup
- Mobile-first workflow
- CSS Flexbox & Grid

### What I learned

Even though this challenge was simple, I still learned a few neat tricks — such as creating a centered underline hover effect and applying a gradient overlay to a background image.

---

Underline hover effect:

`.header__nav-link {
display: inline-block;
position: relative;
font-family: Josefin, sans-serif;
font-size: 1.5rem;
font-weight: 300;
text-transform: uppercase;
text-decoration: none;
color: var(--grey-400);
}`

`.header__nav-link::after {
content: "";
position: absolute;
bottom: -3px;
left: 50%;
width: 0;
height: 2px;
background-color: currentcolor;
transition: width 0.3s ease, left 0.3s ease;
}`

`.header__nav-link:hover::after {
left: 10%;
width: 80%;
}`

---

Gradient overlay

`.creations__item--deep-earth {
background-image: linear-gradient(to right, rgb(0 0 0 / 60%), rgb(0 0 0 / 0%)),
url("/images/mobile/image-deep-earth.jpg");
}`

## Author

- Website - [Gerrit Visser](https://www.gerritvisser.nl)
- LinkedIn - [@yourusername](https://www.linkedin.com/in/gerritvissernl/)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/gerritvisserNL)
