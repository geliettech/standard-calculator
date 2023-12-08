document.addEventListener("DOMContentLoaded", function () {
  let display = document.getElementById("display");
  let clearAll = document.getElementById("clearDisplay");
  let operator = document.querySelectorAll(".operator");
  let backSpace = document.getElementById("backSpace");
  let digit = document.querySelectorAll(".digit");
  let percentage = document.getElementById("percentage");
  let calculate = document.getElementById("calculateResult");

  operator.forEach(dataValue);
  digit.forEach(dataValue);

  percentage.addEventListener("click", percent);
  backSpace.addEventListener("click", Back);
  clearAll.addEventListener("click", clearDisplay);
  calculate.addEventListener("click", calculateResult);
});

const dataValue = (button) => {
  button.addEventListener("click", function () {
    appendDisplay(button.getAttribute("data-value"));
  });
};

const appendDisplay = (value) => {
  display.value += value;
};

const percent = () => {
  display.value = eval(display.value) / 100;
};

const Back = () => {
  display.value = display.value.slice(0, -1);
};

const clearDisplay = () => {
  display.value = "";
};

const calculateResult = () => {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
};
