// const display = document.querySelector('#input');
// const buttons = document.querySelector('.buttons');

// let displayValue = '0';
// let firstValue = null;
// let operator = null;
// let waitingForSecondValue = false;

// updateDisplay();

// function updateDisplay(){
//     display.value = displayValue;
// }

// buttons.addEventListener('click', function(e){
//     const element = e.target;

//     if (!element.matches('button')) return;

//     if (element.classList.contains('operator')){
//         //console.log('operator', element.value);
//         handleOperator(element.value);
//         return;
//     }
//     if (element.classList.contains('clear')){
//         //console.log('clear', element.value);
//         clear();
//         updateDisplay();
//         return;
//     }
//     if (element.classList.contains('decimal')){
//         //console.log('decimal', element.value);
//         inputDecimal();
//         updateDisplay();
//         return;
//     }

//     //console.log(element.value);
//     inputNumber(element.value);
//     updateDisplay();
// });

// function inputNumber(num){
//     displayValue = displayValue === '0' ? num : displayValue + num; 
// }

// function inputDecimal(){
//     if (!displayValue.includes(',')){
//         displayValue += ',';
//     }
// }

// function clear(){
//     displayValue = '0';
// }

// function handleOperator(operator){

// }

let display = document.querySelector('#input');
let numbers = document.querySelectorAll('.number');
let operator = document.querySelectorAll('.operator');
let result = document.querySelector('.equal');
let clear = document.querySelector('.clear');
let decimal = document.querySelector('.decimal');

clear.onclick = function(element){
    display.value = "0";
    location.reload();
};

numbers.forEach(function(element){
    element.onclick = function(e){
        if(display.value == "0"){
            display.value = "";
        }
        display.value += this.textContent;
    };
});

operator.forEach(function(element){
    element.onclick = function(e){
        display.value += this.value;
    };
});

result.onclick = function(element){
    if(display.value.includes('%')){

    }
    display.value = eval(display.value);
};

decimal.onclick = function(element){
    if(!display.value.includes('.')){
        display.value += this.value; 
    } else if (display.value.includes('.') && display.value.includes('+','-','*','/')){
        display.value += this.value;
    };
};
