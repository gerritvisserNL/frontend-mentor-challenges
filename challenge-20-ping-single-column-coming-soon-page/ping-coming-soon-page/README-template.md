# Frontend Mentor - Ping coming soon page solution

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

# Frontend Mentor - Single price grid component solution

This is a solution to the [Single price grid component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/single-price-grid-component-5ce41129d0ff452fec5abbbc). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

Wanneer ik een succes-message liet verschijnen als het inschrijven gelukt was, zakte de pagina onder het bericht naar beneden. Dit heb ik opgelost door de visibility van succes-message op hidden te zetten. Met JavaScript voegde ik er een .active aan toe met visibility: visible. Zo nam het succes-message wel de ruimte in in de pagina-flow, en voorkwam ik het bewegen van de pagina eronder.

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

De error-message moest de submit button wel naar beneden duwen, maar alles onder de button moest blijven staan. Dit heb ik opgelost door de margin-bottom van form te verkleinen wanneer de error-message getoond werd.

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

Overige opgedane kennis:
classList add/remove. Een classname geef je door zonder (.) punt

Een punt gebruik je alleen in CSS-selectors. bijv. querySelector(".succes-message");

submitBtn.style.removeProperty("padding") werkt alleen bij inline-css.

## Author

- Website - [Gerrit Visser](https://www.gerritvisser.nl)
- LinkedIn - [@yourusername](https://www.linkedin.com/in/gerritvissernl/)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/gerritvisserNL)
