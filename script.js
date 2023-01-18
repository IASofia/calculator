let firstOperand = "";
let secondOperand = "";
let operator = "";

let shouldClear = false;
let shouldEvaluate = false;

const display = document.querySelector(".main-display");
const subDisplay = document.querySelector(".sub-display");

const numbersBtn = document.querySelectorAll(".number");
const addBtn = document.querySelector(".add");
const subtractBtn = document.querySelector(".subtract");
const multiplyBtn = document.querySelector(".multiply");
const divideBtn = document.querySelector(".divide");

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

function operate(operator, firstOperand, secondOperand) {
  if (operator === "divide" && secondOperand === 0)
    return "Error, cannot divide by 0!";

  switch (operator) {
    case "add":
      return add(firstOperand, secondOperand);
    case "subtract":
      return subtract(firstOperand, secondOperand);
    case "multiply":
      return multiply(firstOperand, secondOperand);
    case "divide":
      return divide(firstOperand, secondOperand);
    default:
      return "Operator not found";
  }
}

function clearDisplay() {
  display.textContent = "";
  shouldClear = false;
}

function populate(e) {
  const value = e.target.textContent;
  if (shouldClear) clearDisplay();

  display.textContent += value;
}

function storeValue(e) {
  if (operator !== "") {
    secondOperand = Number(display.textContent);
    const result = operate(operator, firstOperand, secondOperand);

    firstOperand = result;
    secondOperand = "";

    subDisplay.textContent = result + " " + e.target.textContent;
    shouldClear = true;
  } else {
    operator = e.target.classList.value;
    firstOperand = Number(display.textContent);

    subDisplay.textContent = firstOperand + " " + e.target.textContent;
    shouldClear = true;
  }
}

numbersBtn.forEach((btn) => btn.addEventListener("click", populate));
addBtn.addEventListener("click", storeValue);
