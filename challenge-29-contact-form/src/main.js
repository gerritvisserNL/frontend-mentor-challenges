import "./reset.css";
import "./style.css";

const form = document.querySelector(".form");

const inputFirstName = document.getElementById("firstname");
const inputLastName = document.getElementById("lastname");
const inputEmail = document.getElementById("email");
const queryInputs = document.querySelectorAll(`input[name="query"]`);
const inputMessage = document.getElementById("message");
const inputCheckbox = document.querySelector(`input[type="checkbox"]`);

const errorFirstName = document.getElementById("error-firstname");
const errorLastName = document.getElementById("error-lastname");
const errorEmailRequired = document.getElementById("error-email-required");
const errorEmailInvalid = document.getElementById("error-email-invalid");
const errorQuery = document.getElementById("error-query");
const errorMessage = document.getElementById("error-message");
const errorConsent = document.getElementById("error-consent");

const successMessage = document.querySelector(".success-message-box");
