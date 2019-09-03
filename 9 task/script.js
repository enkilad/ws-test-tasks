// Variables
let numBtns = document.querySelectorAll('div.button-num');
let operatorBtns = document.querySelectorAll('div.button-operator');
let equals = document.getElementById('equals');

let display = document.getElementById('display');
let clearLastBtn = document.getElementsByClassName('clear');
let clearAllBtn = document.getElementsByClassName('all-clear');

let leftOperand, rightOperand, operator, result = null;


// Events
numBtns.forEach(btn => {
  btn.addEventListener('click', insertNum, false);
});

operatorBtns.forEach(btn => {
  btn.addEventListener('click', doMath, false);
});


// Functions
function insertNum(e) {
  let numberBtn = e.target.innerText;
  if (numberBtn && display.innerText === '0') {
    display.innerText = '';
    display.innerText += numberBtn;
  } else if (numberBtn && display.innerText !== '' && !leftOperand) {
    // display.innerText = '';
    display.innerText += numberBtn;
  } else if (numberBtn === '.' && (display.innerText.includes('.') || /* doesn't work */display.innerText[0] === '0')) {
    display.innerText += '';
  }
}

function doMath(e) {
  if (e.target.innerText !== '=') { //   + - * /
    operator = e.target.innerText;
  }

  if (!leftOperand && !rightOperand) {
    leftOperand = +display.innerText; // || 0
    display.innerText = '0';
  } else if (leftOperand && !rightOperand) {
    rightOperand = +display.innerText; // || 0
    display.innerText = '0';
  } else if (leftOperand && operator && display.innerText !== '') {
    rightOperand = +display.innerText;
    display.innerText = '0';
  }

  if (leftOperand && rightOperand && operator) {
    calculate();
  }

  console.log('leftOperand =', leftOperand)
  console.log('operator', operator)
  console.log('rightOperand =', rightOperand)
  console.log('------------------------------------------');

}

function calculate() {

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
  display.innerText = result; //.toString()
  leftOperand = result;
  [rightOperand, operator] = [undefined, undefined];

  // if (leftOperand && !rightOperand)
}

function clearAll() {
  display.innerText = '0';
  [leftOperand, rightOperand] = [0, 0];
  operator = undefined;
}

function clearLast() {
  let displayLen = display.innerText.length;
  if (displayLen === 1) {
    display.innerText = '0';
  } else {
    display.innerText = display.innerText.slice(0, displayLen - 1);
  }
}