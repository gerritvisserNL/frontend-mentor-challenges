# Frontend Mentor - Fylo data storage component solution

This is a solution to the [Fylo data storage component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/fylo-data-storage-component-1dZPRbV5n). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

I learned that when using a gradient, you need to use background instead of background-color.

I used display: none in CSS to hide .storage-left-box-mobile for screens wider than 1200px instead of relying on JavaScript:

.storage-left-box-mobile {
display: none;
}

.storage-left-box-desktop {
display: block;
}

For the "text-balloon," I used ::after to create a small triangle on the right side of the balloon:

.storage-left-box-desktop::after {
content: "";
position: absolute;
bottom: -19px; / positions it below the box /
right: 0;
width: 0;
height: 0;

border-right: 0; / no border on the right /
border-left: 20px solid transparent; / diagonal left edge /
border-top: 20px solid hsl(0, 0%, 100%); / matches the box color /
}

This technique allows you to add a clean, triangular pointer to the balloon without extra HTML elements.

## Author

- Website - [Gerrit Visser](https://www.gerritvisser.nl)
- LinkedIn - [@yourusername](https://www.linkedin.com/in/gerritvissernl/)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/gerritvisserNL)
