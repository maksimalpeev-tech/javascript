'use strict';

/**
 * Возвращает число x в степени n.
 * @param {number} x - Основание степени.
 * @param {number} n - Показатель степени (целое число, может быть отрицательным).
 * @returns {number} Результат возведения x в степень n.
 */
function pow(x, n) {
    return Math.pow(x, n);
}

/**
 * Вычисляет сумму чисел от 1 до n включительно, используя синтаксис new Function.
 * @param {number} n - Натуральное число (положительное целое).
 * @returns {number} Сумма арифметической прогрессии от 1 до n.
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
 * Год високосный, если он кратен 400, или кратен 4 и не кратен 100.
 * @param {number} year - Год для проверки (целое число).
 * @returns {boolean} true, если год високосный; false в противном случае.
 */
function isLeapYear(year) {
    return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}

/**
 * Вычисляет факториал числа n рекурсивно.
 * Использует тип BigInt для поддержки больших чисел.
 * @param {number} n - Неотрицательное целое число.
 * @returns {bigint} Факториал числа n.
 */
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1n;
    }
    return BigInt(n) * factorial(n - 1);
}

/**
 * Вычисляет n-е число последовательности Фибоначчи.
 * Использует тип BigInt для поддержки больших чисел.
 * @param {number} n - Индекс числа в последовательности (начиная с 0).
 * @returns {bigint} n-е число Фибоначчи.
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
 * Создает функцию-компаратор, которая сравнивает переданное значение с замыкаемым значением x.
 * @param {number} x - Значение для сравнения (замыкается во внутренней функции).
 * @returns {function(number): (boolean|null)} Функция, принимающая число y и возвращающая:
 *   - true, если y > x;
 *   - false, если y < x;
 *   - null, если y === x.
 */
function compare(x) {
    return function(y) {
        if (y > x) return true;
        if (y < x) return false;
        return null;
    };
}

/**
 * Возвращает сумму всех переданных числовых аргументов.
 * @param {...number} args - Переменное количество числовых аргументов.
 * @returns {number} Сумма всех аргументов. Если аргументов нет, возвращает 0.
 */
function sum(...args) {
    return args.reduce((acc, curr) => acc + curr, 0);
}

/**
 * Добавляет к объекту символьное свойство "blackSpot" со значением true.
 * Символ берется из глобального реестра через Symbol.for().
 * @param {object} obj - Объект, к которому нужно добавить свойство.
 * @returns {object} Тот же самый объект с добавленным свойством.
 */
function addBlackSpot(obj) {
    const blackSpotSymbol = Symbol.for("blackSpot");
    obj[blackSpotSymbol] = true;
    return obj;
}

// Экспортируем все функции для использования в тестах и других модулях
export { pow, sumTo, isLeapYear, factorial, fib, compare, sum, addBlackSpot };
