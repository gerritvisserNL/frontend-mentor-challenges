# Frontend Mentor - NFT preview card component solution

This is a solution to the [NFT preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

- Live Site URL: [Add live site URL here](https://www.gerritvisser.nl/frontendmentor/challenges/09-nft-preview-card-component)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Mobile-first workflow

### What I learned

I learned that it’s better to use a background image instead of an <img> tag because it gives more control over positioning, scaling, and hover effects. Using background-size: cover ensures the image fills the header, and background-position lets me choose which part is visible.

To make the header responsive, I used aspect-ratio, so the height adjusts automatically based on the width. This is much cleaner than setting a fixed height.

For hover effects, I used a ::after pseudo-element with content: "", position: absolute, and inset: 0. This creates a full overlay without adding extra HTML. Adding position: relative to the header makes sure the overlay and any absolute-positioned elements are correctly aligned. Then I applied a color overlay on hover using hsla() and a smooth transition for a fade effect.

Finally, I added a center icon that only appears on hover. I positioned it absolutely in the middle, set opacity: 0 by default, and on hover it fades in with opacity: 1. I even added a subtle scale effect so it feels interactive.

## Author

- Website - [Gerrit Visser](https://www.gerritvisser.nl)
- LinkedIn - [@yourusername](https://www.linkedin.com/in/gerritvissernl/)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/gerritvisserNL)
