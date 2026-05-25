'use strict';

const form = document.getElementById('tableForm');

// Паттерн: 3 собаки, 2 кота
const pattern = ['dog', 'dog', 'dog', 'cat', 'cat'];
const patternLength = pattern.length;
const animalsPerRow = 6;

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const rowsCount = parseInt(form.rows.value, 10);
    
    // Общий счетчик животных, чтобы сохранять последовательность между строками
    let globalAnimalIndex = 0;

    for (let i = 0; i < rowsCount; i++) {
        let rowString = '';
        
        for (let j = 0; j < animalsPerRow; j++) {
            // Берем животное из паттерна по модулю длины паттерна
            const animal = pattern[globalAnimalIndex % patternLength];
            
            if (j > 0) {
                rowString += '\t'; // Разделитель - табуляция
            }
            rowString += animal;
            
            globalAnimalIndex++;
        }
        
        console.log(rowString);
    }
});