# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

- Live Site URL: [Add live site URL here](https://www.gerritvisser.nl/frontendmentor/challenges/31-loopstudios-landing-page)

## My process

### Built with

- Semantic HTML5 markup
- Mobile-first workflow
- CSS Flexbox & Grid

### What I learned

In this project, I really got to practice working with dates and structuring code with reusable functions.

First, I learned how to create a date object and extract its components. For example, to represent a user’s birthday, I used:
const birthDate = new Date(year, month - 1, day);
console.log(birthDate.getFullYear(), birthDate.getMonth(), birthDate.getDate());

I realized that months in JavaScript are 0-based, so January is 0 and December is 11, which was a small but important detail.

Next, I learned how to calculate age accurately, taking into account whether the birthday has already happened this year:
let years = now.getFullYear() - birthDate.getFullYear();
const hasBirthdayPassed = now.getMonth() > birthDate.getMonth() ||
(now.getMonth() === birthDate.getMonth() && now.getDate() >= birthDate.getDate());
if (!hasBirthdayPassed) years--;

This taught me that date calculations require careful logic, especially when months or days haven’t occurred yet in the current year. I also learned how to handle negative days and months when calculating precise age in months and days.

I discovered the importance of validating input too. For instance, to prevent users from entering an impossible date like February 31, I wrote:
if (birthDate.getDate() !== day || birthDate.getMonth() !== month - 1) {
showError(inputDay, "Invalid date");
}

This showed me how to combine date logic with form validation to make a better user experience.

Finally, I practiced writing reusable functions to keep my code clean and organized. For example, instead of updating each UI element manually, I created a function:
const displayAge = ({ years, months, days }) => {
resultYears.textContent = years;
resultMonths.textContent = months;
resultDays.textContent = days;
};

This allowed me to calculate the age in one place and update the UI in another, making the code easier to read and maintain.

Overall, this project taught me how to combine date manipulation, validation, and modular functions to build an interactive web application.

## Author

- Website - [Gerrit Visser](https://www.gerritvisser.nl)
- LinkedIn - [@yourusername](https://www.linkedin.com/in/gerritvissernl/)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/gerritvisserNL)
