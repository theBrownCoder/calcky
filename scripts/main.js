'use strict';

const addition = '+';
const division = '/';
const subtraction = '-';
const multiplication = '*';
const equal = '=';
const decimal = '.';

let firstNum = '';
let secondNum = '';
let sign = '';
let usrInput = '';
let op = '';
let gotOperator = false;
let gotDecimal = false;

const display = document.querySelector('#input-span');
const clear = document.querySelector(newFunction());
const equals = document.querySelector('#equals-key');
const digits = document.querySelectorAll('.numpad-button');

clear.addEventListener('click', e => {
  display.textContent = '0';
  usrInput = '';
  firstNum = '';
  secondNum = '';
  gotDecimal = false;
  gotOperator = false;
});
equals.addEventListener('click', e => {
  operate(parseInt(firstNum), checkOperator(op), parseInt(secondNum));
});

digits.forEach(button => {
  button.addEventListener('click', e => {
    display.textContent = '';
    if (gotOperator === false) {
      if (
        checkOperator(`${button.textContent}`) === addition ||
        checkOperator(`${button.textContent}`) === multiplication ||
        checkOperator(`${button.textContent}`) === subtraction ||
        checkOperator(`${button.textContent}`) === division
      ) {
        op = usrInput;
      } else {
        usrInput += `${button.textContent}`;
        console.log(usrInput);
        display.textContent = usrInput;
        if (isNaN(parseInt(usrInput))) {
          if (usrInput === decimal) {
            gotDecimal = true;
            usrInput += decimal;
            display.textContent = usrInput;
          } else {
            gotOperator = true;
            display.textContent = usrInput;
            console.log(usrInput);
          }
        } else {
          firstNum = usrInput;
          console.log(firstNum);
        }
      }
    } else if (gotOperator === true) {
      secondNum = usrInput;
      console.log(secondNum);
    } else {
      console.log('Error.');
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

    case decimal:
      return '.';
    default:
      console.log('Operator could not be verified.');
  }
}
