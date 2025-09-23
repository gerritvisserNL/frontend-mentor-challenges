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

Recreating the page pixel-perfect from the design was harder than I thought. As always, I started with mobile-first and Flexbox. In the header, I placed the ‘Base Apparel’ logo. I placed the cover photo inside .hero, between the header and the main. This was because, in the desktop version, the .hero should appear on the right side of the screen, separate from the header on the left.

For screen readers, you need to add labels to a form. However, the design didn’t allow for visible labels. I worked around this by adding the following class to the label:

.sr-only {
position: absolute; /_ Removes the element from the normal document flow _/
width: 1px; /_ Makes it extremely small _/
height: 1px;
padding: 0; /_ No extra space _/
margin: -1px; /_ Pushes it further out of view _/
overflow: hidden; /_ Prevents any visible overflow _/
clip: rect(0, 0, 0, 0); /_ Clips the visible area to nothing _/
border: 0; /_ Removes any possible border _/
}

By making the button position: absolute within its parent (.input-wrapper { position: relative }), I was able to place it neatly to the right of the input field.

I had to validate a form input for correctness. I did this with Regex:
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

I tested the emailValue like this:
if (!emailPattern.test(emailValue)) { ... }

To show error and success messages, I created CSS class selectors with display: none. I could then reveal them via JavaScript by setting display: block.

Adding a class to an element is done with .classList.add("input-error"). Removing it is done with .classList.remove("input-error").

With e.preventDefault();, I prevented the page from automatically reloading and sending the data to the server.

## Author

- Website - [Gerrit Visser](https://www.gerritvisser.nl)
- LinkedIn - [@yourusername](https://www.linkedin.com/in/gerritvissernl/)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/gerritvisserNL)
