// Requirements:

// 1. Create an HTML file that has two input fields to accept the two numbers to perform operations on.
// 2. Create 4 buttons to perform each of the basic mathematical functions (add, subtract, multiply, divide).
// 3. In your JavaScript, put an event listener on each of the buttons.
// 4. When the user performs one of the operations, output the result to another DOM element of your choice.


let add = document.getElementById('add');
let subtract = document.getElementById('subtract');
let multiply = document.getElementById('multiply');
let divide = document.getElementById('divide');
let answer = document.getElementById('answer');


add.addEventListener("click", function () {
    let num1 = parseInt(document.getElementById('number1').value);
    let num2 = parseInt(document.getElementById('number2').value);
    answer.innerHTML = `${num1 + num2}`;
    
});

subtract.addEventListener("click", function () {
    let num1 = parseInt(document.getElementById('number1').value);
    let num2 = parseInt(document.getElementById('number2').value);
    answer.innerHTML = `${num1 - num2}`;
});

multiply.addEventListener("click", function () {
    let num1 = parseInt(document.getElementById('number1').value);
    let num2 = parseInt(document.getElementById('number2').value);
    answer.innerHTML = `${num1 * num2}`;
});

divide.addEventListener("click", function () {
    let num1 = parseInt(document.getElementById('number1').value);
    let num2 = parseInt(document.getElementById('number2').value);
    answer.innerHTML = `${num1 / num2}`;
});

