// Variables
const numBtns = document.querySelectorAll('div.button-num');
const operatorBtns = document.querySelectorAll('div.button-operator');
const equals = document.getElementById('equals');

const display = document.getElementById('display');
const clearLastBtn = document.getElementsByClassName('clear');
const clearAllBtn = document.getElementsByClassName('all-clear');
const decimal = document.getElementById('decimal');

let leftOperand,
  rightOperand,
  operator,
  result = null;

// Functions
const insertNum = e => {
  const chosenNumber = e.target.innerText;
  if (chosenNumber && display.innerText === '0') {
    display.innerText = '';
    display.innerText += chosenNumber;
  } else if (chosenNumber && display.innerText !== '' && !leftOperand) {
    display.innerText += chosenNumber;
  }
};

const insertDecimal = () => {
  if (display.innerText.includes('.')) {
    display.innerText += '';
  }
};

const doMath = e => {
  const chosenOperation = e.target.innerText;
  if (chosenOperation !== '=') {
    //   + - * /
    operator = chosenOperation;
  }

  if (!leftOperand && !rightOperand) {
    leftOperand = +display.innerText || 0;
    display.innerText = '0';
  } else if (leftOperand && !rightOperand) {
    rightOperand = +display.innerText || 0;
    display.innerText = '0';
  } // else if (leftOperand && operator && display.innerText !== '') {
  //   rightOperand = +display.innerText;
  //   display.innerText = '0';
  // }

  if (leftOperand && rightOperand && operator) {
    calculate();
  }

  console.log('leftOperand =', leftOperand);
  console.log('operator', operator);
  console.log('rightOperand =', rightOperand);
  console.log('------------------------------------------');
};

const calculate = e => {
  display.innerText = '0';
  // console.log('leftOperand =', leftOperand);
  // console.log('rightOperand =', rightOperand);

  switch (operator) {
    case '+':
      result = leftOperand + rightOperand;
      break;
    case '-':
      result = leftOperand - rightOperand;
      break;
    case '×':
      result = leftOperand * rightOperand;
      break;
    case '÷':
      result = leftOperand / rightOperand;
      break;
    // case '=':
    //   if (leftOperand)
    //     display.innerText = result.toString();
    //   break;
  }
  display.innerText = result;
  leftOperand = +result;
  [rightOperand, operator] = [undefined];
};

const clearAll = () => {
  display.innerText = '0';
  [leftOperand, rightOperand] = [0, 0];
  operator = undefined;
};

const clearLast = () => {
  let displayLen = display.innerText.length;
  if (displayLen === 1) {
    display.innerText = '0';
  } else {
    display.innerText = display.innerText.slice(0, displayLen - 1);
  }
};

// Events
numBtns.forEach(btn => {
  btn.addEventListener('click', insertNum, false);
});

operatorBtns.forEach(btn => {
  btn.addEventListener('click', doMath, false);
});

decimal.addEventListener('click', insertDecimal, false);
