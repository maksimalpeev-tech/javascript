'use strict';

const form = document.getElementById('pensionForm');
const resultArea = document.getElementById('result');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем перезагрузку страницы

    const age = parseInt(form.age.value, 10);
    const gender = form.gender.value;
    let message = '';

    if (age >= 0 && age <= 17) {
        message = "Вам работать ещё рано — учитесь";
    } else if (gender === 'male') {
        if (age >= 18 && age <= 59) {
            message = "Вам ещё работать и работать";
        } else if (age >= 60 && age <= 64) {
            message = "Скоро пенсия!";
        } else if (age >= 65) {
            message = "Вам пора на пенсию";
        } else {
            message = "Да кто ты такой?";
        }
    } else if (gender === 'female') {
        if (age >= 18 && age <= 54) {
            message = "Вам ещё работать и работать";
        } else if (age >= 55 && age <= 59) {
            message = "Скоро пенсия!";
        } else if (age >= 60) {
            message = "Вам пора на пенсию";
        } else {
            message = "Да кто ты такой?";
        }
    } else {
        message = "Да кто ты такой?";
    }

    resultArea.value = message;
});