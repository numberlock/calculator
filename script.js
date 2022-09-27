"use strict";
const displayText = document.querySelector(".display-text");
const displaySubText = document.querySelector(".display-subtext");
const buttons = document.querySelectorAll(".button");

const add = function (number) {
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    sum += number[i];
  }
  return sum;
};
const subtract = function (number) {
  let sum = number[0];
  for (let i = 1; i < number.length; i++) {
    sum -= number[i];
  }
  return sum;
};

const multiply = function (number) {
  let sum = number[0];
  for (let i = 1; i < number.length; i++) {
    sum *= number[i];
  }
  return sum;
};

const devide = function (number) {
  let sum = number[0];
  for (let i = 1; i < number.length; i++) {
    sum /= number[i];
  }
  return sum;
};

const operate = function (operator, numOne, numTwo) {
  if (operator == "add") return add([numOne, numTwo]);
  if (operator == "subtract") return subtract([numOne, numTwo]);
  if (operator == "multiply") return multiply([numOne, numTwo]);
  if (operator == "devide") return devide([numOne, numTwo]);
};

let displayShow = "";
let displayMemory = "";
let operator, numOne, numTwo;
let storage = 0;

function display(key) {
  if (key.dataset.key == "operator") {
    displayShow += key.textContent;
    displayMech();
  } else if (key.dataset.key == "equal") {
    displayMech();
  } else if (key.dataset.key == "clear") {
    clear();
  } else {
    displayShow += key.textContent;
    displayMemory += key.textContent;
  }
  displayText.textContent = displayShow;
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    display(button);
    if (button.textContent == "+") operator = "add";
    if (button.textContent == "-") operator = "subtract";
    if (button.textContent == "×") operator = "multiply";
    if (button.textContent == "/") operator = "devide";
  });
});

const clear = () => {
  displayMemory = "";
  displayShow = "";
  operator = "";
  numOne = "";
  numTwo = "";
  displaySubText.textContent = "";
};

function numbers() {
  displayMemory = "";
}

function displayMech() {
  if (numOne == undefined) {
    numOne = displayMemory;
  } else {
    numOne = operate(operator, Number(numOne), Number(displayMemory));
  }
  displayMemory = "";
  displaySubText.textContent = numOne !== undefined ? numOne : "";
}
