let nums = document.querySelectorAll('[data-n]');
let equal = document.querySelector('[data-eq]');
let del = document.querySelector('[data-delete]');
let ops = document.querySelectorAll('[data-op]');
let point = document.querySelector('[data-point]');
let clear = document.querySelector('[data-clear]');

let currArea = document.querySelector('[data-curr]');
let prevArea = document.querySelector('[data-prev]');

function performOperation(curr, prev) {
    let op = prev.substring(prev.length-1, prev.length);
    let firstOperand = parseFloat(prev.substring(0, prev.length-1));
    let secondOperand = parseFloat(curr);
    let result;
    switch(op) {
        case "+":
            return firstOperand + secondOperand;
        case "-":
            return firstOperand - secondOperand;
        case "*":
            return firstOperand*secondOperand;
        case "/":
            return firstOperand/secondOperand;
        default:
            return firstOperand;
    }
}

nums.forEach(e => {
    e.addEventListener('click', () => {
        currArea.innerText += e.innerText;
    });
});

point.addEventListener('click', ()=> {
    currArea.innerText += ".";
});

del.addEventListener('click', ()=>{
    currArea.innerText = currArea.innerText.substring(0, currArea.innerText.length-1);
});

ops.forEach(e => {
    e.addEventListener('click', ()=> {
        if(currArea.innerText !== "" && prevArea.innerText !=="") {
            prevArea.innerText = performOperation(currArea.innerText, prevArea.innerText) + e.innerText;
            currArea.innerText = "";
        } else {
            prevArea.innerText = currArea.innerText + e.innerText;
            currArea.innerText = " ";
        }       
    });
});

clear.addEventListener('click', ()=> {
    currArea.innerText = "";
    prevArea.innerText = "";
});

equal.addEventListener('click', ()=> {
    currArea.innerText = performOperation(currArea.innerText, prevArea.innerText);
    prevArea.innerText = "";
});