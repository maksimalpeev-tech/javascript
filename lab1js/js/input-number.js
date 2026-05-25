'use strict';

const link = document.getElementById('getNumLink');

link.addEventListener('click', function(event) {
    event.preventDefault(); // Блокируем стандартный переход сразу

    let isNumberValid = false;
    let input;

    // Цикл запроса ввода
    while (true) {
        input = prompt('Введите число, большее 100:');
        
        // Если нажали Cancel
        if (input === null) {
            break; 
        }

        const number = Number(input);
        // Проверка: это число? и больше 100?
        if (!isNaN(number) && number > 100) {
            isNumberValid = true;
            break;
        }
    }

    if (isNumberValid) {
        // Переход по ссылке
        window.location.href = link.href;
    } else {
        // Запрос разрешения на переход
        const confirmTransition = confirm('Вы не ввели корректное число. Всё равно перейти на главную?');
        if (confirmTransition) {
            window.location.href = link.href;
        }
    }
});