'use strict';

const form = document.getElementById('primeForm');
const outputDiv = document.getElementById('output');

// Функция проверки на простоту
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const n = parseInt(form.n.value, 10);
    let primesList = [];

    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            primesList.push(i);
        }
    }

    outputDiv.textContent = primesList.join(', ');
});