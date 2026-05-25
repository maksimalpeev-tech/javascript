'use strict';

const form = document.getElementById('crowForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const num = parseInt(form.num.value, 10);
    let word = '';

    // Алгоритм выбора окончания для числительных
    // Остаток от деления на 100 нужен для исключения 11-19
    const lastDigit = num % 10;
    const lastTwoDigits = num % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
        word = 'ворон';
    } else if (lastDigit === 1) {
        word = 'ворона';
    } else if (lastDigit >= 2 && lastDigit <= 4) {
        word = 'вороны';
    } else {
        word = 'ворон';
    }

    alert(`На ветке сидит ${num} ${word}`);
});