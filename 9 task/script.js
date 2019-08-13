// // Variables

// let display = document.getElementById('display');
// let displayText = display.innerText;
// let buttonNum = document.getElementsByClassName('button-num');

// // let displayValue = '0';

// // Functions

// const insertNum = (clickObj) => {
//   let buttonText = clickObj.target.innerText;
//   // displayText += buttonText;

//   if (displayText === '0' || displayText === '') {
//     // displayText = '';
//     displayText = buttonText;
//   }

// }

// const allClear = () => {
//   display.innerHTML = '';
// }

// const clear = () => {

// }

// // 

// for (let i = 0; i < buttonNum.length; i++) {
//   buttonNum[i].addEventListener('click', insertNum);
// }


let numBtns = document.querySelectorAll('div.button-num');
let operatorBtns = document.querySelectorAll('div.button-operator');
// let display = document.getElementById('display').innerText; // ???!?!?!
let display = document.getElementById('display');
// let displayText = display.innerText;
let clearLastBtn = document.getElementsByClassName('clear');
let clearAllBtn = document.getElementsByClassName('all-clear');


numBtns.forEach(btn => {
  btn.addEventListener('click', insertNum, false);
});

operatorBtns.forEach(btn => {
  btn.addEventListener('click', doMath, false);
});


function insertNum(e) {
  let btnText = e.target.innerText;
  if (display.innerText === '0' || display.innerText === '') {
    display.innerText = '';
    display.innerText = btnText;
  } else if (display.innerText.includes('.') && btnText === '.') {
    return false;
    // } else if (display.innerText === '0' && btnText === '.') {
    //   display.innerText += '.';
  } else {
    display.innerText += btnText;
  }
}

function doMath(e) {
  let btnText = e.target.innerText;
  let firstOperand, nextOperand;
  switch (btnText) {
    case '+':
      firstOperand = display.innerText;
      console.log('firstOperand =', firstOperand);
      display.innerText = '';
      if (firstOperand !== '') {
        let result = parseInt(firstOperand, 10) + parseInt(display.innerText, 10);
        display.innerText = result;
      }
      break;
    case '-':

      break;
    case '×':

      break;
    case '÷':

      break;
    case '=':

      break;
  }
}

if (display.innerText === '') {
  display.innerText += '0';
}

function clearAll() {
  display.innerText = '0';
}

function clearLast() {
  display.innerText = display.innerText.slice(0, display.innerText.length - 1);
}

// if (display.innerText === '0' || display.innerText === '') {
//   return false;