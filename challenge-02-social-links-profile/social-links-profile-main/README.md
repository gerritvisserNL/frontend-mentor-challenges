# Frontend Mentor - Social links profile solution

This is my solution to the [Social links profile challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-links-profile-UG32l9m6dQ).

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

- Live Site URL: [Add live site URL here](https://www.gerritvisser.nl/frontendmentor/challenges/02-social-links-profile)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Mobile-first workflow
- Flexbox

### What I learned

I first built the page myself, and later I asked ChatGPT to help me add semantic HTML5 markup. It suggested using elements like:

<main class="container"></main>
<section class="profile"></section>
<nav aria-label="social links"></nav>

Originally, I had created my navigation with only <div> elements, instead of the more semantic combination of <nav>, <ul>, and <li>.

Along the way, I also learned the difference between section. profile and section.profile in CSS:

section.profile (without a space) targets a <section> element that has the class profile.

section .profile (with a space) targets any element with the class profile that is a descendant of a <section>.

Another takeaway: I didn’t need to use @media queries for this project.

## Author

- Website - [Gerrit Visser](https://www.gerritvisser.nl)
- LinkedIn - [@yourusername](https://www.linkedin.com/in/gerritvissernl/)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/gerritvisserNL)
