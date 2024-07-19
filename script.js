let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        handleButtonClick(e.target.innerHTML);
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' ) {
        handleButtonClick('=');
    } else if (e.key === 'Backspace') {
        handleButtonClick('⌫');
    } else if (e.key === 'Delete') {
        handleButtonClick('AC');
    } else if (!isNaN(e.key) || ['+', '-', '*', '/', '.', '%'].includes(e.key)) {
        handleButtonClick(e.key);
    }
});

function handleButtonClick(value) {
    if (value === '=') {
        try {
            string = eval(string);
            input.value = string;
        } catch {
            input.value = "Error";
            string = "";
        }
    } else if (value === 'AC') {
        string = "";
        input.value = string;
    } else if (value === '⌫') {
        string = string.substring(0, string.length - 1);
        input.value = string;
    } else if (value === '÷') {
        string += '/';
        input.value = string;
    } else if (value === '×') {
        string += '*';
        input.value = string;
    } else {
        string += value;
        input.value = string;
    }
}
