'use strict';

const person_1 = {
    name: 'Wer',
    family: 'Ber',
}
const person_2 = {
    name: 'Net',
    family: 'Peu'
}

function qwe () {
    console.log(`qwe ${this.name} ${this.family}`);
}

/**
 * 
 * Привязка объекта к функции в качестве контекста (он будет this внутри функции)
 */
// qwe.bind(person_1)();


// qwe(person_2); // Error : console.log(`qwe ${this.name} ${this.family}`);

const funcQwe = qwe.bind(person_1);
funcQwe();