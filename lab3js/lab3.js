'use strict';

// Импорт функции fib из лабы 2
import { fib } from '../lab2js/lab2.js';

/**
 * Возвращает дробную часть числа.
 */
export function getDecimal(num) {
    const absNum = Math.abs(num);
    const absDecimal = absNum - Math.floor(absNum);
    
    if (num < 0 && absDecimal > 0) {
        return Number((1 - absDecimal).toFixed(10));
    }
    return Number(absDecimal.toFixed(10));
}

/**
 * Нормализует URL.
 */
export function normalizeUrl(url) {
    const protocol = 'https://';
    if (url.startsWith('https://')) return url;
    if (url.startsWith('http://')) return protocol + url.slice(7);
    return protocol + url;
}

/**
 * Проверяет на спам.
 */
export function checkSpam(str) {
    const lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

/**
 * Усекает строку.
 */
export function truncate(str, maxlength) {
    if (str.length <= maxlength) return str;
    return str.slice(0, maxlength - 1) + '…';
}

/**
 * Преобразует в camelCase.
 */
export function camelize(str) {
    return str.replace(/-+(.)/g, (match, char) => char.toUpperCase());
}

/**
 * Массив чисел Фибоначчи.
 */
export function fibs(n) {
    const result = [];
    for (let i = 0; i < n; i++) {
        result.push(fib(i));
    }
    return result;
}

/**
 * Сортировка по убыванию.
 */
export function arrReverseSorted(arr) {
    const copy = [...arr];
    return copy.sort((a, b) => b - a);
}

/**
 * Уникальные значения.
 */
export function unique(arr) {
    return Array.from(new Set(arr));
}