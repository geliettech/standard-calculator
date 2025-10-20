// When the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  let clearAll = document.getElementById("clearDisplay");
  let operator = document.querySelectorAll(".operator");
  let backSpace = document.getElementById("backSpace");
  let digit = document.querySelectorAll(".digit");
  let percentage = document.getElementById("percentage");
  let calculate = document.getElementById("calculateResult");

  // Adding click event listeners to operator and digit buttons
  operator.forEach(dataValue);
  digit.forEach(dataValue);

  // Add event listeners to all buttons
  percentage.addEventListener("click", percent);
  backSpace.addEventListener("click", Back);
  clearAll.addEventListener("click", clearDisplay);
  calculate.addEventListener("click", calculateResult);
});

let display = document.getElementById("display");

// Function to handle click events for operator and digit buttons
const dataValue = (button) => {
  button.addEventListener("click", function () {
    appendDisplay(button.getAttribute("data-value"));
  });
};

// append values to the display on screen
const appendDisplay = (value) => {
  display.value += value;
};

// Percentage
const percent = () => {
  display.value = eval(display.value) / 100;
};

// Backspace
const Back = () => {
  display.value = display.value.slice(0, -1);
};

// Clear display (C)
const clearDisplay = () => {
  display.value = "";
};

// Calculate result (=)
const calculateResult = () => {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
};
