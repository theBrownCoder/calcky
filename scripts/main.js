'use strict';

const addition = '+';
const division = '/';
const subtraction = '-';
const multiplication = '*';
const equal = '=';

let firstNum = '';
let secondNum = '';
let sign = '';
let usrInput = '';
let op = '';

const display = document.querySelector('#input-span');
const clear = document.querySelector(newFunction());
const equals = document.querySelector('#equals-key');
const digits = document.querySelectorAll('.numpad-button');

clear.addEventListener('click', e => {
  display.textContent = '0';
  usrInput = '';
  firstNum = '';
  secondNum = '';
});
equals.addEventListener('click', e => {
  operate(parseInt(firstNum), checkOperator(op), parseInt(secondNum));
});

digits.forEach(button => {
  button.addEventListener('click', e => {
    display.textContent = '';
    usrInput = `${button.textContent}`;
    if (firstNum.length > 0) {
      if (isNaN(parseInt(usrInput))) {
        op = usrInput;
        console.log(op);
        display.textContent += op;
      } else {
        secondNum = usrInput;
        console.log(secondNum);
        display.textContent += secondNum;
      }
    } else {
      firstNum = usrInput;
      console.log(firstNum);
      display.textContent += firstNum;
    }
  });
});

function newFunction() {
  return '#data-input-clear-key';
}

// Addition
function add(num1, num2) {
  return num1 + num2;
}

// Subtraction
function subtract(num1, num2) {
  return num1 - num2;
}

// Multiplication
function mult(num1, num2) {
  return num1 * num2;
}

// Division
function divide(num1, num2) {
  return num1 / num2;
}

// Operation
function operate(num1, op, num2) {
  switch (op) {
    case addition:
      display.textContent = String(add(num1, num2));
      break;

    case subtraction:
      display.textContent = String(subtract(num1, num2));
      break;

    case multiplication:
      display.textContent = String(mult(num1, num2));
      break;

    case division:
      display.textContent = String(divide(num1, num2));
      break;

    default:
      console.log('Error. Something went wrong.');
  }
}
function checkOperator(input) {
  switch (input) {
    case addition:
      return '+';

    case subtraction:
      return '-';

    case multiplication:
      return '*';

    case division:
      return '/';

    case equal:
      return '=';
    default:
      console.log('Operator could not be verified.');
  }
}
