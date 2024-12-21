const btnInput1 = document.getElementById('input1');
const btnInput2 = document.getElementById('input2');
const btnPlus = document.getElementById('plus');
const btnMinus = document.getElementById('minus');
const btnDivide = document.getElementById('divide');
const btnMultiply = document.getElementById('multiply');
const btnSubmit = document.getElementById('submit');
const numresult = document.getElementById('result');

let btnNum = null;

btnPlus.onclick = function() {
    btnNum = '+'
};

btnMinus.onclick = function() {
    btnNum = '-'
};

btnDivide.onclick = function() {
    btnNum = ':'
};

btnMultiply.onclick = function () {
    btnNum = '*'
};


btnSubmit.addEventListener('click', (event) => {
    event.preventDefault() 
    if (btnNum == '+') {
        const sum = Number(btnInput1.value) + Number(btnInput2.value);  
        numresult.textContent = sum;
    } else if (btnNum == '-') {
        const sum = Number(btnInput1.value) - Number(btnInput2.value);
        numresult.textContent = sum;
    } else if (btnNum == ':') {
        const sum = Math.round(Number(btnInput1.value) / Number(btnInput2.value));
        numresult.textContent = sum;
    } else if (btnNum == '*') {
        const sum = Math.round(Number(btnInput1.value) * Number(btnInput2.value));
        numresult.textContent = sum;
    }
})



