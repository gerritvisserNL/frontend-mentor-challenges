# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

- Live Site URL: [Add live site URL here](https://www.gerritvisser.nl/frontendmentor/challenges/17-base-apparel-coming-soon-page)

## My process

### Built with

- Semantic HTML5 markup
- Mobile-first workflow
- CSS Flexbox & Grid

### What I learned

The form had multiple input fields, each requiring its own error message whenever the validation conditions weren’t met. To handle this, I wrapped each input in a container with the class input-wrapper and assigned it a unique ID.

For example:

<div class="input-wrapper" id="firstname-wrapper">
  <label for="firstname" class="sr-only">First Name</label>
  <input id="firstname" placeholder="First Name" required />
  <img
    class="error-icon"
    src="./images/icon-error.svg"
    alt="Error icon"
  />
  <span class="error-message">First Name cannot be empty</span>
</div>

With CSS, I displayed the errors by adding an .error class to the .input-wrapper. This made the .error-icon and .error-message visible by setting them to display: block inside their parent element:

.input-wrapper.error .error-icon,
.input-wrapper.error .error-message {
display: block;
}

const firstNameWrapper = document.getElementById("firstname-wrapper");
→ this means that firstNameWrapper refers to the

<div class="input-wrapper" id="firstname-wrapper">

In JavaScript, I used getElementById to grab the input values. The form could only be submitted if the hasError variable was false. To hide error messages again, I added event listeners to the input fields so they would disappear once the user started typing.

One key takeaway from this process: always push your files to GitHub regularly. I accidentally deleted my CSS file and couldn’t immediately recover it. Luckily, I managed to restore it through VSCode’s timeline feature.

## Author

- Website - [Gerrit Visser](https://www.gerritvisser.nl)
- LinkedIn - [@yourusername](https://www.linkedin.com/in/gerritvissernl/)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/gerritvisserNL)
