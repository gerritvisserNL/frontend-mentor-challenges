# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

- Live Site URL: [Add live site URL here](https://www.gerritvisser.nl/frontendmentor/challenges/04-faq-accordion)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Mobile-first workflow
- Media Query
- reset.css

### What I learned

Defer: <script src="script.js" defer></script>

defer makes an external script execute only after the HTML is fully parsed, while the script is downloaded during parsing. This way, it doesn’t block page rendering and you can safely access HTML elements in the script.

In the FAQ example, :last-child did not work as expected because the last element inside the <dl> was a <dd> rather than a <dt>. As a result, the last question button was not selected. The correct solution is to use :last-of-type, which specifically targets the final <dt> and removes the border from its button.

## Author

- Website - [Gerrit Visser](https://www.gerritvisser.nl)
- LinkedIn - [@yourusername](https://www.linkedin.com/in/gerritvissernl/)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/gerritvisserNL)
