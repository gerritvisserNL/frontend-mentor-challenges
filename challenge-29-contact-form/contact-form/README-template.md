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

Eerste keer stylelint gebruikt om CSS goed te rangschikken.

Sinds lange tijd weer vite gebruikt voor een project met JavaScript.

---

aria-label alleen wanneer de tekst niet zichtbaar is.

---

<fieldset> groepeert gerelateerde formulier­elementen, en <legend> geeft die groep een beschrijvende titel.

---

<input aria-describedby="error-firstname"> vertelt screenreaders welke tekst als beschrijving bij het veld moet worden voorgelezen.

<p id="error-firstname" class="required" role="alert">This field is required</p>

Wanneer een inputveld twee foutmeldingen kan geven (vb: "error-email-required" en "error-email-invalid"), moet de aria-describedby beide errors bevatten:
aria-describedby="error-email-required error-email-invalid"

---

role="alert" toevoegen bij de error-message. Screenreaders lezen de inhoud van een element met role="alert" direct voor, zonder dat de gebruiker er eerst naartoe hoeft te navigeren.

---

<p> mag niet in een input-element. Semantiek breekt hierdoor en kan leiden tot browser rendering issues. Ook kunnen sommige screenreaders het verkeerd interpreteren.

---

Gebruik aria-live="polite" voor success- of informatieve berichten zodat ze vriendelijk worden aangekondigd.

---

Eerste keer :has gebruikt.
:has() is een relational pseudo-class waarmee je kunt selecteren op basis van wat er binnenin of eronder een element zit.

.input-general:has(input[type="radio"]:checked),
.input-request:has(input[type="radio"]:checked) {
border: 1px solid var(--color-green-600);
background-color: var(--color-green-200);
}

---

Commentaar in de HTML gebruikt om het geheel overzichtelijker te maken.

## Author

- Website - [Gerrit Visser](https://www.gerritvisser.nl)
- LinkedIn - [@yourusername](https://www.linkedin.com/in/gerritvissernl/)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/gerritvisserNL)
