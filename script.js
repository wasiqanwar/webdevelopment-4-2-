let inputDate = new Date();
const today = new Date();
let ageYears;
let ageMonths;
let ageDays;

document.getElementById("btn").addEventListener("click", () => {
  inputDate = document.getElementById("dob").valueAsDate;

  if (inputDate.getDate() > today.getDate()) {
    ageDays = inputDate.getDate() - today.getDate();
  } else {
    ageDays = today.getDate() - inputDate.getDate();
  }

  if (inputDate.getMonth() > today.getMonth()) {
    ageMonths = inputDate.getMonth() - today.getMonth();
  } else {
    ageMonths = today.getMonth() - inputDate.getMonth();
  }

  if (inputDate.getFullYear() > today.getFullYear()) {
    ageYears = inputDate.getFullYear() - today.getFullYear();
  } else {
    ageYears = today.getFullYear() - inputDate.getFullYear();
  }

  document.getElementById("ageText").innerText =
    "Your age is " + ageYears + " years, " + ageMonths + " months and " + ageDays + " days.";
});
