# Frontend Mentor - Contact form solution

This is a solution to the [Contact form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

- Live Site URL: [Add live site URL here](https://www.gerritvisser.nl/frontendmentor/challenges/29-contact-form)

## My process

### Built with

- Semantic HTML5 markup
- Mobile-first workflow
- CSS Flexbox & Grid

### What I learned

CSS / Tools
First time using stylelint to organize CSS properly.
Used Vite again for a JS project after a long break.

Accessibility
aria-label → only if the text is not visible.

<fieldset> → groups related form elements.
<legend> → provides a descriptive title for the group.
<input aria-describedby="..."> → tells screen readers which description to read.

Example:

<p id="error-firstname" class="required" role="alert">This field is required</p>

Multiple errors? Include all IDs:
aria-describedby="error-email-required error-email-invalid"

Add role="alert" on error messages → announced immediately by screen readers.

<p> should not be inside input elements → breaks semantics & may cause rendering issues.

Use aria-live="polite" for success or informational messages → announced politely.

CSS Tips
First time using :has() → select elements based on children or contained elements:

.input-general:has(input[type="radio"]:checked),
.input-request:has(input[type="radio"]:checked) {
border: 1px solid var(--color-green-600);
background-color: var(--color-green-200);
}

HTML Notes
Use comments to keep the structure clear and organized.

## Author

- Website - [Gerrit Visser](https://www.gerritvisser.nl)
- LinkedIn - [@yourusername](https://www.linkedin.com/in/gerritvissernl/)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/gerritvisserNL)
