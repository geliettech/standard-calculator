// When the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  let display = document.getElementById("display");
  let clearAll = document.getElementById("clearDisplay");
  let operator = document.querySelectorAll(".operator");
  let backSpace = document.getElementById("backSpace");
  let digit = document.querySelectorAll(".digit");
  let percentage = document.getElementById("percentage");
  let calculate = document.getElementById("calculateResult");

  // Adding click event listeners to operator and digit buttons
  operator.forEach((button) => handleInput(button));
  digit.forEach((button) => handleInput(button));

  // Add event listeners to all buttons
  percentage.addEventListener("click", percent);
  backSpace.addEventListener("click", back);
  clearAll.addEventListener("click", clearDisplay);
  calculate.addEventListener("click", calculateResult);

  // handle click events for operator and digit buttons
  function handleInput(button) {
    button.addEventListener("click", function () {
      display.value += button.getAttribute("data-value");
    });
  }

  // Percentage
  function percent() {
    display.value = eval(display.value) / 100;
  }
  // Backspace
  function back() {
    display.value = display.value.slice(0, -1);
  }

  // Clear display (C)
  function clearDisplay() {
    display.value = "";
  }

  // Calculate result (=)
  function calculateResult() {
    try {
      display.value = eval(display.value);
    } catch {
      display.value = "Error";
    }
  }

  // Dark/Light Theme toggle
  document.getElementById("toggle-theme").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
});
