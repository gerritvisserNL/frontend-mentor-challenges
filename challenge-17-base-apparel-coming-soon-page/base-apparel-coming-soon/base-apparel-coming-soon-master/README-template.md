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

De pagina pixel-perfect namaken van design was moeilijker dan ik dacht. Zoals altijd begin ik met mobile-first en flexbox. In de header zette ik het logo van 'Base Apparel'. De coverfoto zette ik in .hero tussen de header en de main in. Dit omdat de .hero in de desktop-versie rechts op het scherm moet komen te staan en los moet staan van de header dat links op het scherm staat.

Voor screenreaders moet je labels plaatsen in een form. Dit liet het design alleen niet toe. Hier heb ik omheen gewerkt door de volgende class aan het label toe te voegen:

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

Door de button position: absolute aan zijn ouder te maken (.input-wrapper { position: relative}), kon ik deze netjes rechts van het inputveld plaatsen.

Ik moest een form-input valideren op correctheid. Dit deed ik met Regex: const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
Het emailpatroon van emailValue testte ik zou: if (!emailPattern.test(emailValue))

Om de error- en succes-berichten te tonen, maakte ik speciale CSS class selectors met display: none. Deze kon ik via JavaScript tonen door display: block te zetten.

Een class toevoegen aan een element gebeurd met .classList.add("input-error"). Verwijderen gebeurd met .classList.remove("input-error")

Met e.preventDefault(); voorkwam ik dat de pagina automatisch herladen en de data naar de server gestuurd werd.

## Author

- Website - [Gerrit Visser](https://www.gerritvisser.nl)
- LinkedIn - [@yourusername](https://www.linkedin.com/in/gerritvissernl/)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/gerritvisserNL)
