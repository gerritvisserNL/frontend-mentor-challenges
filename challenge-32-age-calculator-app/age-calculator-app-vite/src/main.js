import "./reset.css";
import "./style.css";

const form = document.querySelector("#age-form");
const inputDay = document.querySelector("#day");
const inputMonth = document.querySelector("#month");
const inputYear = document.querySelector("#year");

const resultDays = document.querySelector(".result__value--days");
const resultMonths = document.querySelector(".result__value--months");
const resultYears = document.querySelector(".result__value--years");

// Function: calculate age
const calculateAge = (day, month, year) => {
  const birthDate = new Date(year, month - 1, day); // month is 0-based
  if (
    birthDate.getDate() !== day ||
    birthDate.getMonth() !== month - 1 ||
    birthDate.getFullYear() !== year
  ) {
    showError(inputDay, "Invalid date");
    return null; // stop function
  }

  const now = new Date();

  // Calculate years
  let years = now.getFullYear() - birthDate.getFullYear();

  // Check if birthday of this year has passed
  const hasBirthdayPassed =
    now.getMonth() > birthDate.getMonth() ||
    (now.getMonth() === birthDate.getMonth() &&
      now.getDate() >= birthDate.getDate());

  if (!hasBirthdayPassed) years--;

  // calculate months and days
  let months = now.getMonth() - birthDate.getMonth();
  if (months < 0) months += 12;
  if (!hasBirthdayPassed) months = (months + 12) % 12; // months calculation: extra security to ensure the result is always 0–11

  let days = now.getDate() - birthDate.getDate();
  if (days < 0) {
    const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0); // last day of previous month
    days += lastMonth.getDate();
    months = months === 0 ? 11 : months - 1;
  }

  return { years, months, days };
};

// Function: update UI
const displayAge = ({ years, months, days }) => {
  resultYears.textContent = years;
  resultMonths.textContent = months;
  resultDays.textContent = days;
};

// Form submit event
form.addEventListener("submit", (e) => {
  e.preventDefault();

  resultYears.textContent = "--";
  resultMonths.textContent = "--";
  resultDays.textContent = "--";

  const dayValue = inputDay.value.trim();
  const day = parseInt(dayValue, 10);
  const monthValue = inputMonth.value.trim();
  const month = parseInt(monthValue, 10);
  const yearValue = inputYear.value.trim();
  const year = parseInt(yearValue, 10);

  // Validation

  // Day
  if (!dayValue) {
    showError(inputDay, "This field is required");
  } else if (isNaN(day) || day < 1 || day > 31) {
    showError(inputDay, "Must be a valid day");
  } else {
    clearError(inputDay);
  }

  // Month
  if (!monthValue) {
    showError(inputMonth, "This field is required");
  } else if (isNaN(month) || month < 1 || month > 12) {
    showError(inputMonth, "Must be a valid month");
  } else {
    clearError(inputMonth);
  }

  // Year
  const currentYear = new Date().getFullYear();
  if (!yearValue) {
    showError(inputYear, "This field is required");
  } else if (isNaN(year) || year < 1900 || year > currentYear) {
    showError(inputYear, "Must be between 1900 and " + currentYear);
  } else {
    clearError(inputYear);
  }

  // Calculate age only when all inputs are valid.
  if (
    !isNaN(day) &&
    !isNaN(month) &&
    !isNaN(year) &&
    year >= 1900 &&
    year <= currentYear
  ) {
    const age = calculateAge(day, month, year);
    if (age) {
      displayAge(age);
    } else {
      // Invalid date. Results "--"
      resultYears.textContent = "--";
      resultMonths.textContent = "--";
      resultDays.textContent = "--";
    }
  }
});

const showError = (input, message) => {
  const errorMessage = input.parentElement.querySelector(".error-message");
  errorMessage.textContent = message;
  errorMessage.classList.add("visible");

  const label = input.parentElement.querySelector("label");
  if (label) {
    label.classList.add("error");
  }

  input.classList.add("error");
};

const clearError = (input) => {
  const errorMessage = input.parentElement.querySelector(".error-message");
  errorMessage.textContent = "";
  errorMessage.classList.remove("visible");

  const label = input.parentElement.querySelector("label");
  if (label) {
    label.classList.remove("error");
  }

  input.classList.remove("error");
};
