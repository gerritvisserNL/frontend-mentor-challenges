# Frontend Mentor - Social media dashboard with theme switcher solution

This is a solution to the [Social media dashboard with theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

Een standaard border kan geen gradient krijgen. Een pseudo-element is de workaround:

.card--instagram {
position: relative;
border-radius: 4px;
overflow: hidden;
}

.card--instagram::before {
content: "";
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 4px;
background: var(--color-instagram-gradient);
}

---

Als een icoon alleen decoratief is, dan moet je er aria-hidden="true" bijzetten. Dit voorkomt dat screenreaders de tekst voorleest.

## Author

- Website - [Gerrit Visser](https://www.gerritvisser.nl)
- LinkedIn - [@gerritvissernl](https://www.linkedin.com/in/gerritvissernl/)
- GitHub - [@gerritvisserNL](https://www.github.com/gerritvisserNL)
