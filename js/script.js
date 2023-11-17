let display = document.getElementById("display");

const solveDisplay = (value) => {
  display.value += value;
};
const clearDisplay = () => {
  display.value = "";
};
const Back = () => {
  display.value = display.value.slice(0, -1);
};
const calculateResult = () => {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
};
