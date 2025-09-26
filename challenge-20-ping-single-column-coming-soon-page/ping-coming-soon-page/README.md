# Frontend Mentor - Ping coming soon page solution

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

When I displayed a success message after a successful subscription, the page content below the message shifted downward. I solved this by setting the success message’s visibility to hidden. With JavaScript, I added an .active class with visibility: visible. This way, the success message still occupied space in the page flow, preventing the page content underneath from moving.

.succes-message {
display: block;
font-size: 0.6rem;
color: rgb(0, 255, 0);
margin: 0.5rem 0 0.25rem;
visibility: hidden;
}

.succes-message.active {
visibility: visible;
}

The error message, however, needed to push the submit button downward, but everything below the button had to stay in place. I solved this by reducing the form’s margin-bottom when the error message was displayed.

.error-message {
font-size: 0.6rem;
color: var(--red-400);
font-style: italic;
display: none;
margin: 0.25rem 0;
text-align: center;
}

.input-wrapper.error .error-message {
display: block;
}

.form-error-margin-bottom {
margin-bottom: 1.5rem;
}

Additional knowledge gained:

classList add/remove: you pass the classname without the dot (.).

The dot is only used in CSS selectors, e.g. querySelector(".succes-message");.

submitBtn.style.removeProperty("padding") only works for inline CSS.

## Author

- Website - [Gerrit Visser](https://www.gerritvisser.nl)
- LinkedIn - [@yourusername](https://www.linkedin.com/in/gerritvissernl/)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/gerritvisserNL)
