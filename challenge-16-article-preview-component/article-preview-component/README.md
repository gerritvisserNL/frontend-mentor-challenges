# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

- Live Site URL: [Add live site URL here](https://www.gerritvisser.nl/frontendmentor/challenges/16-article-preview-component)

## My process

### Built with

- Semantic HTML5 markup
- Mobile-first workflow
- CSS Flexbox & Grid

### What I learned

In this challenge I focused on handling different behavior for mobile and desktop using media queries. The design required two distinct approaches. On mobile (<1024px), clicking the share button had to replace the footer with a share div. On desktop (>=1024px), the share button instead needed to trigger a popup above the button.

The key insight for me was that sticking to a fixed 1440px breakpoint wasn’t practical. By using:

const mediaQuery = window.matchMedia("(min-width: 1024px)");

I could align my JavaScript behavior with my CSS breakpoints, making the component responsive not just in layout but also in functionality.

Along the way, I discovered several important details about CSS, HTML semantics, and SVGs. I learned how !important can enforce a utility class like .hidden { display: none !important; }. I experimented with inline SVGs and found that I could recolor them by adjusting properties such as stroke="#FFFFFF". I also practiced absolute positioning and now understand that the parent element needs position: relative for it to work correctly. Finally, I explored <footer> semantics: while multiple footers are valid, each one should belong to its own section. If the element isn’t really a section footer, using a <div> or <aside> is a clearer choice.

The main takeaway is that responsiveness goes beyond just adjusting the layout. It also requires thinking about functionality, semantics, and the small details that make components behave correctly across devices.

## Author

- Website - [Gerrit Visser](https://www.gerritvisser.nl)
- LinkedIn - [@yourusername](https://www.linkedin.com/in/gerritvissernl/)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/gerritvisserNL)
