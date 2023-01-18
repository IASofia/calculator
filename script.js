let firstOperand = "";
let secondOperand = "";
let operator = "";

const display = document.querySelector(".display");

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
      add(firstOperand, secondOperand);
      break;
    case "subtract":
      subtract(firstOperand, secondOperand);
      break;
    case "multiply":
      multiply(firstOperand, secondOperand);
      break;
    case "divide":
      divide(firstOperand, secondOperand);
      break;
    default:
      return "Operator not found";
  }
}

function populate(e) {
  const value = e.target.textContent;
  firstOperand += value;

  display.textContent += value;
}

numbersBtn.forEach((btn) => btn.addEventListener("click", populate));
