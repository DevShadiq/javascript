/** @format */

// Create constants here
// =====================================
const monthsPerYears = 12;
const hoursPerDay = 24;
const minutesPerHour = 60;
const secondsPerMinute = 60;

// =====================================

const dayInput = document.querySelector('#day-input');
const fromDats = document.querySelector('#startDate');
const toDates = document.querySelector('#endDate');
const calculateButton = document.querySelector('#calculate-button');
const years = document.querySelector('#years');
const months = document.querySelector('#months');
const weeks = document.querySelector('#weeks');
const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

calculateButton.addEventListener('click', () => {
  let frmdate = fromDats.value;
  let tdate = toDates.value;
  let calculDa = new Date(frmdate) - new Date(tdate);
  let days = dayInput.value;
  let calcHours = days * hoursPerDay;
  let calcMinutes = calcHours * minutesPerHour;
  let calcSeconds = calcMinutes * secondsPerMinute;
  days.innerText = `${calculDa} days`;
  hours.innerText = `${calcHours} hours`;
  minutes.innerText = `${calcMinutes} minutes`;
  seconds.innerText = `${calcSeconds} seconds`;
});
