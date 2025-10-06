# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

- Live Site URL: [Add live site URL here](https://www.gerritvisser.nl/frontendmentor/challenges/25-news-homepage)

## My process

### Built with

- Semantic HTML5 markup
- Mobile-first workflow
- CSS Flexbox & Grid

### What I learned

Reminder: `ul.media-item` means “select a `<ul>` element with the class `media-item`.”

`flex-shrink` defines how much a flex item is allowed to shrink when there isn’t enough space in its flex container.

- `flex-shrink: 1;` → the item can shrink (default).
- `flex-shrink: 0;` → the item won’t shrink; it keeps its set width.

---

I added some movement to the desktop menu with CSS:

```css
header .menu-mobile {
  position: fixed;
  top: 0;
  right: 0;
  width: 68%;
  height: 100vh;
  background-color: var(--color-off-white);
  transform: translateX(100%);
  transition: transform 0.3s ease;
  z-index: 10;
}

header .menu-mobile.active {
  transform: translateX(0);
}
```

The difference between `transform`, `translate`, and `transition`:

- `transform`: changes the shape, position, or rotation of an element (e.g., `rotate(45deg)`)
- `translate`: moves an element (e.g., `translateX(100px)`)
- `transition`: makes the transformation happen gradually (e.g., `transform 0.3s ease`)

---

`querySelector` works like CSS; `classList` works with HTML.

- With `querySelector`, you select a CSS class — always with a dot (`.`)
- With `classList`, you work with an HTML class — never use a dot

---

**Specificity:** Determines which CSS rule wins when multiple rules target the same element.

- More specific selectors (like `article .hero`) override less specific ones (like `.hero`).

**Cascade:** Determines the order of application when specificity is equal.

- Later rules in the stylesheet override earlier ones if specificity is the same.

**Shortcut to remember:** “Specificity first, then order.”

---

align-self: start → aligns the item to the top of its grid cell.

## Author

- Website - [Gerrit Visser](https://www.gerritvisser.nl)
- LinkedIn - [@yourusername](https://www.linkedin.com/in/gerritvissernl/)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/gerritvisserNL)
