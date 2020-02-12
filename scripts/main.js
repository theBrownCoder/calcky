'use strict';

// Numbers
const zero = '0';
const one = '1';
const two = '2';
const three = '3';
const four = '4';
const five = '5';
const six = '6';
const seven = '7';
const eight = '8';
const nine = '9';
const ten = '10';

// Operators
const addition = '+';
const subtraction = '-';
const multiplication = '*';
const division = '/';

// Addition
function add(num1, num2) {
  return num1 + num2;
}

// Subtraction
function subtract(num1, num2) {
  return num1 - num2;
}

// Multiplication
function multiply(num1, num2) {
  return num1 * num2;
}

// Division
function divide(num1, num2) {
  return num1 / num2;
}

// Operation
function operate(op, num1, num2) {
  switch (op) {
    case '+':
      return add(num1, num2);
      break;
    case '-':
      return subtract(num1, num2);
      break;
    case '*':
      return multiply(num1, num2);
      break;
    case '/':
      return divide(num1, num2);
      break;
    default:
      console.log('Error. Something went wrong.');
  }
}
