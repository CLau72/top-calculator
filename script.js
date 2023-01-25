const display = document.querySelector('.display')

const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach((numberButton) => {
    numberButton.addEventListener('click',() => {
        if (display.textContent === '0') {
            display.textContent = '';
        }
        display.textContent += numberButton.textContent;
    });
})

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click' ,() => {
    display.textContent = 0;
})

function updateDisplay(value) {
  return 0;    
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
