// Get the display element
let display = document.getElementById("display");

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
