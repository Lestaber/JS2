import { dateCalcForm } from './datecalc.js';

const dateCalcButton = document.querySelector('#dateCalcBtn');
const timerButton = document.querySelector('#timerBtn');

dateCalcButton.addEventListener('click', function () {
    dateCalcForm.style.display = 'block';
    timer.style.display = 'none';
})

timerButton.addEventListener('click', function () {
    timer.style.display = 'block';
    dateCalcForm.style.display = 'none';
})