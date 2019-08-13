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
    // } else if (display.innerText.includes('.') && btnText === '.') {
    //   display.innerText += '.';
  } else {
    display.innerText += btnText;
  }
}

function doMath(e) {
  let btnText = e.target.innerText;
  let previousVal;
  switch (btnText) {
    case '+':
      previousVal = display.innerText;
      console.log('previousVal =', previousVal);
      display.innerText = '';
      // let result = parseInt(previousVal, 10) + parseInt(display.innerText, 10);
      // display.innerText = result;
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

function clearAll() {
  display.innerText = '';
}

function clearLast() {
  display.innerText = display.innerText.slice(0, display.innerText.length - 1);
}
