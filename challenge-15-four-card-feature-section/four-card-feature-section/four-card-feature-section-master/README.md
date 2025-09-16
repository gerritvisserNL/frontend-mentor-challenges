# Frontend Mentor - Four card feature section solution

This is a solution to the [Four card feature section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/four-card-feature-section-weK1eFYK). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

- Live Site URL: [Add live site URL here](https://www.gerritvisser.nl/frontendmentor/challenges/15-four-card-feature-section)

## My process

### Built with

- Semantic HTML5 markup
- Mobile-first workflow
- CSS Flexbox & Grid

### What I learned

What I’ve learned

I usually build layouts mobile-first with Flexbox, but for larger screens Grid turned out to be much more powerful.

I learned that grid-template-areas let you describe the layout in a very visual way, while grid-template-columns and grid-template-rows define the actual size of the tracks. The two work together: areas handle structure, columns and rows handle sizing.

Another important lesson was that you don’t always need a lot of rows. By repeating the same grid area name on multiple lines, elements can automatically span across rows. That’s exactly how I managed to place Team Builder and Karma halfway between Supervisor and Calculator.

Here’s the code solution that worked for me:

.cards {
display: grid;
grid-template-areas:
"supervisor team-builder calculator"
"supervisor karma calculator";
grid-template-columns: repeat(3, 1fr);
grid-template-rows: auto auto;
}

This way, Supervisor and Calculator stretch over both rows, while Team Builder and Karma are perfectly centered in between.

## Author

- Website - [Gerrit Visser](https://www.gerritvisser.nl)
- LinkedIn - [@yourusername](https://www.linkedin.com/in/gerritvissernl/)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/gerritvisserNL)
