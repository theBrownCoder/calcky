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
const backspace = document.querySelector('#data-input-backspace-key');
const equals = document.querySelector('#equals-key');
const digits = document.querySelectorAll('.numpad-button');
const dot = document.querySelector('#decimal-key');
const key = window.addEventListener('keypress', checkKeyPress, true);

// Disables the equals key from the start until conditions are met (2 numbers and at least 1 operator)
equals.setAttribute('disabled', 'true');
equals.setAttribute('style', `${'background-color: var(--keypad_2);'}`);

// TODO:
// String several numbers and operators together in one statement and evaluate it.
// Add keyboard support

// Clears input
clear.addEventListener('click', e => {
  console.log('The display has been cleared.');
  equals.setAttribute('disabled', 'true');
  equals.setAttribute('style', `${'background-color: var(--keypad_2);'}`);
  display.textContent = '';
  op = '';
  usrInput = '';
  firstNum = '';
  secondNum = '';
  gotDecimal = false;
  dot.removeAttribute('disabled');
  dot.setAttribute('style', `${'background-color: var(--default-button);'}`);
  dot.setAttribute('hover', `${'background-color: var(--clear-key_2);'}`);
  display_font.setAttribute('style', `${'font-size: 12ch;'}`);
  gotOperator = false;
});

// Backspace button
backspace.addEventListener('click', e => {
  console.log('The backspace key has been pressed');
  // check for operator first,
  if (gotOperator === true) {
    //reduce the secondNum variable by 1 character
    if (isNaN(parseFloat(usrInput))) {
      let dummyOperator = usrInput;
      let dummyNum = ' ';
      switch (dummyOperator) {
        case '+':
          gotOperator = false;
          op = '';
          dummyNum = display.textContent.slice(
            0,
            display.textContent.length - 1,
          );
          display.textContent = dummyNum;
          console.log(display.textContent);
          break;

        case '-':
          gotOperator = false;
          op = '';
          dummyNum = display.textContent.slice(
            0,
            display.textContent.length - 1,
          );
          display.textContent = dummyNum;
          console.log(display.textContent);
          break;

        case '*':
          gotOperator = false;
          op = '';
          dummyNum = display.textContent.slice(
            0,
            display.textContent.length - 1,
          );
          display.textContent = dummyNum;
          console.log(display.textContent);
          break;

        case '/':
          gotOperator = false;
          op = '';
          dummyNum = display.textContent.slice(
            0,
            display.textContent.length - 1,
          );
          display.textContent = dummyNum;
          console.log(display.textContent);
          break;

        case '.':
          gotDecimal = false;
          dot.setAttribute(
            'style',
            `${'background-color: var(--default-button);'}`,
          );
          dot.removeAttribute('disabled');
          dummyNum = display.textContent.slice(
            0,
            display.textContent.length - 1,
          );
          display.textContent = dummyNum;
          console.log(display.textContent);
          break;

        default:
          console.log('Error.');
          break;
      }
    } else {
      let dummyNum = secondNum.slice(0, secondNum.length - 1);
      if (secondNum.length === 1) {
        dummyNum = '0';
        secondNum = dummyNum;
        console.log('Second Dummy Number: ' + dummyNum);
        display.textContent = dummyNum;
      } else {
        console.log('Second Dummy Number: ' + dummyNum);

        secondNum = dummyNum;
        console.log('New Number: ' + secondNum);
        display.textContent = secondNum;
      }
    }
  } else {
    //reduce the firstNum variable by 1 character
    let dummyNum = firstNum.slice(0, firstNum.length - 1);
    if (firstNum.length === 1) {
      dummyNum = '0';
      firstNum = dummyNum;
      console.log('First Dummy Number: ' + dummyNum);
      display.textContent = dummyNum;
    } else {
      firstNum = dummyNum;
      console.log('New First Number: ' + firstNum);
      display.textContent = firstNum;
    }
  }
});
// Calculates a math problem
equals.addEventListener('click', e => {
  checkOutputLength();
  console.log('About to operate...');
  console.log('Equation: ' + firstNum + ' ' + op + ' ' + secondNum);
  operate(parseFloat(firstNum), op, parseFloat(secondNum));
  dot.setAttribute('style', `${'background-color: var(--default-button);'}`);
  dot.removeAttribute('disabled');
});

