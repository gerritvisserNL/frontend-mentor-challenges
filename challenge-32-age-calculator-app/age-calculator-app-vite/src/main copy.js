import "./reset.css";
import "./style.css";

const form = document.querySelector("#age-form");
const inputDay = document.querySelector("#day");
const inputMonth = document.querySelector("#month");
const inputYear = document.querySelector("#year");

const resultDays = document.querySelector(".result__value--days");
const resultMonths = document.querySelector(".result__value--months");
const resultYears = document.querySelector(".result__value--years");

const year = 1983;
const month = 12;
const day = 16;

const calculateAge = (year, month, day) => {
  const birthday = new Date(year, month - 1, day); // month is 0-based;
  const now = new Date();

  console.log(birthday);
  console.log(now);

  // check if birthday is in the past
  const msDiff = now - birthday;
  if (msDiff < 0) return null;

  console.log(msDiff);

  // calculate years
  let years = now.getFullYear() - birthday.getFullYear();

  // check if birthday of this year has passed
  const hasBirthdayPassed =
    now.getMonth() > birthday.getMonth() ||
    (now.getMonth() === birthday.getMonth() &&
      now.getDate() >= birthday.getDate());

  if (!hasBirthdayPassed) years--;

  // calculate months and days
  let months = now.getMonth() - birthday.getMonth();
  if (months < 0) months += 12;

  let days = now.getDate() - birthday.getDate();
  if (days < 0) {
    const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += lastMonth.getDate();
  }
};

calculateAge(year, month, day);
