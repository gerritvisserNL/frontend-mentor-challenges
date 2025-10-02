# Frontend Mentor - Bento grid solution

This is a solution to the [Bento grid challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/bento-grid-RMydElrlOj). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

- Live Site URL: [Add live site URL here](https://www.gerritvisser.nl/frontendmentor/challenges/24-bentro-grid)

## My process

### Built with

- Semantic HTML5 markup
- Mobile-first workflow
- CSS Flexbox & Grid

### What I learned

This was a real challenge, but I managed to pull it off.

I started with a mobile-first layout using Flexbox, working from top to bottom. I assigned meaningful names to each div based on their position in the CSS Grid, such as top-left, top-center, top-right, center-left, center-right, bottom-left, bottom-center, and bottom-right.

To handle the left-side elements, I grouped top-left and bottom-left inside a .left-wrapper and applied display: flex to the wrapper. This made it easier to position them correctly within the CSS Grid. I also gave the grid fixed height and width values, which helped me quickly identify when a div became too large.

The biggest challenge was placing images that needed to be partially cropped. To solve this, I wrapped each image in a .crop-box and set the crop box to the final dimensions the image should occupy. By using overflow: hidden, any part of the image outside the box would be cut off.

I also set display: block on the images to ensure they automatically took the width of their parent. Using object-fit: cover allowed the images to fill the container while maintaining their proportions, and object-position: left controlled which part of the image remained visible. Finally, I removed all top margin to eliminate unwanted whitespace above the images.

Here’s an example of the CSS I used for the top-right image:

.top-right .crop-box-top-right {
height: 320px;
width: 230px;
overflow: hidden;
margin: 1.5rem 0;
}

.top-right .crop-box-top-right img {
display: block;
width: auto;
height: 100%;
object-fit: cover;
object-position: left;
border-bottom-left-radius: 1rem;
margin: 0;
padding: 0;
}

## Author

- Website - [Gerrit Visser](https://www.gerritvisser.nl)
- LinkedIn - [@yourusername](https://www.linkedin.com/in/gerritvissernl/)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/gerritvisserNL)
