# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

- Live Site URL: [Add live site URL here](https://www.gerritvisser.nl/frontendmentor/challenges/33-intro-section-with-dropdown-navigation)

## My process

### Built with

- Semantic HTML5 markup
- Mobile-first workflow
- CSS Flexbox & Grid

### What I learned

In this challenge, my main focus was the JavaScript functionality rather than pixel-perfect design.

Event listeners on multiple elements: querySelectorAll returns a NodeList, so you need to loop through it with .forEach to attach addEventListener to each element individually.

Dropdown menus: You can check if a <ul> is hidden using querySelector("ul.hidden").

Overlay animations: For fade-in and fade-out effects, use opacity and pointer-events. Avoid using display: none or visibility: hidden for elements you want to animate, as these cannot be transitioned. Toggling a .visible class is the most effective approach.

Dropdown arrows: Switch between up and down icons by adding or removing the .hidden class on the relevant SVG elements.

Inline styles: When adjusting styles dynamically, use the proper syntax like .style.right = "0" instead of non-existent methods like .style.add().

## Author

- Website - [Gerrit Visser](https://www.gerritvisser.nl)
- LinkedIn - [@yourusername](https://www.linkedin.com/in/gerritvissernl/)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/gerritvisserNL)
