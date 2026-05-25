'use strict';

/**
 * Класс Book представляет книгу с названием, годом издания и ценой.
 */
class Book {
    /**
     * Создает экземпляр книги.
     * @param {string} title - Название книги.
     * @param {number} pubYear - Год издания.
     * @param {number} price - Цена книги.
     */
    constructor(title, pubYear, price) {
        this.title = title;       
        this.pubYear = pubYear;   
        this.#price = price;      
    }

    // --- Приватное поле ---
    #price;

    // --- Геттеры и Сеттеры ---

    get title() {
        return this._title;
    }

    set title(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new Error('Название книги не может быть пустой строкой.');
        }
        this._title = value;
    }

    get pubYear() {
        return this._pubYear;
    }

    set pubYear(value) {
        if (typeof value !== 'number' || value <= 0 || !Number.isInteger(value)) {
            throw new Error('Год издания должен быть положительным целым числом.');
        }
        this._pubYear = value;
    }

    get price() {
        return this.#price;
    }

    set price(value) {
        if (typeof value !== 'number' || value <= 0) {
            throw new Error('Цена должна быть положительным числом.');
        }
        this.#price = value;
    }

    /**
     * Выводит информацию о книге в консоль.
     */
    show() {
        console.log(`Книга: "${this.title}", Цена: ${this.price}`);
    }

    /**
     * Статический метод для сравнения книг по году издания.
     * @param {Book} bookA - Первая книга.
     * @param {Book} bookB - Вторая книга.
     * @returns {number} Отрицательное, если A < B; положительное, если A > B; 0, если равны.
     */
    static compare(bookA, bookB) {
        return bookA.pubYear - bookB.pubYear;
    }
}

/**
 * Проверяет, пуст ли объект (включая символьные свойства).
 * @param {object} obj - Объект для проверки.
 * @returns {boolean} true, если объектов нет свойств.
 */
function isEmpty(obj) {
    const stringKeys = Object.keys(obj);
    const symbolKeys = Object.getOwnPropertySymbols(obj);
    
    return Reflect.ownKeys(obj).length === 0;
}

/**
 * Объект с методами для управления CSS-классами.
 */
const classManager = {
    className: '',

    /**
     * Добавляет класс, если его нет.
     * @param {string} cls - Имя класса.
     * @returns {object} Сам объект для цепочки вызовов.
     */
    addClass(cls) {
        if (!this.className.split(' ').includes(cls)) {
            // Если строка пустая, просто присваиваем, иначе добавляем через пробел
            this.className = this.className ? `${this.className} ${cls}` : cls;
        }
        return this;
    },

    /**
     * Удаляет класс, если он есть.
     * @param {string} cls - Имя класса.
     * @returns {object} Сам объект для цепочки вызовов.
     */
    removeClass(cls) {
        const classes = this.className.split(' ').filter(c => c !== cls);
        this.className = classes.join(' ');
        return this;
    }
};

/**
 * Преобразует объект в JSON с отступами и обратно.
 * @param {object} obj - Исходный объект.
 */
function jsonDemo(obj) {
    // 1. Преобразование в JSON с отступом 2 пробела
    const jsonString = JSON.stringify(obj, null, 2);
    console.log('JSON строка:');
    console.log(jsonString);

    // 2. Декодирование
    const obj2 = JSON.parse(jsonString);

    // 3. Проверка равенства (глубокая проверка через JSON.stringify, так как == не работает для объектов)
    const isEqual = JSON.stringify(obj) === JSON.stringify(obj2);
    console.log('Объекты равны:', isEqual);
}

/**
 * Возвращает количество секунд, прошедших с начала текущего дня.
 * @returns {number} Количество секунд.
 */
function getSecondsToday() {
    const now = new Date();
    // Создаем дату на начало сегодняшнего дня (00:00:00)
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    
    // Разница в миллисекундах
    const diffMs = now - todayStart;
    
    // Переводим в секунды
    return Math.floor(diffMs / 1000);
}

/**
 * Форматирует дату в строку "дд.мм.гг".
 * @param {Date} date - Объект даты.
 * @returns {string} Отформатированная строка.
 */
function formatDate(date) {
    const d = String(date.getDate()).padStart(2, '0');
    const m = String(date.getMonth() + 1).padStart(2, '0'); // Месяцы с 0
    const y = String(date.getFullYear()).slice(-2); // Последние две цифры года
    
    return `${d}.${m}.${y}`;
}

// --- Экспорт для возможного использования в тестах или других модулях ---
export { Book, isEmpty, classManager, jsonDemo, getSecondsToday, formatDate };

// --- ДЕМОНСТРАЦИЯ РАБОТЫ (для проверки в консоли браузера) ---
if (typeof window !== 'undefined') {
    console.log('%c=== Лабораторная работа №4 ===', 'font-size: 16px; font-weight: bold;');

    // 1. Класс Book
    console.log('\n--- 1. Класс Book ---');
    try {
        const book1 = new Book('JavaScript Guide', 2020, 500);
        book1.show();
        
        
        const book2 = new Book('Clean Code', 2008, 700);
        const book3 = new Book('Design Patterns', 1994, 600);
        
        const books = [book1, book2, book3];
        books.sort(Book.compare);
        
        console.log('Отсортированные по году книги:');
        books.forEach(b => console.log(`${b.title} (${b.pubYear})`));
        
    } catch (e) {
        console.error('Ошибка при работе с Book:', e.message);
    }

    // 2. isEmpty
    console.log('\n--- 2. Функция isEmpty ---');
    console.log('Пустой объект {}:', isEmpty({})); // true
    console.log('Объект с символом:', isEmpty({[Symbol()]: true})); // false
    console.log('Объект с non-enumerable свойством:', isEmpty(Object.defineProperty({}, 'name', { value: 'John' }))); // false (Reflect.ownKeys видит все собственные ключи)

    // 3. classManager
    console.log('\n--- 3. Управление классами ---');
    let obj = { className: 'open menu' };
    // Присваиваем методы из нашего объекта-менеджера, чтобы они работали с контекстом obj
    obj.addClass = classManager.addClass.bind(obj);
    obj.removeClass = classManager.removeClass.bind(obj);

    obj.addClass('highlight');
    console.log('После addClass("highlight"):', obj.className); // "open menu highlight"
    
    obj.addClass('menu'); // Уже есть, не должно дублироваться
    console.log('После addClass("menu") (дубликат):', obj.className); // "open menu highlight"
    
    obj.removeClass('open');
    console.log('После removeClass("open"):', obj.className); // "menu highlight"

    // 4. JSON
    console.log('\n--- 4. JSON ---');
    const user = { name: 'Max', age: 20, skills: ['JS', 'React'] };
    jsonDemo(user);

    // 5. Дата и время
    console.log('\n--- 5. Дата и время ---');
    console.log('Секунд с начала дня:', getSecondsToday());
    console.log('Текущая дата (дд.мм.гг):', formatDate(new Date()));
}