# Frontend Mentor - Expenses chart component solution

This is a solution to the [Expenses chart component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

- Live Site URL: [Add live site URL here](https://www.gerritvisser.nl/frontendmentor/challenges/30-expenses-chart-component)

## My process

### Built with

- Semantic HTML5 markup
- Mobile-first workflow
- CSS Flexbox & Grid

### What I learned

This challenge was all about JavaScript, and it really put my skills to the test. I had to refresh quite a bit before I got into the flow again.

To start, I dynamically created several <div> elements using document.createElement, assigned class names to them, and used .append() to structure everything together. After that, I styled the layout with CSS to make the chart visually clear and consistent.

I built three main functions for this project:
fetchData() – an async function that retrieves all data from a .json file.
createBars() – responsible for generating the individual bars.
renderChart() – which ties everything together and displays the final chart on the page.

Here’s the fetchData function I used:

const fetchData = async () => {
try {
const res = await fetch("./data/data.json");
const data = await res.json();
return data;
} catch (err) {
console.error("Error loading data:", err);
}
};

One important lesson I learned from this challenge is to first write down or visualize the HTML structure before writing the JavaScript that will create it. This makes it much easier to understand how the elements fit together.

As an extra feature, I calculated and displayed the total weekly spending using the data from the JSON file.

## Author

- Website - [Gerrit Visser](https://www.gerritvisser.nl)
- LinkedIn - [@yourusername](https://www.linkedin.com/in/gerritvissernl/)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/gerritvisserNL)
