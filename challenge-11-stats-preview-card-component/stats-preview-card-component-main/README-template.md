# Frontend Mentor - Stats preview card component solution

This is a solution to the [Stats preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

- Live Site URL: [Add live site URL here](https://www.gerritvisser.nl/frontendmentor/challenges/10-order-summary-component)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Mobile-first workflow

### What I learned

At first, I used separate <div> elements for each item, but later I refactored the structure into a reusable pattern with a parent container (.stats) and repeated child blocks (.stat). This makes the HTML cleaner, more consistent, and easier to style with CSS.

I can obtain the exact pixel dimensions of elements directly from Photopea.com;

When writing a @media query, it's important to explicitly override existing margin and padding. If you only add new padding, the old values remain. Reset margin and padding to 0 first, then apply the new values.

I learned that when a parent has min-height and child elements use height: 100%, the children don’t automatically respect the parent’s minimum height. This can result in children having zero or unexpected height. Using a fixed height on the parent ensures the children fill it correctly.

## Author

- Website - [Gerrit Visser](https://www.gerritvisser.nl)
- LinkedIn - [@yourusername](https://www.linkedin.com/in/gerritvissernl/)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/gerritvisserNL)
