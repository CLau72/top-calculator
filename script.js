// Variables for math operations
let firstDigit = 0;
let secondDigit = 0;
let operand = "";
let result = 0;
let clearDisplay = false;

// Variables for DOM elements
const display = document.querySelector('.display')
const numberButtons = document.querySelectorAll('.number');
const clearButton = document.querySelector('.clear');
const operandButtons = document.querySelectorAll('.operator')
const equalButton = document.querySelector('.equal')

// Number buttons change display
numberButtons.forEach((numberButton) => {
    numberButton.addEventListener('click',() => {
        if (display.textContent === '0' || clearDisplay) {
            display.textContent = '';
            clearDisplay = false;
        }
        if (display.textContent.length < 7) {
        display.textContent += numberButton.textContent;
        }
    });
})

//Add functionality to operand buttons
operandButtons.forEach((operandButton)=> {
    operandButton.addEventListener('click', () => {
        // Set operand value based on text content of button
        switch (operandButton.textContent) {
            case '+':
                operand = add;
                console.log('add');
                break;
            case '-':
                operand = subtract;
                console.log('subtract');
                break;
            case 'x':
                operand = multiply;
                console.log('multiply');
                break;
            case '÷':
                operand = divide;
                console.log('divide');
                break;
        }
        if (!firstDigit) {
            firstDigit = parseInt(display.textContent)
            clearDisplay = true;
        } else if (firstDigit && operand) {
            secondDigit = parseInt(display.textContent)
            result = operate(operand, firstDigit, secondDigit)
            firstDigit = result;
            secondDigit = 0;
            operand = '';
            display.textContent = result; 
        }
    })
})

// Clear button clears display and all math variables
clearButton.addEventListener('click' ,() => {
    display.textContent = 0;
    firstDigit = 0;
    secondDigit = 0;
    operand = '';
    result = 0;
})

// Evaluate the math operation
equalButton.addEventListener('click',() => {
    if (firstDigit && operand)
    secondDigit = parseInt(display.textContent)
    result = operate(operand, firstDigit, secondDigit)
    firstDigit = result;
    secondDigit = 0;
    operand = '';
    display.textContent = result;
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
