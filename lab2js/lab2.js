'use strict';

/**
 * Возвращает число x в степени n.
 */
function pow(x, n) {
    return Math.pow(x, n);
}

/**
 * Вычисляет сумму чисел от 1 до n включительно.
 */
const sumTo = new Function('n', `
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
`);

/**
 * Проверяет, является ли год високосным.
 */
function isLeapYear(year) {
    return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}

/**
 * Вычисляет факториал числа n рекурсивно (BigInt).
 */
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1n;
    }
    return BigInt(n) * factorial(n - 1);
}

/**
 * Вычисляет n-е число Фибоначчи (BigInt).
 */
function fib(n) {
    if (n === 0) return 0n;
    if (n === 1) return 1n;

    let prev = 0n;
    let curr = 1n;

    for (let i = 2; i <= n; i++) {
        let next = prev + curr;
        prev = curr;
        curr = next;
    }
    return curr;
}

/**
 * Создает функцию сравнения с заданным значением x.
 */
function compare(x) {
    return function(y) {
        if (y > x) return true;
        if (y < x) return false;
        return null;
    };
}

/**
 * Возвращает сумму всех переданных аргументов.
 */
function sum(...args) {
    return args.reduce((acc, curr) => acc + curr, 0);
}

/**
 * Добавляет к объекту символьное свойство blackSpot.
 */
function addBlackSpot(obj) {
    const blackSpotSymbol = Symbol.for("blackSpot");
    obj[blackSpotSymbol] = true;
    return obj;
}

// ЭКСПОРТИРУЕМ ВСЕ ФУНКЦИИ ДЛЯ ИСПОЛЬЗОВАНИЯ В ТЕСТАХ И LAB3
export { pow, sumTo, isLeapYear, factorial, fib, compare, sum, addBlackSpot };