# Frontend Mentor - Clipboard landing page solution

This is a solution to the [Clipboard landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/clipboard-landing-page-5cc9bccd6c4c91111378ecb9). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

- Live Site URL: [Add live site URL here](https://www.gerritvisser.nl/frontendmentor/challenges/27-clipboard-landing-page)

## My process

### Built with

- Semantic HTML5 markup
- Mobile-first workflow
- CSS Flexbox & Grid

### What I learned

This was de first project I used BEM (Block, Elements, Modifier) for. The challenge itself wasn't that hard, but because I used BEM for the first time, it lasted a bit longer.

BEM stands for Block, Element, Modifier. It's a naming convention that helps you write clean, reusable, and well-structured CSS.
It makes it clear how parts of your UI relate to each other.

Block
A standalone component that makes sense on its own.

<div class="card"></div>

.card {
background: white;
border-radius: 8px;
}

Element
A part of the block that has no meaning on its own.

<div class="card">
  <h2 class="card__title">Title</h2>
  <p class="card__text">Some text here.</p>
</div>

`.card__title {
  font-size: 1.5rem;
}`

`.card__text {
  color: gray;
}`

Modifier
A variation or state of a block or element.

<div class="card card--highlighted">
  <h2 class="card__title">Featured</h2>
</div>

.card--highlighted {
border: 2px solid orange;
}

## Author

- Website - [Gerrit Visser](https://www.gerritvisser.nl)
- LinkedIn - [@yourusername](https://www.linkedin.com/in/gerritvissernl/)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/gerritvisserNL)
