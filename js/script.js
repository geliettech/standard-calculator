// script.js
document.addEventListener("DOMContentLoaded", function () {
  // Get the display element
  let display = document.getElementById("display");

  // Add event listeners for calculator buttons
  document.getElementById("clearDisplay").addEventListener("click", clearDisplay);
  document.getElementById("backSpace").addEventListener("click", Back);
  document.getElementById("calculateResult").addEventListener("click", calculateResult);

  // Add event listeners for digit buttons
  document.querySelectorAll(".digit").forEach(function (button) {
    button.addEventListener("click", function () {
      appendDisplay(button.getAttribute("data-value"));
    });
  });

  // Add event listeners for operator buttons
  document.querySelectorAll(".operator").forEach(function (button) {
    button.addEventListener("click", function () {
      appendDisplay(button.getAttribute("data-value"));
    });
  });

  // Add event listener for percentage button
  document.getElementById("percentage").addEventListener("click", function () {
    display.value = eval(display.value) / 100;
  });
});

// Function to append the given value to the display
const appendDisplay = (value) => {
  display.value += value;
};

// Function to clear the display
const clearDisplay = () => {
  display.value = "";
};

// Function to remove the last character from the display
const Back = () => {
  display.value = display.value.slice(0, -1);
};

// Function to calculate and display the result
const calculateResult = () => {
  try {
    // Use eval to evaluate the expression and update the display
    display.value = eval(display.value);
  } catch (error) {
    // Handle errors by displaying "Error"
    display.value = "Error";
  }
};
