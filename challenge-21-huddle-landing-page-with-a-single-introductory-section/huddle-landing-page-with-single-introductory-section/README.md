# Frontend Mentor - Huddle landing page with single introductory section solution

This is a solution to the [Huddle landing page with single introductory section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/huddle-landing-page-with-a-single-introductory-section-B_2Wvxgi0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

- Live Site URL: [Add live site URL here](https://www.gerritvisser.nl/frontendmentor/challenges/20-ping-single-column-coming-soon-page)

## My process

### Built with

- Semantic HTML5 markup
- Mobile-first workflow
- CSS Flexbox & Grid

### What I learned

I learned that you can embed an .svg file directly in HTML and control its color using CSS. By setting fill="currentColor" in the SVG, it inherits the color from CSS. You can then change the color on hover by using the :hover pseudo-class and specifying a different color.

HTML:
<a href="#" class="icon">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
<path fill="currentColor"
      d="M240 363.3L240 576L356 576L356 363.3L442.5 363.3L460.5 265.5L356 265.5L356 230.9C356 179.2 376.3 159.4 428.7 159.4C445 159.4 458.1 159.8 465.7 160.6L465.7 71.9C451.4 68 416.4 64 396.2 64C289.3 64 240 114.5 240 223.4L240 265.5L174 265.5L174 363.3L240 363.3z" />
</svg>
</a>

CSS:
.icon {
height: 25px;
width: 25px;
color: #fff;
border: 1px solid #fff;
border-radius: 50%;
padding: 0.2rem;
}

.icon:hover {
border: 1px solid var(--clr-primary-magenta-400);
color: var(--clr-primary-magenta-400);
cursor: pointer;
}

## Author

- Website - [Gerrit Visser](https://www.gerritvisser.nl)
- LinkedIn - [@yourusername](https://www.linkedin.com/in/gerritvissernl/)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/gerritvisserNL)
