"use strict";

let add = function (number) {
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    sum += number[i];
  }
  return sum;
};
let subtract = function (number) {
  let sum = number[0];
  for (let i = 1; i < number.length; i++) {
    sum -= number[i];
  }
  return sum;
};

let multiply = function (number) {
  let sum = number[0];
  for (let i = 1; i < number.length; i++) {
    sum *= number[i];
  }
  return sum;
};

let devide = function (number) {
  let sum = number[0];
  for (let i = 1; i < number.length; i++) {
    sum /= number[i];
  }
  return sum;
};

let operate = function (operator, numOne, numTwo) {
  return operator([numOne, numTwo]);
};

console.log(operate(add, 3, 6));