// Analyzes each numeric pad keypress
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
          gotDecimal = false;
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
          gotDecimal = false;
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
          gotDecimal = false;
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
          gotDecimal = false;
          dot.setAttribute(
            'style',
            `${'background-color: var(--default-button);'}`,
          );
          dot.removeAttribute('disabled');
          console.log('The operator is: ' + op);
          break;
        case '.':
          if (gotDecimal === true) {
            dot.setAttribute('disabled', 'true');
            dot.setAttribute(
              'style',
              `${'background-color: var(--clear-key_2);'}`,
            );
          } else {
            gotDecimal = true;
            display.textContent += '.';
            console.log('The decimal key has been clicked.');
            if (gotOperator === true) {
              secondNum += usrInput;
            } else {
              firstNum += usrInput;
            }
          }
          break;
      }
    } else {
      display.textContent += usrInput;
      if (gotOperator === true) {
        secondNum += usrInput;
        console.log('The second number is: ' + secondNum);
        equals.removeAttribute('disabled');
        equals.setAttribute(
          'style',
          `${'background-color: var(--operator-keypad_1);'}`,
        );
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
  if (gotDecimal === true) {
    return (num1 + num2).toFixed(2);
  } else {
    return num1 + num2;
  }
}

// Subtraction
function subtract(num1, num2) {
  if (gotDecimal === true) {
    return (num1 - num2).toFixed(2);
  } else {
    return num1 - num2;
  }
}

// Multiplication
function multiply(num1, num2) {
  if (gotDecimal === true) {
    return (num1 * num2).toFixed(2);
  } else {
    return num1 * num2;
  }
}

// Division
function divide(num1, num2) {
  let answer;
  let decimal = /^[-+]?[0-9]+\.[0-9]+$/;
  if (num1 === 0 || num2 === 0) {
    display_font.setAttribute('style', `${'font-size: 8ch;'}`);
    let emessage = (display.textContent = "YOU CAN'T DO THAT!!!");
    return emessage;
  } else {
    answer = num1 / num2;
    if (String(answer).match(decimal)) {
      return answer.toFixed(2);
    } else {
      return num1 / num2;
    }
  }
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

// Check length of answer to allow it to fit in the display
function checkAnswerLength() {
  if (answer.length > 9) {
    display_font.setAttribute('style', `${'font-size: 10ch;'}`);
  }
  if (display.textContent.length > 14) {
    display_font.setAttribute('style', `${'font-size: 8ch;'}`);
  }
  if (display.textContent.length > 20) {
    display_font.setAttribute('style', `${'font-size: 6ch;'}`);
  }
}

// Check length of the display text to allow it to fit the display properly
function checkOutputLength() {
  if (display.textContent.length > 9) {
    display_font.setAttribute('style', `${'font-size: 10ch;'}`);
  }
  if (display.textContent.length > 14) {
    display_font.setAttribute('style', `${'font-size: 8ch;'}`);
  }
  if (display.textContent.length > 20) {
    display_font.setAttribute('style', `${'font-size: 6ch;'}`);
  }
}

function checkKeyPress(key) {
  let cd = key.code;
  switch (cd) {
    //0
    case 'Numpad0':
      display.textContent += '0';
      break;
    case 'Digit0':
      display.textContent += '0';
      break;

    //1
    case 'Numpad1':
      display.textContent += '1';
      break;
    case 'Digit1':
      display.textContent += '1';
      break;

    //2
    case 'Numpad2':
      display.textContent += '2';
      break;
    case 'Digit2':
      display.textContent += '2';
      break;

    //3
    case 'Numpad3':
      display.textContent += '3';
      break;
    case 'Digit3':
      display.textContent += '3';
      break;

    //4
    case 'Numpad4':
      display.textContent += '4';
      break;
    case 'Digit4':
      display.textContent += '4';
      break;

    //5
    case 'Numpad5':
      display.textContent += '5';
      break;
    case 'Digit5':
      display.textContent += '5';
      break;

    //6
    case 'Numpad6':
      display.textContent += '6';
      break;
    case 'Digit6':
      display.textContent += '6';
      break;

    //7
    case 'Numpad7':
      display.textContent += '7';
      break;
    case 'Digit7':
      display.textContent += '7';
      break;

    //8
    case 'Numpad8':
      display.textContent += '8';
      break;
    case 'Digit8':
      display.textContent += '8';
      break;

    //9
    case 'Numpad9':
      display.textContent += '9';
      break;
    case 'Digit9':
      display.textContent += '9';
      break;

    //"/"
    case 'NumpadDivide':
      display.textContent += '/';
      break;
    case 'Slash':
      display.textContent += '/';
      break;

    //"*"
    case 'NumpadMultiply':
      display.textContent += '*';
      break;
    case '65':
      display.textContent += '*';
      break;

    //"-"
    case 'NumpadSubtract':
      display.textContent += '-';
      break;
    case 'Minus':
      display.textContent += '-';
      break;

    //"+"
    case 'NumpadAdd':
      display.textContent += '+';
      break;
    case '61':
      display.textContent += '+';
      break;

    //"Enter"
    case 'NumpadEnter':
      checkOutputLength();
      console.log('About to operate...');
      console.log('Equation: ' + firstNum + ' ' + op + ' ' + secondNum);
      operate(parseFloat(firstNum), op, parseFloat(secondNum));
      dot.setAttribute(
        'style',
        `${'background-color: var(--default-button);'}`,
      );
      dot.removeAttribute('disabled');
      break;

    case 'NumpadDecimal':
      display.textContent += '.';
      break;

    case 'Backspace':
      break;
    // Default
    default:
      console.log('Error. Key not found.');
  }
}
