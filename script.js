let firstOperand = "";
let secondOperand = "";
let operator = "";

let shouldClear = true;

const display = document.querySelector(".main-display");
const subDisplay = document.querySelector(".sub-display");

const numbersBtn = document.querySelectorAll(".number");
const addBtn = document.querySelector(".add");
const subtractBtn = document.querySelector(".subtract");
const multiplyBtn = document.querySelector(".multiply");
const divideBtn = document.querySelector(".divide");

const clearBtn = document.querySelector(".clear");
const equalsBtn = document.querySelector(".equals");

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

function operate(operator, firstOperand, secondOperand) {
  console.log(operator, firstOperand, secondOperand);
  if (operator === "divide" && secondOperand === 0) {
    setTimeout(reset, 1000);
  }

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

function evaluate(e) {
  if (
    operator !== "" &&
    display.textContent !== subDisplay.textContent.split(" ")[0]
  ) {
    secondOperand = Number(display.textContent);
    const result = operate(operator, firstOperand, secondOperand);

    firstOperand = result;
    secondOperand = "";

    subDisplay.textContent =
      result === Math.round(result)
        ? result
        : result.toFixed(6) + " " + e.target.textContent;
    display.textContent =
      result === Math.round(result) ? result : result.toFixed(6);
    shouldClear = true;
    operator = e.target.classList.value;
  } else {
    operator = e.target.classList.value;
    firstOperand = Number(display.textContent);

    subDisplay.textContent = firstOperand + " " + e.target.textContent;
    shouldClear = true;
  }
}

function evaluateEqual(e) {
  secondOperand = Number(display.textContent);
  if (!(operator && firstOperand)) return;

  const result = operate(operator, firstOperand, secondOperand);
  firstOperand = result;
  secondOperand = "";

  subDisplay.textContent =
    result === Math.round(result) ? result : result.toFixed(6);
  display.textContent =
    result === Math.round(result) ? result : result.toFixed(6);
  shouldClear = true;
  operator = "";
}

function reset() {
  shouldClear = true;
  display.textContent = 0;
  firstOperand = "";
  secondOperand = "";
  operator = "";
  subDisplay.textContent = "";
}

numbersBtn.forEach((btn) => btn.addEventListener("click", populate));
addBtn.addEventListener("click", evaluate);
subtractBtn.addEventListener("click", evaluate);
multiplyBtn.addEventListener("click", evaluate);
divideBtn.addEventListener("click", evaluate);

clearBtn.addEventListener("click", reset);
equalsBtn.addEventListener("click", evaluateEqual);
