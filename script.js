let firstDigit = 0;
let secondDigit = 0;
let operand = "";
let result = 0;

const display = document.querySelector('.display')
const numberButtons = document.querySelectorAll('.number');
const clearButton = document.querySelector('.clear');
const operandButtons = document.querySelectorAll('.operator')
const equalButton = document.querySelector('.equal')

numberButtons.forEach((numberButton) => {
    numberButton.addEventListener('click',() => {
        if (display.textContent === '0') {
            display.textContent = '';
        }
        if (display.textContent.length < 7) {
        display.textContent += numberButton.textContent;
        }
    });
})

clearButton.addEventListener('click' ,() => {
    display.textContent = 0;
})

function updateDisplay(value) {
  display.textContent = value;    
}

// Basic Math Functions

function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b; 
}

function divide(a,b) {
    return a / b;
}

function operate (operator,a,b) {
    return operator(a,b)
}
