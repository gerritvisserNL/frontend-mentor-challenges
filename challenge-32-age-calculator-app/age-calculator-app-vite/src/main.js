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
  const now = new Date();

  // calculate difference in total milliseconds
  let diffMs = now - birthDate;

  if (diffMs < 0) return null; // data in future, not allowed

  // Calculate years
  let years = now.getFullYear() - birthDate.getFullYear();

  // Check of birthday of this year has passed
  const hasBirthdayPassed =
    now.getMonth() > birthDate.getMonth() ||
    (now.getMonth() === birthDate.getMonth() &&
      now.getDate() >= birthDate.getDate());

  if (!hasBirthdayPassed) years--;

  // calculate months and days
  let months = now.getMonth() - birthDate.getMonth();
  if (months < 0) months += 12;
  if (!hasBirthdayPassed) months = (months + 12) % 12;

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

  const day = parseInt(inputDay.value.trim(), 10);
  const month = parseInt(inputMonth.value.trim(), 10);
  const year = parseInt(inputYear.value.trim(), 10);

  // Validation

  // Day
  if (!day) {
    showError(inputDay, "This field is required");
  } else if (day < 1 || day > 31) {
    showError(inputDay, "Must be a valid day");
  } else {
    clearError(inputDay);
  }

  // Month
  if (!month) {
    showError(inputMonth, "This field is required");
  } else if (month < 1 || month > 12) {
    showError(inputMonth, "Must be a valid month");
  } else {
    clearError(inputMonth);
  }

  // Year
  const currentYear = new Date().getFullYear();
  if (!year) {
    showError(inputYear, "This field is required");
  } else if (year > currentYear) {
    showError(inputYear, "Must be in the past");
  } else {
    clearError(inputYear);
  }

  // Calculate age only when all inputs are valid.
  if (day && month && year && year <= currentYear) {
    const age = calculateAge(day, month, year);
    if (!age) {
      showError(inputYear, "Date cannot be in the future");
      return;
    }
    displayAge(age);
  }
});

const showError = (input, message) => {
  const errorMessage = input.parentElement.querySelector(".error-message");
  errorMessage.textContent = message;
  errorMessage.classList.add("visible");
};

const clearError = (input) => {
  const errorMessage = input.parentElement.querySelector(".error-message");
  errorMessage.textContent = "";
  errorMessage.classList.remove("visible");
};
