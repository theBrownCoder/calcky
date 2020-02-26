'use strict';
const equal = '=';
const decimal = '.';

const numbers = {
  zero: ['48', '96'],
  one: ['49', '97'],
  two: ['50', '98'],
  three: ['51', '99'],
  four: ['52', '100'],
  five: ['53', '101'],
  six: ['54', '102'],
  seven: ['55', '103'],
  eight: ['56', '104'],
  nine: ['57', '105'],
};

let firstNum = '';
let secondNum = '';
let answer = '';
let sign = '';
let usrInput = '';
let op = '';
let gotOperator = false;
let gotDecimal = false;

const display = document.querySelector('#input-span');
const display_font = document.querySelector('#input-text-area');
const clear = document.querySelector('#data-input-clear-key');
const equals = document.querySelector('#equals-key');
const digits = document.querySelectorAll('.numpad-button');
const dot = document.querySelector('#decimal-key');

// TODO:
// String several numbers and operators together in one statement and evaluate it.
// Prevent equals key from being pressed until 2 numbers and at least one operator are entered.
// Display an error message if a user tries to divide by 0. (Don't alow it.)
// Fix fixed decimal output to occur only when a float is the answer.
// Fix decimal key to allow for only one decimal per numbers.
// Add a backspace key to allow the user to delete single or multiple numbers from the input field.
// Add keyboard support

// Clears input
clear.addEventListener('click', e => {
  console.log('The display has been cleared.');
  display.textContent = '';
  op = '';
  usrInput = '';
  firstNum = '';
  secondNum = '';
  gotDecimal = false;
  dot.removeAttribute('disabled');
  dot.setAttribute('style', `${'background-color: var(--default-button);'}`);
  display_font.setAttribute('style', `${'font-size: 8ch;'}`);
  gotOperator = false;
});

// Calculates a math problem
equals.addEventListener('click', e => {
  console.log('About to operate...');
  console.log('Equation: ' + firstNum + ' ' + op + ' ' + secondNum);
  operate(parseFloat(firstNum), op, parseFloat(secondNum));
  dot.setAttribute('style', `${'background-color: var(--default-button);'}`);
  dot.removeAttribute('disabled');
});
digits.forEach(button => {
  button.addEventListener('click', e => {
    checkOutputLength();
    usrInput = `${button.textContent}`;
    if (isNaN(parseFloat(usrInput))) {
      switch (usrInput) {
        case '+':
          display.textContent += '+';
          op = '+';
          gotOperator = true;
          dot.setAttribute(
            'style',
            `${'background-color: var(--default-button);'}`,
          );
          dot.removeAttribute('disabled');
          console.log('The operator is: ' + op);
          break;
        case '*':
          display.textContent += '*';
          op = '*';
          gotOperator = true;
          dot.setAttribute(
            'style',
            `${'background-color: var(--default-button);'}`,
          );
          dot.removeAttribute('disabled');
          console.log('The operator is: ' + op);
          break;
        case '-':
          display.textContent += '-';
          op = '-';
          gotOperator = true;
          dot.setAttribute(
            'style',
            `${'background-color: var(--default-button);'}`,
          );
          dot.removeAttribute('disabled');
          console.log('The operator is: ' + op);
          break;
        case '/':
          display.textContent += '/';
          op = '/';
          gotOperator = true;
          dot.setAttribute(
            'style',
            `${'background-color: var(--default-button);'}`,
          );
          dot.removeAttribute('disabled');
          console.log('The operator is: ' + op);
          break;
        case '.':
          display.textContent += '.';
          gotDecimal = true;
          console.log('The decimal key has been clicked.');
          if (gotOperator === true) {
            secondNum += usrInput;
          } else {
            firstNum += usrInput;
          }
          break;
      }
    } else {
      display.textContent += usrInput;
      if (gotOperator === true) {
        secondNum += usrInput;
        console.log('The second number is: ' + secondNum);
      } else {
        firstNum += usrInput;
        if (gotDecimal === true) {
          dot.setAttribute('disabled', 'true');
          dot.setAttribute(
            'style',
            `${'background-color: var(--clear-key_2);'}`,
          );
        }
        console.log('The first Number is: ' + firstNum);
      }
    }
  });
});

// Addition
function add(num1, num2) {
  return (num1 + num2).toFixed(2);
}

// Subtraction
function subtract(num1, num2) {
  return (num1 - num2).toFixed(2);
}

// Multiplication
function multiply(num1, num2) {
  return (num1 * num2).toFixed(2);
}

// Division
function divide(num1, num2) {
  return (num1 / num2).toFixed(2);
}

// Operation
function operate(num1, op, num2) {
  switch (op) {
    case '+':
      answer = String(add(num1, num2));
      checkAnswerLength();
      display.textContent = answer;
      console.log('And the answer is ' + answer);
      firstNum = answer;
      secondNum = '';
      if (gotDecimal === true) {
        dot.setAttribute('disabled', 'true');
        dot.setAttribute('style', `${'background-color: var(--clear-key_2);'}`);
      }
      break;

    case '-':
      answer = String(subtract(num1, num2));
      display.textContent = answer;
      console.log('And the answer is ' + answer);
      firstNum = answer;
      secondNum = '';
      if (gotDecimal === true) {
        dot.setAttribute('disabled', 'true');
        dot.setAttribute('style', `${'background-color: var(--clear-key_2);'}`);
      }

      break;

    case '*':
      answer = String(multiply(num1, num2));
      display.textContent = answer;
      console.log('And the answer is ' + answer);
      firstNum = answer;
      secondNum = '';
      if (gotDecimal === true) {
        dot.setAttribute('disabled', 'true');
        dot.setAttribute('style', `${'background-color: var(--clear-key_2);'}`);
      }
      break;

    case '/':
      answer = String(divide(num1, num2));
      display.textContent = answer;
      console.log('And the answer is ' + answer);
      firstNum = answer;
      secondNum = '';
      if (gotDecimal === true) {
        dot.setAttribute('disabled', 'true');
        dot.setAttribute('style', `${'background-color: var(--clear-key_2);'}`);
      }
      break;

    default:
      console.log('Error. Something went wrong.');
      break;
  }
  firstNum = display.textContent;
}

function checkAnswerLength() {
  if (answer.length > 9) {
    display_font.setAttribute('style', `${'font-size: 6ch;'}`);
  }
  if (display.textContent.length > 14) {
    display_font.setAttribute('style', `${'font-size: 4ch;'}`);
  }
  if (display.textContent.length > 20) {
    display_font.setAttribute('style', `${'font-size: 2ch;'}`);
  }
}

function checkOutputLength() {
  if (display.textContent.length > 9) {
    display_font.setAttribute('style', `${'font-size: 6ch;'}`);
  }
  if (display.textContent.length > 14) {
    display_font.setAttribute('style', `${'font-size: 4ch;'}`);
  }
  if (display.textContent.length > 20) {
    display_font.setAttribute('style', `${'font-size: 2ch;'}`);
  }
}
