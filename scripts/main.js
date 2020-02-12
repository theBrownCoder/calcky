const nine = {
    eventcode: 'Numpad9',
    padcode: 'Digit9'
}
function add(...args) {
  let input = [...args];
  let sum = 0;

  for (let x = 0; x < input.length; x++) {
    sum += input[x];
  }
  return sum;
}

function subtract(...args) {
  let input = [...args];
  let sum = 0;
  for (let s = 0; s < input.length; s++) {
    sum -= input[s];
  }
  return sum;
}

function multiply(...args) {
  let input = [...args];
  let sum = 1;
  for (let m = 0; m < input.length; m++) {
    sum *= input[m];
  }
  return sum;
}

function divide(...args) {
  let input = [...args];
  let sum = input[0];
  for (let d = 1; d < input.length; d++) {
    sum /= input[d];
  }
  return sum;
}

function operate(op, num1, num2){

}