

const num1Input = document.getElementById('left'); 
const num2Input = document.getElementById('right'); 
const calcButton = document.getElementById('calc');
const answerSpan = document.getElementById('answer');


calcButton.addEventListener('click', function() {
    
    const num1 = parseInt(num1Input.value);
    const num2 = parseInt(num2Input.value);

    
    const sum = num1 + num2;

    
    answerSpan.textContent = sum;
});