"use strict";
let displayShow = "";
let displayMemory = "";
let operator, displayNumber;
const displayText = document.querySelector(".display-text");
const displaySubText = document.querySelector(".display-subtext");
const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    display(button);
    if (button.dataset.key == "operator") operator = button.textContent;
  });
});

function displayMech() {
  if (displayNumber == undefined) {
    displayNumber = displayMemory;
  } else {
    displayNumber = operate(
      operator,
      Number(displayNumber),
      Number(displayMemory)
    );
  }
  displayMemory = "";
  displaySubText.textContent = displayNumber !== undefined ? displayNumber : "";
}

const clear = () => {
  displayMemory = "";
  displayShow = "0";
  operator = "";
  displayNumber = "";
  displaySubText.textContent = "0";
};

function operate(operator, displayNumber, displayMemory) {
  if (operator == "+") return displayNumber + displayMemory;
  if (operator == "-") return displayNumber - displayMemory;
  if (operator == "×") return displayNumber * displayMemory;
  if (operator == "/") return displayNumber / displayMemory;
}

function display(key) {
  if (key.dataset.key == "operator") {
    if (displayMemory !== undefined) {
      displayShow += key.textContent;
      displayMech();
    }
  } else if (key.dataset.key == "equal") {
    console.log(displayNumber, displayMemory);
    displayMech();
  } else if (key.dataset.key == "clear") {
    clear();
  } else {
    displayShow += key.textContent;
    displayMemory += key.textContent;
  }
  displayText.textContent = displayShow;
}
