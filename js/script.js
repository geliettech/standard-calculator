document.addEventListener("DOMContentLoaded", function () {
  let display = document.getElementById("display");
  let clearAll = document.getElementById("clearDisplay");
  let backSpace = document.getElementById("backSpace");
  let calculate = document.getElementById("calculateResult");
  let percentage = document.getElementById("percentage");
  let digit = document.querySelectorAll(".digit");
  let operator = document.querySelectorAll(".operator");

  clearAll.addEventListener("click", clearDisplay);
  backSpace.addEventListener("click", Back);
  calculate.addEventListener("click", calculateResult);
  percentage.addEventListener("click", percent);

  digit.forEach(dataValue);
  operator.forEach(dataValue);
});

const appendDisplay = (value) => {
  display.value += value;
};

const percent = () => {
  display.value = eval(display.value) / 100;
};

const clearDisplay = () => {
  display.value = "";
};

const Back = () => {
  display.value = display.value.slice(0, -1);
};

const dataValue = (button) => {
  button.addEventListener("click", function () {
    appendDisplay(button.getAttribute("data-value"));
  });
};

const calculateResult = () => {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
};
